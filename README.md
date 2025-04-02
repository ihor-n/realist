# Account Management API

**Note**: This is not a working software or a prototype. It is an example API structure for managing investment accounts via WealthKernel. 

API built with **Express.js**, **TypeScript**, **SQLite**, and **Axios**.

## Features
- **Create Investment Account**: Open new accounts using WealthKernel API.
- **Error Handling**: Handles validation and internal errors.

## Requirements
- Node.js (v14+)
- TypeScript
- Express.js
- SQLite + TypeORM
- Axios

## Setup

1. **Clone Repo**:

    ```bash
    git clone https://github.com/ihor-n/realist.git
    cd realist
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Configure `.env`**:

    ```plaintext
    PORT=<your port number>
    WK_CLIENT_ID=<your WealthKernel client ID>
    WK_CLIENT_SECRET=<your WealthKernel client secret>
    ```

4. **Run Server**:

    ```bash
    npm run dev
    ```

API available at `http://localhost:3000/api-docs`.

**Note**: In the root directory, you’ll find a mermaid.diagram file with the API integration design and a mermaid.diagram.png for visualization.
