import React from "react";
import { Heading, Center } from "@chakra-ui/react";
import { VStack, Image, Tooltip } from "@chakra-ui/react";
import { hfs, pbImage } from "../pages/Top";

type Props = {
  // mt: string;
  tag: string;
};

export function Proposal(props: Props) {
  const { tag } = props;
  // src="https://source.unsplash.com/random"
  return (
    <Center className={tag}>
      <VStack mt="17px">
        <Heading mt={2} fontSize={hfs}>
          ご提案
        </Heading>
        <Tooltip label="Placeholder Image" bg="red.600">
          <span title="Placeholder Image">
            <Image
              boxSize="160px"
              src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"
              alt="specific image"
              m="auto"
              pb={pbImage}
            />
          </span>
        </Tooltip>
      </VStack>
    </Center>
  );
}

// borderRadius="full"
// alt = {userName} -- obj.userName
