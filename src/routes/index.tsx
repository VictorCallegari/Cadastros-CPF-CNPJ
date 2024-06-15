import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CadastroCNPJ } from "../pages/CadastroCNPJ";
import { CadastroCPF } from "../pages/CadastroCPF";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Cadastro-CNPJ" element={<CadastroCNPJ />} />
        <Route path="/Cadastro-CPF" element={<CadastroCPF />} />
      </Routes>
    </BrowserRouter>
  );
};