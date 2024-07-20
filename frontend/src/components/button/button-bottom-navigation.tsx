import {
  Box,
  Icon, Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {
  icon: any
  text: string
  href: string
  isActive?: boolean
}
export default function ButtonBottomNavigation(props: IProps) {
  const { icon, text, href, isActive } = props
  return (
    <Box
      bg={(isActive) ? '#6366F1' : 'white'}
      color={(isActive) ? 'white' : '#6366F1'}
      py={'5px'}
      px={'5%'}
      width={'30%'}
      textAlign={'center'}
    >
      <Link to={href}>
        <Icon as={icon} fontSize={'2xl'} />
        <Text fontSize={'md'} fontWeight={'normal'}>{text}</Text>
      </Link>
    </Box>
  )
}
