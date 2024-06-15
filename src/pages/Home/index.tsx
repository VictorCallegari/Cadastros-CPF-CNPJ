import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Button } from "../../components/Button/Button";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="mt-15">
          <p className="md:text text-3xl font-bold">
            Escolha a forma de cadastro:
          </p>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4 flex-row">
          <Button title="CPF" to="/Cadastro-CPF" />
          <Button title="CNPJ" to="/Cadastro-CNPJ" />
        </div>
      </Container>
    </>
  );
} 
