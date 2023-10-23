import { Button, Heading, Stack } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Stack>
      <Heading mb={5}>
        Maaf, Halaman tidak ditemukan
      </Heading>
      <Button
        colorScheme={'whatsapp'}
        onClick={() => {
          window.history.back()
        }}
      >
        Kembali
      </Button>
    </Stack>
  )
}