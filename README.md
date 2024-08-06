# Toy Management API

This project is a RESTful API for managing toy records. It provides endpoints for creating, reading, updating, and deleting toy information in a database. The API is built with Express.js and Sequelize, using a PostgreSQL database.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create new toy records
- Retrieve all toys or a specific toy by ID
- Update existing toy records
- Delete toy records

## Installation

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- PostgreSQL database

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/toy-management-api.git
    cd toy-management-api
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up the database:
    - Ensure you have a PostgreSQL database running.
    - Update the database connection settings in `./database/conecta.js` to match your setup.

4. Start the server:
    ```bash
    npm start
    # or
    yarn start
    ```

The API will be running at `http://localhost:3300`.

## Usage

### Running the Server
To run the server, execute:
```bash
npm start
# or
yarn start
