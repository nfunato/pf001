import { ReactNode, FC } from "react";
import { Button, Text } from "@chakra-ui/react";

// <Text fontSize={fontSz} fontWeight="medium">

type Props = {
  t: string;
  h: string; // number;
  onClick: () => void;
  fontSize?: string | number;
  //size?: "lg" | "md" | "sm" | "xs";
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const TextButton: FC<Props> = (props) => {
  const {
    t,
    h,
    onClick,
    // fontsize = 16,
    // fontSize = 16,
    fontSize = "md",
    isDisabled = false,
    isLoading = false
  } = props;

  // bg="teal.400"
  return (
    <Button
      h={h}
      color="black"
      variant="outline"
      //    size={size}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      <Text fontSize={fontSize} fontWeight="medium">
        {t}
      </Text>
    </Button>
  );
};
