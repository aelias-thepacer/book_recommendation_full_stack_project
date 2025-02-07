# Book Recommendation Web Application

## Description

A web application that allows users to search for books using a book data retrieval API, recommend their favorite books, and view reviews from other users. Additionally, the application helps users locate nearby libraries using a second API. Built with **Node.js** and **Express.js** for the backend, **React** for the frontend, and **PostgreSQL** with **Sequelize ORM** for data management, the app ensures a seamless user experience. It includes user authentication via **JWT** and secures API keys and sensitive information using **environment variables**.

## Features
- Search for books using an external book data API.
- Locate libraries near you using a location API.
- RESTful API built with Node.js and Express.js.
- PostgreSQL database with Sequelize ORM.
- Authentication and authorization using JWT.
- Environment variables for securing API keys and sensitive data.
- Supports **GET** requests for retrieving books and library data.
- Supports **POST** requests for adding user book recommendations.

## Tech Stack
### Frontend
- React.js
- React Router

### Backend
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- dotenv (for environment variables)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended)
- PostgreSQL (latest version recommended)
- npm

### Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/book-recommendation-app.git
   cd book-recommendation-app
   ```
2. **Install Backend Dependencies**
   ```sh
   cd backend
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the `backend` directory and add:
   ```env
   PORT=5000
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_secret_key
   BOOK_API_KEY=your_book_api_key
   LOCATION_API_KEY=your_library_api_key
   ```
4. **Run Database Migrations**
   ```sh
   npx sequelize-cli db:migrate
   ```
5. **Start the Backend Server**
   ```sh
   npm start
   ```
6. **Install Frontend Dependencies**
   ```sh
   cd ../frontend
   npm install
   ```
7. **Start the Frontend**
   ```sh
   npm start
   ```

## Future Enhancements
- Implement user reviews and ratings for books.
- Add a recommendation engine based on user preferences.
- Implement OAuth for social logins.

## License
MIT License. See `LICENSE` file for more details.

## Contributions
Eli Pace
Karina Garcia
Leo Jones
Tristin Tsun
