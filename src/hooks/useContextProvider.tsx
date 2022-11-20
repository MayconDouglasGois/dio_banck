import React, { useState, useEffect } from "react";
import { getLocalStorage } from './../services/storage/storage';

interface IContext {
  user: string;
  isLoggedIn: Boolean,
  setLoggedIn:(value: boolean) => void
}
const Context = React.createContext<IContext>({} as IContext);

const UseContextProvider = ({ children }: { children: React.ReactElement }) => { 

  const user = "Maycon Douglas de Gois Alves"
   
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

  useEffect(()=>{
    const storage = getLocalStorage()

    if(storage){
      const objectStorage = JSON.parse(storage)
      setLoggedIn(objectStorage.login)
    }
    
  },[])


  return <Context.Provider value={{user,isLoggedIn,setLoggedIn}}>{children}</Context.Provider>;
};

export  {UseContextProvider, Context};
