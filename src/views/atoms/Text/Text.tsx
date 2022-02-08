import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { COLOR, COLORNAME, ColorName } from "../../../theme/Color";
import { TYPO, TypoName } from "../../../theme/Typo";

type TextProps = {
  children: string;
  color: ColorName;
  typo: TypoName;
};

export const Text: FC<TextProps> = (props) => {
  return (
    <Box
      bgColor={COLOR[COLORNAME.foreground2]}
      color={COLOR[props.color]}
      {...TYPO[props.typo]}
    >
      {props.children}
    </Box>
  );
};
