import React from "react";
import {
  Heading,
  Box,
  Flex,
  // Container,
  Text,
  HStack,
  VStack,
  Divider
} from "@chakra-ui/react";
import { PrimaryButton } from "../../components/atoms/PrimaryButton";
import { Proposal } from "../organisms/Proposal";
import { Service } from "../organisms/Service";
import { Blog } from "../organisms/Blog";
import { Company } from "../organisms/Company";
import { Access } from "../organisms/Access";
import { Recruitment } from "../organisms/Recruitment";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";
import { scroller } from "react-scroll";

type ScrollTarget =
  | "TProposal"
  | "TService"
  | "TBlog"
  | "TCompany"
  | "TAccess"
  | "TRecruitment"
  | "TContact";

// They should be moved to Theme?
export const ptProposal = "30px";
export const pbImage = "7px";
const stickyBarHeight = "25px";
const fontSz = 16; // 16px (no unit means px)
const buttonH = "26px"; // no unit means x theme, which means x/4 rem by default (== 6x/4 px)
const stickyBarOffset = -42;
const divColor = "blackAlpha.200";

const scrollToBox = (cssCls: ScrollTarget) => () =>
  scroller.scrollTo(cssCls, {
    duration: 800,
    delay: 10,
    smooth: "easeInOutQuart",
    offset: stickyBarOffset
  });

export function Top() {
  return (
    <VStack>
      <Heading
        position="fixed"
        h={stickyBarHeight + 2}
        w="100%"
        bgColor="white"
      >
        <HStack>
          <Text pt="10px" pl="10px" fontSize={fontSz + 2} w="90%">
            ABC株式会社
          </Text>
          <Flex pt="10px" pr="10px" justifyContent={"flex-end"} w="90%">
            <HStack spacing={1}>
              <PrimaryButton onClick={scrollToBox("TProposal")} h={buttonH}>
                <Text fontSize={fontSz}>ご提案</Text>
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TService")} h={buttonH}>
                <Text fontSize={fontSz}>サービス</Text>
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TBlog")} h={buttonH}>
                <Text fontSize={fontSz}>ブログ</Text>
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TCompany")} h={buttonH}>
                <Text fontSize={fontSz}>会社概要</Text>
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TAccess")} h={buttonH}>
                <Text fontSize={fontSz}>アクセス</Text>
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TRecruitment")} h={buttonH}>
                <Text fontSize={fontSz}>採用情報</Text>
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TContact")} h={buttonH}>
                <Text fontSize={fontSz}>お問い合わせ</Text>
              </PrimaryButton>
            </HStack>
          </Flex>
        </HStack>
      </Heading>
      <Box as="main" mt={stickyBarHeight} w="100%">
        <Divider borderColor="transparent" borderWidth="3px" />
        <Proposal tag="TProposal" />
        <Divider borderColor={divColor} borderWidth="3px" />
        <Service tag="TService" />
        <Divider borderColor={divColor} borderWidth="3px" />
        <Blog tag="TBlog" />
        <Divider borderColor={divColor} borderWidth="3px" />
        <Company tag="TCompany" />
        <Divider borderColor={divColor} borderWidth="3px" />
        <Access tag="TAccess" />
        <Divider borderColor={divColor} borderWidth="3px" />
        <Recruitment tag="TRecruitment" />
        <Divider borderColor={divColor} borderWidth="3px" />
        <Contact tag="TContact" />
        <Divider borderColor="transparent" borderWidth="3px" />
        <Footer />
      </Box>
    </VStack>
  );
}
