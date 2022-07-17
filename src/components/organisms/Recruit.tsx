import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { VStack, Image } from "@chakra-ui/react";
import { pbImage } from "../pages/Top";

type Props = {
  tag: string;
};

export function Recruit(props: Props) {
  const { tag } = props;
  return (
    <Center className={tag}>
      <VStack>
        <Heading mt={2} fontSize="md">
          採用情報
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
