import Box from 'components/box'
import HStack from 'components/hStack'
import VStack from 'components/vStack'
import Text from 'components/text'
import styles from './style.module.css'

const Header = () => {
  return (
    <Box _as="header" height="403px">
      <HStack align="center">
        <VStack align="center" spacing="34px">
          <VStack align="center" spacing="15px">
            <Text
              align="center"
              variant="headingLight"
              color="gray4"
              className={styles.headerTitle}
            >
              HashiCorp Humans
            </Text>
            <Text align="center">Find a HashiCorp human</Text>
          </VStack>
          <VStack align="center" spacing="15px">
            <input type="search" placeholder="Search people by name" />
            <HStack spacing="12px" align="center">
              <input id="filter-humans" type="checkbox" />
              <Text
                _as="label"
                htmlFor="filter-humans"
                align="center"
                variant="label"
                color="gray4"
                style={{ width: 'max-content' }}
              >
                Hide people missing a profile image
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  )
}

export default Header
