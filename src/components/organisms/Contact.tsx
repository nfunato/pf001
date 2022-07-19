import React, { FC } from "react";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { hfs } from "../pages/Top";
import { Link as RouteLink } from "react-router-dom";

type Props = {
  tag: string;
};

export const Contact: FC<Props> = (props: Props) => {
  const { tag } = props;

  type NavTextProps = { children: React.ReactNode };
  const NavText: FC<NavTextProps> = (props) => {
    const { children } = props;
    return (
      <RouteLink to="/inquiry">
        <Text fontSize="lg" fontWeight="semibold">
          {children}
        </Text>
      </RouteLink>
    );
  };

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
        opacity: 0.4
      }}
    >
      <VStack>
        <Heading m={2} fontSize={hfs}>
          コンタクト
        </Heading>
        <VStack h="110px" justify="center">
          <Text fontWeight="semibold">お気軽にお問合せください</Text>
          {/*
          <TextButton
            t="お問合せフォーム"
            h="30px"
            fontSize="lg"
            fontWeight="semibold"
            bgColor="blue.600"
            onClick={onOpen}
          />
        */}
          <Button
            h="30px"
            color="black"
            variant="outline"
            bgColor="blue.600"
            isDisabled={false}
            isLoading={false}
            _hover={{ bg: "blue.200", opacity: 0.8 }}
            onClick={() => {}}
            fontSize="md"
            fontWeight="medium"
          >
            <NavText>お問合せフォーム</NavText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};
