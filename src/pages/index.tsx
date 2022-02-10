import { Box, Container } from "@chakra-ui/react";
import { COLOR } from "../theme/Color";
import { Text } from "../views/atoms/Text/Text";
import { TYPO } from "../theme/Typo";
import { Blob } from "../views/atoms/animations/Blob/Blob";
import { PADDING } from "../theme/LayoutSizes";
import { ChooseResponsive } from "../lib/responsive/ChooseResponsive";
import { BREAKPOINTNAME } from "../theme/Breakpoints";

const IndexPage = () => {
  return (
    <Container
      /*bgColor={useColorModeValue(
        COLOR[COLORNAME.background2],
        COLOR[COLORNAME.foreground1]
      )}*/
      borderRadius={10}
      mb={16}
      // @ts-ignore
      align={"center"}
    >
      <Box pt={PADDING.lg}>
        <Text color={COLOR.white} typo={TYPO.hero}>
          HENK VAN DER SLOOT
        </Text>
      </Box>
      <ChooseResponsive
        defaultComponent={
          <Box
            position={"absolute"}
            left={0}
            right={0}
            top={16}
            zIndex={-1}
            marginLeft={"auto"}
            marginRight={"auto"}
            width={500}
          >
            <Blob size={500} />
          </Box>
        }
        breakpointComponents={{
          [BREAKPOINTNAME.sm]: (
            <Box
              position={"absolute"}
              left={0}
              right={0}
              top={16}
              zIndex={-1}
              marginLeft={"auto"}
              marginRight={"auto"}
              width={250}
            >
              <Blob size={250} />
            </Box>
          ),
        }}
      />
    </Container>
  );
};

export default IndexPage;
