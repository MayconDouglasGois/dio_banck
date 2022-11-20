import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./hooks/useContextProvider";
import { Home } from "./pages/Home";





const AppRoutes = (): JSX.Element =>{

  const {isLoggedIn} =  useContext(Context)


  return (
    <Routes>
    <Route path="/" element={!isLoggedIn && <Login />} />
    <Route path="/home/:id" element={isLoggedIn && <Home />} />
  </Routes>
  )
}

export default AppRoutes