import { Box, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import Header from "./Header";

interface IChildren {
  children: ReactElement;
}

const Layout = ({ children }: IChildren): JSX.Element  => {
  return (
    <Box minHeight="100vh" backgroundColor="rgb(30, 25, 44)">
    <Header />
      <Flex
      minHeight="calc(100vh - 80px)"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
