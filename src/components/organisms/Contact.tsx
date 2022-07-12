import React from "react";
import { Center, Text, VStack } from "@chakra-ui/react";

// eslint-disable-next-line
import { Box, Image } from "@chakra-ui/react";
import { pbImage } from "../pages/Top";

type Props = {
  tag: string;
};

// const bgImgSrc = "../../../public/images/grant-ritchie-FBkrQhnLQoY-unsplash.jpg";
const bgImgSrc = "./grant-ritchie-FBkrQhnLQoY-unsplash.jpg";

export function Contact(props: Props) {
  const { tag } = props;
  // src="https://source.unsplash.com/random"
  //             bgGradient="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"
  //             bgGradient={"https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"}
  //   pb={pbImage}
  //  bgGradient={[
  //    "linear(to-tr, teal.300, yellow.400)",
  //    "linear(to-t, blue.200, teal.500)",
  //    "linear(to-b, orange.100, purple.300)"
  //  ]}
  //         bgImage="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"

  // h="400px"
  // bg="rgba(255,0,0,0.1)"
  // bgImage: "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg)",
  // bgImage: "url('./grant-ritchie-FBkrQhnLQoY-unsplash.jpg')",
  // bgImage: "url('https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80')",

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
        <Text>コンタクト</Text>
      </VStack>
    </Box>
  );
}

//
// m="auto"
// bgImage={`url(${bgImgSrc})`}

/*
        w="70%"
        bgImage={bgImg.src}
        bgPosition="right"
        bgSize="220px"
        bgRepeat="no-repeat"
        mr="4"
*/
