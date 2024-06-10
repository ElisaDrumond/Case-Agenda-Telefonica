---
tags: []
created: 2024-01-10T21:04
"relates to:": 
updated: 2024-06-06T22:38
---
# Detalhamento do Case - Agenda Telefônica

## 1. Escopo do Projeto
Desenvolver uma aplicação de agenda telefônica com funcionalidades de CRUD (Create, Read, Update, Delete) para contatos. A aplicação deve ser responsiva e permitir a interação em dispositivos desktop e mobile. Utilizar tecnologias React para o front-end, Node.js para o back-end e MongoDB para persistência dos dados.

## 2. Requisitos

**Requisitos Obrigatórios:**

1. **Tela de Lista de Contatos:**
    - Exibir lista de contatos com nome e telefone;
    - Botões para adicionar novo contato, editar e apagar contatos existentes.

2. **Tela de Detalhe do Contato:**
    - Campos: Telefone, Nome, Email, Imagem.
    - Funcionalidades (opcional):
        - Atualizar contato existente;
        - Apagar contato.

1. **Tecnologias:**
    - Front-end: React;
    - Back-end: Nest;
    - Banco de Dados: MongoDB.

**Requisitos Opcionais:**

1. **Autenticação e Autorização:**
    - Cadastro dos usuários, solicitando nome, email e senha;
    - Implementar login e validação de rotas;
    - Impedir acesso à lista de contatos sem estar logado.

1. **Boas Práticas de Programação:**
    - Código limpo e bem documentado;
    - Utilização de padrões de projeto adequados.

2. **Integração Front-End/Back-End/Banco de Dados:**
    - Comunicação eficiente e segura entre as camadas da aplicação.

3. **Fluxo de Acesso Coerente:**
    - Navegação intuitiva entre as telas da aplicação.

4. **Capacidade de Explicar o Código:**
    - Clareza na apresentação e justificativa das escolhas de implementação.

## 3. Arquitetura da Solução

### **Front-End (React):**

Initializer React: [Getting Started | Vite (vitejs.dev)](https://vitejs.dev/guide/)

- **Componentes:**
    - `ContactList`: Exibe a lista de contatos.
    - `ContactDetail`: Formulário para visualizar/editar/criar contatos.
    - `Login`: Tela de login.

- **Estado e Gerenciamento:**
    - Utilização do `useState` e `useEffect` para gerenciar estado e efeitos colaterais.
    - Utilização de `context` ou bibliotecas de gerenciamento de estado como Redux, se necessário.

- **Roteamento:**
    - Utilização de `react-router` para navegação entre telas.

###  **Back-End (Nest):**
Documentação NestJS: [NestJS | A progressive Node.js framework](https://docs.nestjs.com/)


- **Módulos:**
    - `ContactsModule`: Gerencia todas as operações relacionadas a contatos.
    - `AuthModule`: Gerencia autenticação e autorização (se implementado).

- **Controllers:**
    - `ContactsController`: Define as rotas para operações de CRUD.
    - `AuthController`: Define as rotas para login e validação (se implementado).

- **Services:**
    - `ContactsService`: Contém a lógica de negócios para operações de contatos.
    - `AuthService`: Contém a lógica de negócios para autenticação (se implementado).

- **Modelos e Schemas:**
    - `Contact`: Define o esquema do contato para MongoDB usando Mongoose.

**Banco de Dados (MongoDB):**
- **Estrutura:**
    - Coleção `contacts` com documentos contendo os campos: `name`, `phone`, `email`, `image`.

## 4. Fluxo de Desenvolvimento

1. **Planejamento:**
    - Definir estrutura inicial do projeto - MVC;
    - Criar wireframes das telas principais.

2. **Configuração do Ambiente:**
    - Configurar ambiente de desenvolvimento com React, Nest e MongoDB.

3. **Desenvolvimento:**
    - Implementar autenticação com Nest;
    - Implementar crud com Nest;
    - Configurar banco de dados MongoDB;
    - Implementar front-end com React;
    - Integrar front-end e back-end.
 
4. **Desenvolvimento Final:**
    - Ajustes de design e usabilidade;
    - Documentação do código.

5. **Apresentação:**
    - Apresentação destacando arquitetura, decisões de design e código.

## 5. Tecnologias e Ferramentas

- **Front-End:**
    - React
    - react-router
    - Axios (para chamadas HTTP)
    - Bootstrap ou Material-UI

- **Back-End:**
    - Nest
    - Mongoose (para interação com MongoDB)

- **Banco de Dados:**
    - MongoDB

- **Autenticação:**
    - JWT
    - bcrypt (para hashing de senhas)

## 6. Estrutura de Projeto

**Front-End:**

```
src/
|-- components/
|   |-- ContactList.js
|   |-- ContactDetail.js
|   |-- Login.js
|
|-- services/
|   |-- api.js
|
|-- App.js
|-- index.js
```

**Back-End:**
```
src/
|-- modules/
|   |-- contacts/
|       |-- contacts.controller.ts
|       |-- contacts.service.ts
|       |-- schemas/
|           |-- contact.schema.ts
|       |-- dtos/
|           |-- create-contact.dto.ts
|           |-- update-contact.dto.ts
|   |-- auth/ (se necessário)
|       |-- auth.controller.ts
|       |-- auth.service.ts
|       |-- dtos/
|           |-- login.dto.ts
|           |-- register.dto.ts
|
|-- app.module.ts
|-- main.ts

```