import React from "react";
import { Center, Text } from "@chakra-ui/react";
import { VStack, Image } from "@chakra-ui/react";

type Props = {
  tag: string;
};

export function Company(props: Props) {
  const { tag } = props;
  return (
    <Center className={tag}>
      <VStack>
        <Text>会社概要</Text>
        <Image
          boxSize="160px"
          src="https://source.unsplash.com/random"
          alt="random image"
          m="auto"
        />
      </VStack>
    </Center>
  );
}
