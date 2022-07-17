import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { VStack, Image } from "@chakra-ui/react";
import { pbImage } from "../pages/Top";

type Props = {
  tag: string;
};

export function Service(props: Props) {
  const { tag } = props;
  return (
    <Center className={tag}>
      <VStack>
        <Heading mt={2} fontSize="md">
          サービス
        </Heading>
        <Image
          boxSize="160px"
          src="https://source.unsplash.com/random"
          alt="random image"
          m="auto"
          pb={pbImage}
        />
      </VStack>
    </Center>
  );
}
