import React from "react";
import { Box, Text, HStack, VStack, Divider } from "@chakra-ui/react";
import { PrimaryButton } from "../../components/atoms/PrimaryButton";
import { Proposal } from "../organisms/Proposal";
import { Service } from "../organisms/Service";
import { Blog } from "../organisms/Blog";
import { Company } from "../organisms/Company";
import { Access } from "../organisms/Access";
import { Recruitment } from "../organisms/Recruitment";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";
// import { Link as Scroll } from "react-scroll";
import { scroller } from "react-scroll";

// const headerBackground = "https://unsplash.com/photos/FBkrQhnLQoY";
/* const headerBackgroundImg =
("https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80");
*/
/*
  const refContents = useRef<HTMLDivElement>();

  const scrollToContents = useCallback(() => {
    refContents.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [refContents]);
*/

// cf. https://fwywd.com/tech/install-react-scroll
//     https://zenn.dev/dove/articles/be3fff0e84729d

// const ignoreClick = () => {};

type ScrollTarget =
  | "TProposal"
  | "TService"
  | "TBlog"
  | "TCompany"
  | "TAccess"
  | "TRecruitment"
  | "TContact";

const scrollToBox = (cssCls: ScrollTarget) => () =>
  scroller.scrollTo(cssCls, {
    duration: 800,
    delay: 10,
    smooth: "easeInOutQuart"
  });

export function Top() {
  return (
    <VStack>
      <Box>
        <HStack>
          <Text>ABC株式会社</Text>
          <Box>
            <HStack spacing={1}>
              <PrimaryButton onClick={scrollToBox("TProposal")}>
                ご提案
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TService")}>
                サービス
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TBlog")}>
                ブログ
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TCompany")}>
                会社概要
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TAccess")}>
                アクセス
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TRecruitment")}>
                採用情報
              </PrimaryButton>
              <PrimaryButton onClick={scrollToBox("TContact")}>
                お問い合わせ
              </PrimaryButton>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Divider borderColor="transparent" borderWidth="3px" />
      <Proposal tag="TProposal" />
      <Divider borderColor="blackAlpha.400" borderWidth="3px" />
      <Service tag="TService" />
      <Divider borderColor="blackAlpha.400" borderWidth="3px" />
      <Blog tag="TBlog" />
      <Divider borderColor="blackAlpha.400" borderWidth="3px" />
      <Company tag="TCompany" />
      <Divider borderColor="blackAlpha.400" borderWidth="3px" />
      <Access tag="TAccess" />
      <Divider borderColor="blackAlpha.400" borderWidth="3px" />
      <Recruitment tag="TRecruitment" />
      <Divider borderColor="blackAlpha.400" borderWidth="3px" />
      <Contact tag="TContact" />
      <Divider borderColor="transparent" borderWidth="3px" />
      <Footer />
    </VStack>
  );
}
