import {
  Avatar,
  Button,
  HStack,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { FiClock, FiSettings } from "react-icons/fi";
import MobileLayout from "../../layout/mobile-layout";
import { useAlert } from "../../util/useAlert";

export default function Profile() {
  return (
    <MobileLayout>
      <Stack>
        <HStack mb={5}>
          <Avatar
            name={'Hanif Radityo'}
            bg={'telegram.500'}
            color={'white'}
            size={'lg'}
            mr={2}
          />
          <Stack>
            <Text
              fontSize={'lg'}
              fontWeight={'medium'}
            >
              Hanif Radityo
            </Text>
            <Button size={'sm'} variant={'outline'} colorScheme={'telegram'} onClick={() => {
              useAlert.setErrorMessage("fitur ini masih dalam tahap pengembangan")
            }}>
              Edit Profile
            </Button>
          </Stack>
        </HStack>

        <HStack py={3}>
          <Icon fontSize={'xl'} as={FiClock} mr={5} />
          <Text fontSize={'lg'} fontWeight={'medium'}>
            Pengingat
          </Text>
        </HStack>
        <HStack py={3}>
          <Icon fontSize={'xl'} as={FiSettings} mr={5} />
          <Text fontSize={'lg'} fontWeight={'medium'}>
            Pengaturan
          </Text>
        </HStack>
      </Stack>
    </MobileLayout>
  )
}
