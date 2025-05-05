# Employee Management Module Backend

## Overview
This backend application is built using the MERN stack (MongoDB, Express, React, Node.js) and is designed to manage employee data and user authentication. It provides a RESTful API for the frontend application to interact with.

## Features
- User authentication (login and registration)
- Employee management (add, edit, delete, retrieve employee information)

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB database (local or cloud)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd employee-management-module/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Update the database connection settings in `src/config/db.js` to point to your MongoDB instance.

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login an existing user

### Employee Management
- **GET /api/employees** - Retrieve all employees
- **POST /api/employees** - Add a new employee
- **PUT /api/employees/:id** - Update an existing employee
- **DELETE /api/employees/:id** - Delete an employee

## License
This project is licensed under the MIT License.