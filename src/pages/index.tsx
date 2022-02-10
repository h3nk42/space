import { Container, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { COLOR, COLORNAME } from "../theme/Color";
import { Media } from "../lib/responsive/Media";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      bgColor={useColorModeValue(
        COLOR[COLORNAME.background2],
        COLOR[COLORNAME.foreground1]
      )}
      borderRadius={10}
      /* height={500}
      width={500}*/
    >
      Test
    </Container>
  );
};

export default IndexPage;
