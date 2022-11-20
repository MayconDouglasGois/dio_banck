import { api } from "./api";

describe("login", () => {
  it("deve retornar os dados do usuario", async () => {
    const value = await api;
    expect(value).toStrictEqual({
      user: "maycon",
      name: "Maycon Douglas de Gois Alves",
      email: "teste@gmail.com",
      senha: "sada",
      saldo: 2000,
      id: "1",
    });
  });
});
