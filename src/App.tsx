import React, { createContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Top } from "./components/pages/Top";
import { theme } from "./theme/theme";
// import { Inquiry } from "./components/organisms/Inquiry";

const initialMyContext = {
  nfPlaceHolder: null
};

export const MyContext = createContext(initialMyContext);

export const App = () => (
  <ChakraProvider theme={theme}>
    <MyContext.Provider value={initialMyContext}>
      <Top />
      {/* <Inquiry /> */}
    </MyContext.Provider>
  </ChakraProvider>
);
