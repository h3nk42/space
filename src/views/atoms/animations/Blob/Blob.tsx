import Lottie, { LottieProps } from "react-lottie";
import BlobAnimation from "../../../../assets/shared/animations/blob-2-lottie.json";
import { Box } from "@chakra-ui/react";

export const Blob = (props: { size: number }) => {
  const defaultOptions: LottieProps["options"] = {
    loop: true,
    autoplay: true,
    animationData: BlobAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box pointerEvents={"none"}>
      <Lottie
        height={props.size}
        width={props.size}
        style={{ position: "absolute", zIndex: 1 }}
        options={defaultOptions}
        isClickToPauseDisabled
      />
    </Box>
  );
};
