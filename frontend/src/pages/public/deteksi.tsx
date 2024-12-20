import { Box, Heading, Stack, Text, Badge, Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import MobileLayout from "../../layout/mobile-layout";

export default function Deteksi() {
  const debugMode: any = false;
  const [words, setWords] = useState<any>([]);
  const [label, setLabel] = useState<any>();
  const [confidence, setConfidence] = useState<any>();
  const [response, setResponse] = useState<any>();
  const [bbox, setBbox] = useState<number[] | null>(null); // Bounding box state
  const webcamRef = useRef<any>(null);

  const addWord = (newWord: string) => {
    setWords((prevWords: string[]) => {
      // Cek apakah elemen terakhir dari array sama dengan newWord
      if (prevWords[prevWords.length - 1] !== newWord) {
        return [...prevWords, newWord];
      }
      return prevWords; // Jika sama, kembalikan array lama tanpa perubahan
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      captureImage();
    }, 1000); // Capture every 100ms
    return () => clearInterval(interval);
  }, []);

  const captureImage = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc) {
        // Convert the base64 image to a Blob
        const blob = await fetch(imageSrc).then((res) => res.blob());

        // Create a FormData object
        const formData = new FormData();
        formData.append("file", blob, "webcam_image.jpg"); // 'file' matches the key used in your backend, and 'webcam_image.jpg' is a filename

        try {
          const response = await fetch("http://127.0.0.1:5003/api/predict", {
            method: "POST",
            body: formData, // Send the FormData containing the image
          });
          const result = await response.json();
          setResponse(JSON.stringify(result));

          if (result && result[0]) {
            setLabel(result[0].class); // Set the detected class
            setConfidence(result[0].confidence); // Set the detected class
            setBbox(result[0].bbox); // Set the bounding box from the result
            addWord(result[0].class);
          } else {
            // setConfidence(null);
            // setLabel(null);
            setBbox(null);
          }
        } catch (error) {
          alert("Terjadi kesalahan pada aplikasi");
          console.error({ error });
        }
      }
    }
  };

  return (
    <MobileLayout>
      <Stack marginBottom={"20px"}>
        <Heading>
          {words.map((word: any) => {
            return word;
          })}
        </Heading>
        <Stack direction="row">
          <Badge variant="solid" colorScheme="red" hidden={debugMode == false}>
            Debug Mode
          </Badge>
          <Badge variant="solid" colorScheme="green" hidden={debugMode == true}>
            Normal Mode
          </Badge>
        </Stack>
      </Stack>
      <Box position="relative" width="100%" height="auto" marginBottom={"20px"}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Bounding Box Overlay */}
        {bbox && (
          <Box
            position="absolute"
            border="2px solid red"
            left={`${bbox[0]}px`}
            top={`${bbox[1]}px`}
            width={`${bbox[2] - bbox[0]}px`}
            height={`${bbox[3] - bbox[1]}px`}
          ></Box>
        )}
      </Box>
      <Stack gap={5}>
        <Button colorScheme="red" variant={'outline'} onClick={() => setWords([])}>Reset</Button>
        <Text>Label: {label}</Text>
        <Text>Confidence: {confidence}</Text>
        <Box hidden={debugMode == false}>
          <Text>Debug:</Text>
          <code>{response}</code>
        </Box>
      </Stack>
    </MobileLayout>
  );
}
