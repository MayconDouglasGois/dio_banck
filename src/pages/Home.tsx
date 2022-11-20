import { SimpleGrid, Image, Center, Heading, Text, Flex} from "@chakra-ui/react";
import React from "react";
import { api } from "../services/api/api";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../hooks/useContextProvider";
import { Card, CardBody, CardHeader } from "@chakra-ui/card";

interface UserData {
  name: string;
  email: string;
  senha: string;
  saldo: number;
  id: string;
}

export const Home = (): JSX.Element => {
  const [userData, setUserData] = React.useState<null | UserData>();

  const { isLoggedIn } = React.useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate("/");

  React.useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  if (userData && userData.id !== id) {
    navigate("/");
  }

  const date = new Date();
  let dataFormatada =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return (
    <Flex justifyContent="center" wrap="wrap">
      <Image src="/imageBank.png" />
      <Center>
        <Card align="center">
          <CardHeader mb="16px">
            <Heading size="xl" color="white" textAlign="center">
              <Text color="rgb(228, 16, 93)"> Bem vindo!</Text>
              <Text>
              {userData?.name !== undefined && userData?.name !== null ? userData?.name : "Carregando..."}
              </Text>
              </Heading>
          </CardHeader>
          <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
          <CardBody backgroundColor="white" p="15px" borderRadius="15px" mt="6px">
          <Text fontWeight="bold" color="rgb(228, 16, 93)" mb="6px">
              Saldo
              </Text>
            <Text fontWeight="bold" >
            {dataFormatada}
            </Text>
          </CardBody>
          <CardBody backgroundColor="white" p="15px" borderRadius="15px" mt="6px">
            <Text fontWeight="bold" color="rgb(228, 16, 93)" mb="6px">
              Saldo
              </Text>
            <Text fontWeight="bold" >
            {userData?.name !== undefined && userData?.name !== null ? userData?.saldo.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            }): "Carregando..."}
            </Text>
          </CardBody>
          </SimpleGrid>
        </Card>
      </Center>
    </Flex>
  );
};
