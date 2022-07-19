import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { theme } from "./theme/theme";
import { Top } from "./components/pages/Top";
import { Inquiry } from "./components/pages/Inquiry";

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <Inquiry /> */}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/inquiry" exact component={Inquiry} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
