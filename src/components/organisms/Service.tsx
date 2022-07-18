import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { VStack, Image, Tooltip } from "@chakra-ui/react";
import { hfs, pbImage } from "../pages/Top";

type Props = {
  tag: string;
};

export function Service(props: Props) {
  const { tag } = props;
  return (
    <Center className={tag}>
      <VStack>
        <Heading mt={2} fontSize={hfs}>
          サービス
        </Heading>
        <Tooltip label="Placeholder Image" bg="red.600">
          <span title="Placeholder Image">
            <Image
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="random image"
              m="auto"
              pb={pbImage}
            />
          </span>
        </Tooltip>
      </VStack>
    </Center>
  );
}
