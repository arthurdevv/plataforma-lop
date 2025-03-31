<p align="center">
  <img src="https://github.com/user-attachments/assets/4c7d8d89-7db2-4911-9d61-8987125a5675" alt="Preview">
</p>

<br />

<p align="center">
  Plataforma de <b>cadastro e login</b> de usuários utilizando tecnologias modernas, incluindo <b>Next.js, React, Styled Components e uma REST API</b> com banco de dados <b>Neon (PostgreSQL)</b>
</p>

## Funcionalidades
- Cadastro de usuários → `POST /api/register`
- Login e autenticação → `POST /api/login`
- Listagem de usuário cadastrados → `POST /api/users`
- Armazenamento dos dados do usuário

<br />

<p align="center">
  <img src="https://github.com/user-attachments/assets/d3151ddf-5458-4c17-adcb-fa034c812f66" alt="Preview">
</p>

## Motivação
- Aprimorar aprendizados com `bancos de dados` e `REST APIs`
- Implementar operações de `CRUD` para compreender a interação entre o `front` e o `back`
- Explorar a versão mais recente do `Next` utilizando as novas funcionalidades da `15.x`

<br />

<p align="center">
  <img src="https://github.com/user-attachments/assets/4a41156f-897f-4a3f-b18a-0ca46a4c187e" alt="Preview">
</p>

## Aplicação

> **NOTA: Antes de rodar localmente, veja a versão em [produção](https://plataforma-lop.vercel.app/) do projeto**

1. Clone o repositório
```sh
git clone https://github.com/arthurdevv/lop-plataforma.git
cd lop-plataforma
```

2. Instale as dependências
```sh
yarn install
```

3. Defina a variável de ambiente `DATABASE_URL`
> **NOTA: Crie um arquivo **.env** na raiz do projeto e adicione a credencial do [Neon](https://neon.tech/)**
```sh
DATABASE_URL="url-do-neon"
```

4. Execute o script de desenvolvimento
```sh
yarn dev
```

5. Abra a aplicação no navegador
```sh
http://localhost:3000
```
