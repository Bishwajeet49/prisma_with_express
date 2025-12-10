# Express + Prisma + Zod + Docker (Layered Architecture)

This project demonstrates a robust Node.js API setup using a Layered Architecture. It is designed for beginners to understand how to structure a backend application cleanly.

## Tech Stack
- **Node.js & Express**: Web server framework.
- **Prisma**: Modern ORM for database interaction.
- **PostgreSQL**: Relational database (running in Docker).
- **Zod**: Validation library.
- **Docker**: Containerization for the database.
- **Nodemon**: Development tool to auto-restart server.

## Architecture: Layered Approach
We use the **MVC (Model-View-Controller) + Services + Repositories** pattern:
1.  **Routes** (`src/routes`): Define API endpoints and map them to Controllers.
2.  **Controllers** (`src/controllers`): Handle HTTP requests, parse input, call Services, and send responses.
3.  **Services** (`src/services`): Contain business logic. They sit between Controllers and Repositories.
4.  **Repositories** (`src/repositories`): Handle direct database operations using Prisma. This keeps DB logic isolated.
5.  **Middleware** (`src/middleware`): Functions that run before the final request handler (e.g., validation, error handling).

## Prerequisites
- Node.js installed.
- Docker and Docker Compose installed.

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Database (Docker)**
    This command starts a PostgreSQL container.
    ```bash
    docker-compose up -d
    ```

3.  **Setup Database Schema**
    This applies the Prisma schema to the database (creates tables).
    ```bash
    npx prisma migrate dev --name init
    ```

4.  **Run the Server**
    ```bash
    npm run dev
    ```
    The server will start at `http://localhost:3000`.

## API Endpoints

- **GET /api/health**: Check server status.
- **GET /api/users**: Get all users.
- **POST /api/users**: Create a user (Body: `{ "email": "test@test.com", "name": "Test" }`).
- **GET /api/users/:id**: Get a user by ID.
- **PUT /api/users/:id**: Update a user.
- **DELETE /api/users/:id**: Delete a user.

