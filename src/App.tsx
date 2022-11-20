import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import {UseContextProvider} from "./hooks/useContextProvider";
import AppRoutes from "./Routes";

function App(): JSX.Element {
  React.useEffect(() => {});

  return (
    <BrowserRouter>
      <UseContextProvider>
        <ChakraProvider>
          <Layout>
              <AppRoutes/>
          </Layout>
        </ChakraProvider>
      </UseContextProvider>
    </BrowserRouter>
  );
}

export default App;
