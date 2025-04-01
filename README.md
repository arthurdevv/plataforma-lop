<p align="center">
  <img src="https://github.com/user-attachments/assets/ae7f697b-f78b-4b03-9732-7a95a300bb29" alt="Preview">
</p>

<br />

<p align="center">
  Plataforma de <b>cadastro e login</b> de usuários utilizando tecnologias modernas, incluindo <b>Next.js, React, Styled Components e uma REST API</b> com banco de dados <b>Neon (PostgreSQL)</b>
</p>

## Funcionalidades
- Cadastro de usuários → `POST /api/register`
- Login e autenticação → `POST /api/login`
- Listagem de usuário cadastrados → `GET /api/users`
- Armazenamento dos dados do usuário

<br />

<p align="center">
  <img src="https://github.com/user-attachments/assets/f491291e-bbe6-4e65-a480-fe5b52c38721" alt="Preview">
</p>

## Motivação
- Aprimorar aprendizados com `bancos de dados` e `REST APIs`
- Implementar operações de `CRUD` para compreender a interação entre o `front` e o `back`
- Explorar a versão mais recente do `Next` utilizando as novas funcionalidades da `15.x`

<br />

<p align="center">
  <img src="https://github.com/user-attachments/assets/7d374b21-f9f3-445f-84a3-867a81c3ad0a" alt="Preview">
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
