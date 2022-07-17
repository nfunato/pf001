import React from "react";
import { Center, Heading, VStack } from "@chakra-ui/react";

// eslint-disable-next-line
import { Box, Image } from "@chakra-ui/react";

type Props = {
  tag: string;
};

// const bgImgSrc = "../../../public/images/grant-ritchie-FBkrQhnLQoY-unsplash.jpg";
// const bgImgSrc = "./grant-ritchie-FBkrQhnLQoY-unsplash.jpg";

export function Contact(props: Props) {
  const { tag } = props;
  return (
    <Box
      className={tag}
      w="100%"
      h="200px"
      pos="relative"
      _before={{
        content: '""',
        bgImage:
          "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg)",
        bgSize: "cover",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.6
      }}
    >
      <VStack>
        <Heading m={2} fontSize="md">
          コンタクト
        </Heading>
      </VStack>
    </Box>
  );
}
