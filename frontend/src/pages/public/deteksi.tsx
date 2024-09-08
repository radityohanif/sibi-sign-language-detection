import { Box, Heading, Stack, Text, Badge } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import MobileLayout from "../../layout/mobile-layout";

export default function Deteksi() {
  const debugMode = true;
  const [label, setLabel] = useState<any>();
  const [response, setResponse] = useState<any>();
  const [bbox, setBbox] = useState<number[] | null>(null); // Bounding box state
  const webcamRef = useRef<any>(null);

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
          console.log({ result });

          if (result && result[0]) {
            setLabel(result[0].class); // Set the detected class
            setBbox(result[0].bbox); // Set the bounding box from the result
          } else {
            setLabel(null);
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
        <Heading>Deteksi Bahasa Isyarat</Heading>
        <Stack direction="row" hidden={debugMode == false}>
          <Badge variant="solid" colorScheme="green">
            Debug Mode
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
      <Stack>
        <Text>Label: {label}</Text>
        <Box hidden={debugMode == false}>
          <Text>Debug:</Text>
          <code>{response}</code>
        </Box>
      </Stack>
    </MobileLayout>
  );
}
