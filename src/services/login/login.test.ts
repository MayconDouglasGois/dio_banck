import {login} from "./login"

const mockAccessToken = {
    email:"teste@gmail.com",
    senha:"sada",
}

describe("login",()=>{
    it("Deve retornar true para os dados de e-mail e senha correto",async ()=>{
        const reponse = await login(mockAccessToken)
        expect(reponse).toBeTruthy()
    })

    it("Deve retornar false para os dados de e-mail e senha errado",async ()=>{
        const reponse = await login({
            email:"invalid@gmail.com",
            senha:"invalidPassword",
        })
        expect(reponse).toBeFalsy()
    })

})
