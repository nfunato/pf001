import { FC } from "react";
import { Button, Text } from "@chakra-ui/react";

type Props = {
  t: string;
  h: string; // number;
  onClick: () => void;
  fontSize?: string | number;
  fontWeight?: string | number;
  bgColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const TextButton: FC<Props> = (props) => {
  const {
    t,
    h,
    onClick,
    fontSize = "md", // "xl", "lg", "md", "sm",
    fontWeight = "medium",
    bgColor,
    isDisabled = false,
    isLoading = false
  } = props;

  return (
    <Button
      h={h}
      color="black"
      variant="outline"
      //    size={size}
      bgColor={bgColor ?? "white"}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      _hover={{ bg: "blue.200", opacity: 0.8 }}
      onClick={onClick}
    >
      <Text fontSize={fontSize} fontWeight={fontWeight}>
        {t}
      </Text>
    </Button>
  );
};
