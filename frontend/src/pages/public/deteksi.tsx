import { Heading, Text } from "@chakra-ui/react";
import MobileLayout from "../../layout/mobile-layout";
import { FileUpload } from "primereact/fileupload";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Deteksi() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isError, setIsError] = useState<boolean>(false);
  const [label, setLabel] = useState<any>();
  const [blobImage, setBlobImage] = useState<any>();

  const onUpload = (e: any) => {
    console.log("masuk")
    try {
      const response = JSON.parse(e.xhr.responseText);
      setLabel(response[0].class);
      setBlobImage(e.files[0].objectURL);
      setIsError(false);
      onOpen();
    } catch (error) {
      onOpen();
      setIsError(true);
    }
  };

  return (
    <MobileLayout>
      <Heading marginBottom={"20px"}>Deteksi</Heading>
      <FileUpload
        name="file"
        onUpload={onUpload}
        url={"http://127.0.0.1:5003/api/predict"}
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={<p className="m-0">Silahkan Upload Gambar Anda disini</p>}
      />
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {isError ? (
            <>
              <ModalHeader>Bahasa Isyarat Tidak Terdeteksi</ModalHeader>
              <ModalCloseButton />
            </>
          ) : (
            <>
              <ModalHeader>Hasil Deteksi</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Teredeteksi Bahasa Isyarat Huruf <b>{label}</b> 
                  <Image src={blobImage} />
                </Text>
              </ModalBody>
            </>
          )}
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MobileLayout>
  );
}
