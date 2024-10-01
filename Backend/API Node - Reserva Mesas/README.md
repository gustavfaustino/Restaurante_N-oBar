
# NoBar API (Projeto de Estudo)

Este projeto foi desenvolvido com fins **educacionais**, e todas as informações apresentadas são **fictícias**. A API permite gerenciar reservas de mesas e autenticação de usuários para o restaurante fictício **NoBar**.

## Sumário

- [Instalação](#instalação)
- [Rotas](#rotas)
    - [Autenticação](#autenticação)
    - [Reservas](#reservas)
- [Autenticação](#autenticação)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Documentação Swagger](#documentação-swagger)

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nobar-api.git
   cd nobar-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com as seguintes variáveis de ambiente:
   ```bash
   DATABASE_URL="mongodb+srv://YOUR_MONGO_USERNAME:YOUR_MONGO_PASSWORD@cluster0.mongodb.net/nobar"
   JWT_SECRET="YOUR_SECRET_KEY"
   ```

4. Execute as migrações do Prisma:
   ```bash
   npx prisma generate
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor rodará na porta `3000` por padrão.

---

## Rotas

### Autenticação

- **Registrar Usuário**
    - **Endpoint**: `POST /api/registrar`
    - **Descrição**: Cria um novo usuário no sistema.
    - **Body**:
      ```json
      {
        "nome": "João Silva",
        "email": "joao@gmail.com",
        "senha": "senha123"
      }
      ```

- **Login**
    - **Endpoint**: `POST /api/login`
    - **Descrição**: Autentica o usuário e retorna um token JWT.
    - **Body**:
      ```json
      {
        "email": "joao@gmail.com",
        "senha": "senha123"
      }
      ```

---

### Reservas

- **Criar Reserva**
    - **Endpoint**: `POST /api/reserva`
    - **Descrição**: Cria uma nova reserva de mesa no sistema.
    - **Body**:
      ```json
      {
        "nomeCliente": "Maria Silva",
        "telefoneCliente": "11987654321",
        "dataReserva": "21/09/2024",
        "horarioReserva": "20:00",
        "email": "maria@gmail.com",
        "numeroPessoas": 4
      }
      ```

- **Verificar Disponibilidade**
    - **Endpoint**: `POST /api/reserva/disponibilidade`
    - **Descrição**: Verifica a disponibilidade de uma mesa para uma data e horário específicos.
    - **Body**:
      ```json
      {
        "data": "21/09/2024",
        "horario": "20:00"
      }
      ```

- **Listar Reservas**
    - **Endpoint**: `GET /api/reservas`
    - **Descrição**: Retorna uma lista de todas as reservas cadastradas no sistema.

---

## Autenticação

A API utiliza **JWT (JSON Web Token)** para autenticação. Ao realizar login, o token JWT deve ser enviado no cabeçalho `Authorization` em todas as requisições autenticadas, no formato:

```
Authorization: Bearer <seu_token_jwt>
```

---

## Tecnologias Usadas

- **Node.js**
- **Express**
- **Prisma**
- **MongoDB**
- **JWT para Autenticação**
- **Swagger** para a documentação da API

---

## Documentação Swagger

Você pode acessar a documentação completa da API através da interface Swagger acessando:

```
http://localhost:3000/api/docs
```

---

**Nota:** Todas as informações contidas neste projeto são **falsas** e servem apenas para fins de aprendizado. Este projeto não deve ser utilizado em produção.
