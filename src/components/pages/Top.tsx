import React from "react";
import { Image, Box, Flex, HStack, VStack, Divider } from "@chakra-ui/react";
import { TextButton } from "../atoms/TextButton";
import { Proposal } from "../organisms/Proposal";
import { Service } from "../organisms/Service";
import { Blog } from "../organisms/Blog";
import { Company } from "../organisms/Company";
import { Access } from "../organisms/Access";
import { Recruit } from "../organisms/Recruit";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";
import { scroller } from "react-scroll";

// temorary definition
export const pbImage = "7px";
// const fontSz = 16; // 16px (no unit means px)

// Perhaps they should be merged into src/theme/theme.ts later
const bh = "26px"; // button height
const stickyBarHeight = "30px";
const stickyBarOffset = -33; // no unit, but in px ( stickyBarHeight + borderWidth_of_Line)

const Line = () => <Divider borderColor="blackAlpha.300" borderWidth="3px" />;

type moveTarget =
  | "Proposal"
  | "Service"
  | "Blog"
  | "Company"
  | "Access"
  | "Recruit"
  | "Contact";

const moveTo = (cssCls: moveTarget) => () =>
  scroller.scrollTo(cssCls, {
    duration: 800,
    delay: 10,
    smooth: "easeInOutQuart",
    offset: stickyBarOffset
  });

export function Top() {
  return (
    <VStack>
      <Box
        as="header"
        position="fixed"
        w="100%"
        bgColor="white"
        zIndex="sticky" // It hides a scrolling divider under the header area
      >
        <HStack>
          <Image h={stickyBarHeight} src="/images/abccorp.png" />
          <Flex pr="10px" w="90%" justify="flex-end" h="100%" align="center">
            <HStack spacing={1}>
              <TextButton t="ご提案" onClick={moveTo("Proposal")} h={bh} />
              <TextButton t="サービス" onClick={moveTo("Service")} h={bh} />
              <TextButton t="ブログ" onClick={moveTo("Blog")} h={bh} />
              <TextButton t="会社概要" onClick={moveTo("Company")} h={bh} />
              <TextButton t="アクセス" onClick={moveTo("Access")} h={bh} />
              <TextButton t="採用情報" onClick={moveTo("Recruit")} h={bh} />
              <TextButton t="お問い合わせ" onClick={moveTo("Contact")} h={bh} />
            </HStack>
          </Flex>
        </HStack>
      </Box>
      <Box as="main" mt={stickyBarHeight} w="100%">
        <Line />
        <Proposal tag="Proposal" />
        <Line />
        <Service tag="Service" />
        <Line />
        <Blog tag="Blog" />
        <Line />
        <Company tag="Company" />
        <Line />
        <Access tag="Access" />
        <Line />
        <Recruit tag="Recruit" />
        <Line />
        <Contact tag="Contact" />
        <Line />
        <Footer />
      </Box>
    </VStack>
  );
}
