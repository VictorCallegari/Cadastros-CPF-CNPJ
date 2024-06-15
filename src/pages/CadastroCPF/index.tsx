import { Container } from "../../components/Container/Container";
import backgroundImage from "../../assets/logo_MULTIAVE.png";
import { FormCPF } from "../../components/FormCPF/FormCPF";

export function CadastroCPF() {
  return (
    <>
      <Container>
        <header className="h-32 flex">
          <div
            className="h-full w-96 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </header>
        <div className="mt-15">
          <p className="md:text-7xl text-3xl font-bold">
            Cadastro CPF
          </p>
        </div>
      </Container>
      <Container>
        <div>
          <FormCPF/>
        </div>
      </Container>
    </>
  );
}
