import {
  Button,
  Container,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text } from "../views/atoms/Text/Text";
import { TYPONAME } from "../theme/Typo";
import { COLOR, COLORNAME } from "../theme/Color";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      bgColor={useColorModeValue(
        COLOR[COLORNAME.background2],
        COLOR[COLORNAME.foreground1]
      )}
      borderRadius={10}
    >
      <Stack borderRadius="lg" p={3} mb={6} spacing={5}>
        <Button
          bgColor={useColorModeValue(
            COLOR[COLORNAME.white],
            COLOR[COLORNAME.white]
          )}
          onClick={() => {
            toggleColorMode();
            console.log(colorMode);
          }}
        />
        <Text color={COLORNAME.white} typo={TYPONAME.hero}>
          Hero
        </Text>
        <Text color={COLORNAME.white} typo={TYPONAME.body}>
          body body body body body
        </Text>
        <Text color={COLORNAME.white} typo={TYPONAME.header1}>
          header1
        </Text>
        <Text color={COLORNAME.white} typo={TYPONAME.header2}>
          header2
        </Text>
      </Stack>
    </Container>
  );
};

export default IndexPage;
