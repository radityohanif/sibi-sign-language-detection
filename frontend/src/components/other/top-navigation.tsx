import {
  Text,
  Box,
  Stack
} from "@chakra-ui/react";

export default function TopNavigation() {
  return (
    <Stack
      bgGradient='linear(to-l, #6366F1, #6366F1)'
      width={'100%'}
      height={'5vh'}
      color={'white'}
    >
      <Box
        height={'100%'}
        display={'flex'}
        px={5}
        alignItems={'center'}
      >
        <Text
          fontSize={'lg'}
          fontWeight={'semibold'}
        >
          Deteksi SIBI Online
        </Text>
      </Box>
    </Stack>
  )
}
