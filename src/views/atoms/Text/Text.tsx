import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ColorValue } from "../../../theme/Color";
import { Typo } from "../../../theme/Typo";

type TextProps = {
  children: string;
  color: ColorValue;
  typo: Typo;
};

export const Text: FC<TextProps> = (props) => {
  return (
    <Box {...props.typo} w={"fit-content"}>
      {props.children}
    </Box>
  );
};
