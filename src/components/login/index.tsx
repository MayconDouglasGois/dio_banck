import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";

const cores = {
  white500: "rgb(255, 255, 255)",
  pink500: "rgb(228, 16, 93)",
};

const Login = () => {
  return (
    <Flex color={cores.white500} direction="column" mb={4} alignItems="center">
      <FormControl mb={4}>
        <FormLabel>Login</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Senha</FormLabel>
        <Input type="password" />
      </FormControl>
      <ButtonGroup spacing="6">
        <Button size="lg" colorScheme="pink" backgroundColor={cores.pink500}>
          Entrar
        </Button>
        <Button size="lg" colorScheme="pink" variant="outline">
          Criar Conta
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export { Login };
