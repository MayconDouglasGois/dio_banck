import { ChakraProvider,Flex, Image} from "@chakra-ui/react";
import { Login } from "./components/login";

function App() {
  return (
    <ChakraProvider>
        <Flex 
        minHeight="100vh" 
        justifyContent="center" 
        backgroundColor="rgb(30, 25, 44)" 
        flexDirection="column"
        alignItems="center"
        >
            <Flex justifyContent="center" wrap="wrap" >
              <Image
                pr="30px"
                borderRight="2px solid rgb(228, 16, 93)"
                mr="40px"
                boxSize="300px"
                src="logo.svg"
              />
              <Login />
            </Flex>
        </Flex>
    </ChakraProvider>
  );
}

export default App;
