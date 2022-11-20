import { useContext } from "react";
import { Flex,Spacer, Image, Box, Button } from "@chakra-ui/react";
import { Context } from "../hooks/useContextProvider";
import { changeLocalStorage } from "../services/storage/storage";
import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const { isLoggedIn, setLoggedIn } = useContext(Context);
  const navigate = useNavigate();
  function logout() {
    changeLocalStorage({ login: false });
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <Flex align="center" pl="20px" pr="20px" backgroundColor="white">
        <Image src="/logo.svg" boxSize="80px" alt="logo dio" />
        <Spacer/>
        {isLoggedIn && (  
          <Box>
             <Button mr="12px" colorScheme="teal" variant="ghost" onClick={()=>{
               navigate("/home/1")
              }}>
              Home
            </Button>
            <Button
              colorScheme="red"
              backgroundColor="rgb(228, 16, 93)"
              onClick={() => {
                logout();
              }}
              >
              Sair
            </Button>
          </Box>
        )}
    </Flex>
  );
};

export default Header;
