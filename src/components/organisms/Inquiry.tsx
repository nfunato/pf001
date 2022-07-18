import React, { FC, useEffect } from "react";
import {
  Input,
  Button,
  Box,
  Stack,
  Heading,
  Textarea,
  HStack,
  Spacer,
  Center,
  Select,
  Text
} from "@chakra-ui/react";
import {
  useToast,
  FormErrorMessage,
  FormLabel,
  FormControl
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const bcInquiry = "gray.300";

/*
// FIXME: 関数Inquiry は、以下のような共通関数を使って短くできそうだが、今後の課題とする
type Props = { ph: string };
const InquiryInput: FC<Props> = ({ ph }: Props) => (
  <Input
    rounded="none"
    variant="filled"
    border="1px"
    borderColor={bcInquiry}
    placeholder={ph}
  />
);
*/

type FormInput = {
  company: string;
  division: string;
  firstName: string;
  familyName: string;
  phone: string;
  email: string;
  kind: string;
  contents: string;
};

export function Inquiry() {
  const Mandatory: FC = () => (
    <Text as="span" color="red">
      *
    </Text>
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormInput>({
    mode: "onSubmit"
  });
  const toast = useToast();
  const onSubmitForm = (data: FormInput) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        toast({
          title: "送信完了",
          description: "担当者からの返信をお待ちください",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true
        });
        resolve(false);
      }, 2000);
    });
  };

  // do 'reset' after xmit complete (success)
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // <Flex justify="center" textAlign="center">
  // <Box w="xl" p={6} borderRadius="10px" boxShadow="md" bg="white">
  // form: style={{ paddingTop: "13%", backgroundColor: "#EEEEF0", height: "100vh" }}
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Box
        w={["full", "md"]}
        p={[8, 10]}
        mt={[20, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "red"]}
      >
        <Center>
          <Heading fontSize={30}>お問い合わせフォーム</Heading>
        </Center>
        <Stack spacing={4} align="flex-start" w="full">
          <Spacer />
          <FormControl id="company" isInvalid={!!errors.company}>
            <FormLabel>
              会社名 <Mandatory />
            </FormLabel>
            <Input
              rounded="none"
              variant="filled"
              border="1px"
              borderColor={bcInquiry}
              placeholder="会社名"
              {...register("company", { required: true })}
            />
            <FormErrorMessage>
              {errors.company && "会社名を入力してください"}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="division" isInvalid={!!errors.division}>
            <FormLabel>部署名</FormLabel>
            <Input
              rounded="none"
              variant="filled"
              border="1px"
              borderColor={bcInquiry}
              placeholder="部署名"
              {...register("division", { required: false })}
            />
          </FormControl>

          <FormControl>
            <Text>
              氏名 <Mandatory />
            </Text>
            <HStack>
              <FormControl id="familyName" isInvalid={!!errors.familyName}>
                <Input
                  rounded="none"
                  variant="filled"
                  border="1px"
                  borderColor={bcInquiry}
                  placeholder={"姓"}
                  {...register("familyName", { required: true })}
                />
                <FormErrorMessage>
                  {errors.familyName && "苗字を入力してください"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="firstName" isInvalid={!!errors.firstName}>
                <Input
                  rounded="none"
                  variant="filled"
                  border="1px"
                  borderColor={bcInquiry}
                  placeholder={"名"}
                  {...register("firstName", { required: true })}
                />
                <FormErrorMessage>
                  {errors.firstName && "名前を入力してください"}
                </FormErrorMessage>
              </FormControl>
            </HStack>
          </FormControl>

          <HStack>
            <FormControl id="phone" isInvalid={!!errors.phone}>
              <FormLabel>
                電話番号 <Mandatory />
              </FormLabel>
              <Input
                rounded="none"
                variant="filled"
                border="1px"
                borderColor={bcInquiry}
                placeholder={"電話番号"}
                // type="tel"
                {...register("phone", {
                  required: "電話番号を入力してください",
                  pattern: {
                    value: /^0[-0-9]{9,12}$/,
                    message: "電話番号の形式が正しくありません"
                  }
                })}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>
                メールアドレス <Mandatory />
              </FormLabel>
              <Input
                rounded="none"
                variant="filled"
                border="1px"
                borderColor={bcInquiry}
                placeholder={"abc@example.com"}
                // type="email"
                {...register("email", {
                  required: "メールアドレスを入力してください",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "メールアドレスが正しくありません"
                  }
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <Spacer />
          <FormControl id="kind" isInvalid={!!errors.kind}>
            <FormLabel>
              件名 <Mandatory />
            </FormLabel>
            <Select
              w="50%"
              border="1px"
              borderColor={bcInquiry}
              placeholder="選択してください"
              {...register("kind", { required: true })}
            >
              <option>ホームページ制作</option>
              <option>システム構築</option>
              <option>サービスについて</option>
              <option>その他</option>
            </Select>
            <FormErrorMessage>
              {errors.kind && "件名を選択してください"}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>
              内容 <Mandatory />
            </FormLabel>
            <Textarea
              border="1px"
              borderColor={bcInquiry}
              placeholder="お問い合わせ内容を入力してください"
              {...register("contents", { required: true })}
            />
            {/*
              <Input
                placeholder="例） こんにちは"
                {...register("contents", { required: true })}
              />
              */}
            <FormErrorMessage>
              {errors.contents && "お問い合わせ内容を入力してください"}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Center>
          <Button
            mt={8}
            w="xs"
            colorScheme="teal"
            loadingText="送信中"
            isLoading={isSubmitting}
            type="submit"
          >
            送信
          </Button>
        </Center>
      </Box>
    </form>
  );
}
