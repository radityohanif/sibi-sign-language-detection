import { Box } from "@chakra-ui/react"
import Logo from "./logo"

export default function Loading() {
  return (
    <Box id="loading-screen" as="div" height={'100vh'} width={'100wh'} bg={'white'} position={'fixed'}
      right={0} left={0} top={0} bottom={0} zIndex={999} opacity={1}
      justifyContent={'center'} alignItems={'center'}
      display={'none'}
    >
      <Logo loading={true} />
    </Box>
  )
}
