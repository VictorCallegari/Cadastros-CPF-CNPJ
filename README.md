# Cadastro de CPF e CNPJ - Aplicação React

Este projeto é uma aplicação web desenvolvida em React para realizar o cadastro de usuários com CPF e, em breve, CNPJ. É meu primeiro projeto desenvolvido de forma independente, sem seguir videoaulas, e estou empolgado para continuar melhorando e concluí-lo.

## Funcionalidades

- **Página Inicial**: Apresenta uma interface simples onde o usuário pode escolher entre cadastrar CPF ou CNPJ.
- **Formulário de Cadastro de CPF**: Validado com `react-hook-form` e `zod`, garantindo que os dados inseridos sejam precisos e formatados corretamente.
- **Busca de CEP**: Utiliza a API ViaCEP para preencher automaticamente os campos de endereço a partir do CEP informado.
- **Modal de Confirmação**: Implementada para confirmar o cancelamento do cadastro, proporcionando uma experiência mais intuitiva ao usuário.

## Próximos Passos

- Adicionar funcionalidade para cadastro de CNPJ.
- Refatorar o código utilizando Context API do React para gerenciamento de estado global.
- Otimizar o desempenho com `useCallback` para memoização de funções.

## Como Rodar o Projeto

1. Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

csharp
Copiar código

2. Instale as dependências:

cd nome-do-repositorio
npm install

css
Copiar código

3. Execute a aplicação:

npm start

markdown
Copiar código

A aplicação estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

- React
- React Router DOM
- React Hook Form
- Zod (para validação de esquema)
- Context API (a ser implementado)
- HTML5, CSS3 (com Tailwind CSS)
- JavaScript (ES6+)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para sugestões ou problemas encontrados.

## Autor

Victor Callegari - [LinkedIn](https://www.linkedin.com/in/victorcallegarir/)

---
