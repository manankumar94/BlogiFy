# BlogiFy

**BlogiFy** is a full-stack blogging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create & read blog posts. The platform supports user authentication, role-based access control, and category management.

## Features

- User Registration & Login (JWT authentication)
- Create and view blogs
- Add blog categories
- Protected routes for authenticated users
- Upload and manage blog thumbnails
- View a list of blogs and a detailed single blog
- Search functionality for blogs
- Blogs by particular user

## Technologies Used

- **Frontend**: React.js, React Router DOM, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **File Storage**: Multer for file uploads

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/manankumar94/BlogiFy.git

2. **Navigate to the project directory:**
   
   ```bash
   cd BlogiFy

3. **Install dependencies for the backend:**

    ```bash
    cd server
    npm install

4. **Install dependencies for the frontend:**

    ```bash
    cd ../client
    npm install

5. **Start the backend server:**

    ```bash
    cd server
    npm run dev

6. **Start the frontend React app:**

    ```bash
    cd ../client
    npm start

7. **Access the app in your browser at http://localhost:9000**

## API Endpoints
- POST /api/user/register: Register a new user
- POST /api/user/login: Login user and generate JWT
- GET /api/get/allblogs: Fetch all blogs (Protected)
- POST /api/blog/add: Add a new blog (Protected)
- GET /api/blog/:id :
  Get a single blog by ID (Protected)

### Folder Structure
![image](https://github.com/user-attachments/assets/fffd3b6d-3a4b-4e83-b625-6cb64b129e38)

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


