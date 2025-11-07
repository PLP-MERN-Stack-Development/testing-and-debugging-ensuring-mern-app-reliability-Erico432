# MERN Testing App

A full-stack MERN (MongoDB, Express.js, React, Node.js) application with comprehensive testing setup, including authentication and todo management features.

## Features

- **User Authentication**: Register and login functionality with JWT tokens
- **Todo Management**: Create, read, update, and delete todos
- **Responsive UI**: Built with React and modern UI components
- **Comprehensive Testing**: Unit, integration, and end-to-end tests
- **Logging**: Server-side logging with Winston
- **Error Handling**: Client and server error boundaries and middleware

## Technology Stack

### Frontend
- React 18.3.1
- React Router DOM 6.26.1
- Axios 1.7.2
- JWT Decode 4.0.0
- Testing: Jest, React Testing Library, Cypress

### Backend
- Node.js with Express 4.19.2
- MongoDB with Mongoose 8.5.4
- Authentication: bcryptjs, jsonwebtoken
- Logging: Winston 3.13.1
- Testing: Jest, Supertest, MongoDB Memory Server

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd testing-and-debugging-ensuring-mern-app-reliability-Erico432
   ```

2. Install all dependencies:
   ```bash
   npm run install-all
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-testing
   JWT_SECRET=your-secret-key-here
   NODE_ENV=development
   ```

## Usage

### Running the Application

Start both client and server concurrently:
```bash
npm run dev
```

This will start:
- Server on http://localhost:5000
- Client on http://localhost:3000

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

#### Todos
- `GET /api/todos` - Get all todos (authenticated)
- `POST /api/todos` - Create a new todo (authenticated)
- `PUT /api/todos/:id` - Update a todo (authenticated)
- `DELETE /api/todos/:id` - Delete a todo (authenticated)

## Testing

### Unit Tests
Run unit tests for both client and server:
```bash
npm run test:unit
```

### Integration Tests
Run integration tests:
```bash
npm run test:integration
```

### End-to-End Tests
Run Cypress e2e tests:
```bash
npm run test:e2e
```

### All Tests
Run all tests:
```bash
npm test
```

### Test Coverage
Generate coverage reports:
```bash
npm run test:coverage
```

## Project Structure

```
mern-testing/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── tests/          # Client tests
│   │   └── utils/          # Utility functions
│   ├── cypress/            # E2E tests
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── tests/              # Server tests
│   └── package.json
├── .gitignore
├── README.md
└── package.json            # Root package with workspaces
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
