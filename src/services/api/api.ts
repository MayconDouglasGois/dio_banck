export interface IdataDTO{
    user:string,
    name: string,
    email: string,
    senha: string,
    saldo: number,
    id: string
}

const data: IdataDTO = {
user: "maycon",
name:"Maycon Douglas de Gois Alves",
email:"teste@gmail.com",
senha:"sada",
saldo: 2000,
id: "1"
}
const api = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    },3000)
})
export {api}