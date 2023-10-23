import {
  Stack
} from "@chakra-ui/react";
import { FiBookmark, FiCamera, FiGithub } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import ButtonBottomNavigation from "../button/button-bottom-navigation";

export default function BottomNavigation() {
  const location = useLocation()
  const path = location.pathname

  return (
    <Stack
      bg={'white'}
      width={'100%'}
      height={'7vh'}
    >
      <Stack height={'100%'} direction={'row'} spacing={0} justifyContent={'center'}>
        <ButtonBottomNavigation
          icon={FiBookmark}
          text={'Beranda'}
          href={'/'}
          isActive={(path == '/') ? true : false}
        />
        <ButtonBottomNavigation
          icon={FiCamera}
          text={'Deteksi'}
          href={'/deteksi'}
          isActive={(path == '/deteksi') ? true : false}
        />
        <ButtonBottomNavigation
          icon={FiGithub}
          text={'Kontribusi'}
          href={'/kontribusi'}
          isActive={(path == '/kontribusi') ? true : false}
        />
      </Stack>
    </Stack>
  )
}
