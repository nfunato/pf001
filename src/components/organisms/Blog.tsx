import React from "react";
import { VStack, Center, Heading, Image } from "@chakra-ui/react";
import { hfs, pbImage } from "../pages/Top";

type Props = {
  tag: string;
};

export function Blog(props: Props) {
  const { tag } = props;
  return (
    <Center className={tag}>
      <VStack>
        <Heading mt={2} fontSize={hfs}>
          ブログ
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
