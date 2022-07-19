import React, { FC } from "react";
import {
  Box,
  //Flex,
  VStack,
  Heading,
  Text,
  //Spacer,
  //Image,
  Button
  //Input,
  //Drawer,
  //DrawerBody,
  //DrawerFooter,
  //DrawerHeader,
  //DrawerOverlay,
  //DrawerContent,
  //DrawerCloseButton
  //useDisclosure
} from "@chakra-ui/react";
//import { Inquiry } from "../pages/Inquiry";
//import { TextButton } from "../atoms/TextButton";
import { hfs } from "../pages/Top";
import { Link as RouteLink } from "react-router-dom";

type Props = {
  tag: string;
  //onClick: () => void;

  //isOpen: boolean;
  //onOpen: () => void;
  //onClose: () => void;
};

// const bgImgSrc = "../../../public/images/grant-ritchie-FBkrQhnLQoY-unsplash.jpg";
// const bgImgSrc = "./grant-ritchie-FBkrQhnLQoY-unsplash.jpg";

export const Contact: FC<Props> = (props: Props) => {
  //const { tag, isOpen, onOpen, onClose } = props;
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
        {/* <VStack h="110px" justify="center"> */}
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
          {/*
          <Drawer
            isOpen={isOpen}
            size="full"
            placement="bottom"
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>
              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
         */}
        </VStack>
      </VStack>
    </Box>
  );
};
