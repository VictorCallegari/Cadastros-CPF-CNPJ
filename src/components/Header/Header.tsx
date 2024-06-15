import { Container } from "../Container/Container";
import backgroundImage from "../../assets/logo_MULTIAVE.png";

export function Header() {
  return (
    <header>
      <Container>
        <header className="h-32 flex">
          <div
            className="h-full w-96 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </header>
        <div className="mt-15">
          <p className="md:text-7xl text-3xl font-bold">
            Seja Bem-vindo ao Cadastro MULTIAVE!
          </p>
          <p className="text-gray-500 my-4 text-xl">
            Ajudando o agro a alimentar o mundo.
          </p>
        </div>
      </Container>
      <hr className="shadow-md border" />
    </header>
  );
}
