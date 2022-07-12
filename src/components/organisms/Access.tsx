import React from "react";
import { Center, Text, Box, VStack } from "@chakra-ui/react";

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
    <Center>
      <VStack className={tag} w="60%">
        <Text textAlign="center">アクセス</Text>
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1393597776296!2d135.49754235057506!3d34.701664790578675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6932e4125ad%3A0xeefc89f1513b3179!2s2-ch%C5%8Dme-16-14%20Sonezaki%2C%20Kita%20Ward%2C%20Osaka%2C%20530-0057!5e0!3m2!1sen!2sjp!4v1657643969791!5m2!1sen!2sjp"
          width="100%"
          height="200"
          loading="lazy"
          allow="fullscreen"
        />
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
      </VStack>
    </Center>
  );
}
