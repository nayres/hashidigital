import { HTMLProps } from 'react'
import Image from 'next/image'
import Box from 'components/box'
import VStack from 'components/vStack'
import Text from 'components/text'
import FallbackAvatar from './FallbackAvatar'
import style from './style.module.css'

type ResultsTileProps = {
  avatar: string
  avatarAlt?: string
  name: string
  title: string
  department: string
} & HTMLProps<HTMLDivElement>

const ResultsTile = ({
  avatar,
  avatarAlt,
  name,
  title,
  department,
  ...props
}: ResultsTileProps) => {
  return (
    <Box
      width="30%"
      height="100%"
      border="1px solid #C0C0C0"
      padding="17px 0 0 0"
      {...props}
    >
      <VStack align="center" spacing="14px">
        <Box radius="100%" className={style.roundImage}>
          {avatar ? (
            <Image
              src={avatar}
              quality={100}
              width={107}
              height={107}
              alt={avatarAlt ?? `avatar for ${name}`}
            />
          ) : (
            <FallbackAvatar />
          )}
        </Box>
        <VStack>
          <Text variant="headingBold" color="gray3" align="center">
            {name}
          </Text>
          <Text variant="body" color="gray4" align="center">
            {title}
          </Text>
          <Text variant="body" color="gray4" align="center">
            {department}
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default ResultsTile
