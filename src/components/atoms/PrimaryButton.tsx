import { ReactNode, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  h: string; // number;
//size?: "lg" | "md" | "sm" | "xs";
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const PrimaryButton: FC<Props> = (props) => {
  const {
    children,
    onClick,
    h,
//  size = "md",
    isDisabled = false,
    isLoading = false
  } = props;

  return (
    <Button
      h={h}
      bg="teal.400"
      color="white"
//    size={size}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
