import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Flex
} from "@chakra-ui/react";
import Swal from "sweetalert2"
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../hooks/useContextProvider";
import { login } from "../services/login/login";
import { changeLocalStorage } from "../services/storage/storage";


export const Login = (): JSX.Element  => {


  const [email, setEmail] = React.useState<string>();
  const [senha, setSenha] = React.useState<string>();


  function collectFormEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function collectFormSenha(e: React.ChangeEvent<HTMLInputElement>) {
    setSenha(e.target.value);
  }




  const navigate = useNavigate()

  const {setLoggedIn} = useContext(Context)

async function userValidate(){
    
const loggedIn = await login({email, senha})


if(!loggedIn){
  
Swal.fire(
  'Login ou senha invalido!',
  'Verifique os dados de acesso e tente novamente',
  'error'
)
}else{
  changeLocalStorage({login : true})
  setLoggedIn(true)
  navigate("/home/1")
}
}



  return (
    <Flex justifyContent="center" alignItems="center" wrap="wrap">
      <Flex color="rgb(255, 255, 255)" borderLeft="2px solid rgb(228, 16, 93)" padding="25px" pl="30px" direction="column" mb={4} alignItems="center">
        <FormControl mb={4}>
          <FormLabel>Login</FormLabel>
          <Input
            id="email"
            value={email}
            type="text"
            onChange={(e) => {
              collectFormEmail(e);
            }}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Senha</FormLabel>
          <Input
            id="senha"
            value={senha}
            type="password"
            onChange={(e) => {
              collectFormSenha(e);
            }}
          />
        </FormControl>
        <ButtonGroup spacing="6">
          <Button
            size="lg"
            colorScheme="red"
            backgroundColor="rgb(228, 16, 93)"
            onClick={() => {
              userValidate()
            }}
          >
            Entrar
          </Button>
          <Button
            size="lg"
            colorScheme="red"
            variant="outline"
            color="rgb(228, 16, 93)"
          >
            Criar Conta
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};


