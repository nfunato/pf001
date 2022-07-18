import React from "react";
import {
  Heading,
  Center,
  Box,
  //Flex,
  VStack,
  Spacer,
  List,
  ListIcon,
  ListItem
} from "@chakra-ui/react";
import {
  FaAddressCard,
  FaPhone,
  FaFax,
  FaSubway,
  FaTrain
} from "react-icons/fa";
import { hfs } from "../pages/Top";

// eslint-disable-next-line
// import { AspectRatioBox } from "@chakra-ui/core";

type Props = {
  tag: string;
};

export function Access(props: Props) {
  const { tag } = props;
  // zIndex={5000}
  // AspectRatioBox doesn't work!
  // (probably documentation, https://v0.chakra-ui.com/aspectratiobox, seems to be old)
  return (
    <Box className={tag} w="full">
      <Center w="full">
        <VStack w="full">
          <Heading m={2} fontSize={hfs}>
            アクセス
          </Heading>
          <Box
            w="70%"
            h="200"
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1393597776296!2d135.49754235057506!3d34.701664790578675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6932e4125ad%3A0xeefc89f1513b3179!2s2-ch%C5%8Dme-16-14%20Sonezaki%2C%20Kita%20Ward%2C%20Osaka%2C%20530-0057!5e0!3m2!1sen!2sjp!4v1657643969791!5m2!1sen!2sjp"
            loading="lazy"
            allow="fullscreen"
          />
        </VStack>
      </Center>
      <VStack>
        <Box w="70%">
          <List>
            <ListItem>
              <ListIcon as={FaAddressCard} />
              〒532-0011　大阪府大阪市北区曽根崎2-16-14
            </ListItem>
            <ListItem>
              <ListIcon as={FaPhone} />
              TEL: 06-0123-4567
            </ListItem>
            <ListItem>
              <ListIcon as={FaFax} />
              FAX: 06-9876-5432
            </ListItem>
            <ListItem>
              <ListIcon as={FaSubway} />
              大阪メトロ御堂筋線　梅田駅12番出口から徒歩3分
            </ListItem>
            <ListItem>
              <ListIcon as={FaTrain} />
              阪神電鉄梅田駅　阪神航空口から徒歩3分
            </ListItem>
            <ListItem>
              <ListIcon as={FaTrain} />
              JR大阪駅　御堂筋口から徒歩5分
            </ListItem>
          </List>
        </Box>
        <Spacer />
      </VStack>
    </Box>
  );
}

/*
        <Box>
          <Text textAlign="left">
            〒532-0011　大阪府大阪市北区曽根崎2-16-14
          </Text>
          <Text textAlign="left">TEL: 06-6315-1234</Text>
          <Text textAlign="left">FAX: 06-6361-7841</Text>
          <Text textAlign="left">
            大阪メトロ御堂筋線　梅田駅12番出口から徒歩3分
          </Text>
          <Text textAlign="left">阪神電鉄梅田駅　阪神航空口から徒歩3分</Text>
          <Text textAlign="left">JR大阪駅　御堂筋口から徒歩5分</Text>
          <br />
        </Box>
*/
