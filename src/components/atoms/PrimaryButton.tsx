import { ReactNode, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  size?: "lg" | "md" | "sm" | "xs";
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = (props) => {
  const {
    children,
    size = "md",
    isDisabled = false,
    isLoading = false,
    onClick
  } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      size={size}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
