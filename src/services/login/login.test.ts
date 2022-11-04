import {login} from './login'

describe("login",()=>{
    it("deve retornar: LOGIN OK",()=>{
        const value = login()
        expect(value).toBe("LOGIN OK")
    })
})