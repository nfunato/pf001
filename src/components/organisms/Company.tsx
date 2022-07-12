import React from "react";
import { Center, Text } from "@chakra-ui/react";
import {
  VStack
  //  Image
} from "@chakra-ui/react";
import {
  Table,
  // Thead,
  // Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer
} from "@chakra-ui/react";
import { fontSz } from "../pages/Top";

// import { pbImage } from "../pages/Top";

type Props = {
  tag: string;
};

export function Company(props: Props) {
  const { tag } = props;
  return (
    <Center className={tag}>
      <VStack>
        <Text>会社概要</Text>
        <TableContainer>
          <Table variant="unstyled">
            <Tr>
              <Th fontSize={fontSz}>社名</Th>
              <Td fontSize={fontSz}>ABC株式会社</Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>所在地</Th>
              <Td fontSize={fontSz}>
                〒530-0057 大阪市北区曽根崎2丁目16番14号
              </Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>設立</Th>
              <Td fontSize={fontSz}>1973年5月1日</Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>資本金</Th>
              <Td fontSize={fontSz}>1,000万円</Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>役員</Th>
              <Td fontSize={fontSz}>阿部信</Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>構成員数</Th>
              <Td fontSize={fontSz}>1,970名</Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>取引銀行</Th>
              <Td fontSize={fontSz}>日本銀行</Td>
            </Tr>
            <Tr>
              <Th fontSize={fontSz}>主要取引先</Th>
              <Td fontSize={fontSz}>
                AAA株式会社／株式会社BBB／株式会社CCC／DDD株式会社
                <br />
                順不同
              </Td>
            </Tr>
          </Table>
        </TableContainer>
      </VStack>
    </Center>
  );
}
