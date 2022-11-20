import { api } from "../api/api";

interface IAcessData {
  email: string | undefined;
  senha: string | undefined;
}

async function login(acessData: IAcessData): Promise<boolean> {
  const data: any = await api;
  const emailValidate = data.email === acessData.email ? true : false;
  const senhaValidate = data.senha === acessData.senha ? true : false;
  return senhaValidate && emailValidate;
}
export { login };
