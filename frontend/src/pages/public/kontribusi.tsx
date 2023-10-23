import { Button, Heading, Text, Icon, Stack } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

import MobileLayout from "../../layout/mobile-layout";
import { Link } from "react-router-dom";

export default function Kontribusi() {
  return (
    <MobileLayout>
      <Stack justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Heading textAlign={'center'} mb={5}>
          Kontribusi
        </Heading>
        <Text textAlign={'center'} fontSize={'lg'} mb={5}>
          Ingin <b>ikut berkontribusi?</b> pada pengembangan aplikasi ini. Silahkan kunjungi github repository berikut, untuk mendapatkan akses kode aplikasi ini
        </Text>
        <Link target={'_blank'} to={'https://github.com/radityohanif/sibi-sign-language-detection'}>
          <Button colorScheme={'gray'}>
            <Icon as={FiGithub} fontSize={'xl'} mr={2} />
            Github
          </Button>
        </Link>
      </Stack>
    </MobileLayout>
  )
}
