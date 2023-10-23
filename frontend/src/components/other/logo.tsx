import '../../styles/keyframes.css'
import { Image } from '@chakra-ui/react'

const Logo = (props: any) => {
  const { loading, width, height } = props

  return (
    <Image
      className={(loading) ? 'logo-animation' : ''}
      src='/vite.svg'
      width={(width) ? `${width}px` : '387px'}
      height={(height) ? `${height}px` : '124px'}
    >
    </Image>
  )
}

export default Logo;