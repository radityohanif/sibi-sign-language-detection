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
  Image
} from "@chakra-ui/react"

interface IProps {
  text: string
  imageUrl: string
}

export default function ButtonWithModalImage(props: IProps) {
  const { text, imageUrl } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bentuk SIBI dari huruf {text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imageUrl} height={'250px'} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button colorScheme="telegram" variant={'outline'} onClick={onOpen}>
        {text}
      </Button>
    </>
  )
}
