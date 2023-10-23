import {
  Box,
  Container,
  Stack,
  VStack
} from "@chakra-ui/react";
import { ReactNode } from "react";
import BottomNavigation from "../components/other/bottom-navigation";
import TopNavigation from "../components/other/top-navigation";

interface MobileLayoutProps {
  children: ReactNode
}

export default function MobileLayout(props: MobileLayoutProps) {
  const { children } = props
  return (
    <Box bg={'telegram.50'}>
      <Container maxW={'container.sm'} px={{ sm: '0px' }}>
        <VStack
          bg={'white'}
          height={'100vh'}
          spacing={0}
          overflow={'hidden'}
        >
          <TopNavigation />
          <Stack
            width={'100%'}
            height={'88vh'}
            overflowY={'scroll'}
            p={10}
          >
            {children}
          </Stack>
          <BottomNavigation />
        </VStack>
      </Container>
    </Box>
  )
}
