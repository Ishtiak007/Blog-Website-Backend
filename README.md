# Dynamic Blog Application

This **interactive blog platform** is built for **content creation and discovery**, leveraging `TypeScript`, `Node.js`, `Express.js`, and `MongoDB` with `Mongoose`.

### Features:

- **User Roles**: `Admin` and `User` with secure authentication.
- **Public API**: Supports **searching, sorting, and filtering** for efficient content access.
- **Secure Login**: Ensures protected access for users.

## 🔑 Key Features

### 👥 User Roles

- **Admin**: Has the ability to delete any blog and restrict user access.
- **User**: Can create, edit, and remove only their own blogs.

### 🔐 Authentication & Authorization

- Secure access with **Bearer Token**, ensuring role-based permissions for different actions.

### 📝 Blog Management

- Users can create, update, and delete their own blog posts.
- Admins have full control over all blogs across the platform.

### 🚀 User Management

- Admins can block users, restricting their platform access.
- Users retain access to their content unless blocked by an admin.

### 🔍 Search, Filter & Sort

- **Search**: Find blogs by `title` or `content`.
- **Filter**: Narrow down blogs by `author ID`.
- **Sort**: Organize blogs using various sorting criteria for improved navigation.

### 🔗 Live Deployment

- **Live Site**: [Visit the Deployment](comming)

## 🔑 Key Features

### 👥 User Roles

- **Admin**:
  - Can delete any blog.
  - Can block specific users to restrict access.
- **User**:
  - Can create, update, and delete only their own blogs.

### 🔐 Authentication & Authorization

- Secure login using **Bearer Token** to access protected routes.
- Role-based permissions ensure proper access control.

### 📝 Blog Management

- Users can manage their own blogs (**create, update, delete**).
- Admins have full control over all blogs on the platform.

### 🚀 User Management

- Admins can **block users**, preventing further access.
- Users can interact with their content unless blocked.

### 🔍 Search, Filter & Sort

- **Search**: Find blogs by `title` or `content`.
- **Filter**: View blogs based on `author ID`.
- **Sort**: Organize blogs using various sorting criteria for better content discovery.

## 📁 Folder Structure

Below is the folder structure for the project:

```bash
├── dist/
│   ├── app/
│   ├── app.js
│   └── server.js
├── node_modules/
├── src/
│   ├── app/
│   │   ├── builder/
│   │   ├── config/
│   │   ├── errors/
│   │   ├── interface/
│   │   ├── middleware/
│   │   ├── modules/
│   │   │   ├── blog/
│   │   │   └── user/
│   │   ├── routes/
│   │   ├── utils/
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .eslint.config.mjs
└── etc
```

## 🛠️ Installation and Setup

To get started with the project locally, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Ishtiak007/Blog-Website-Backend.git
```

### 2. Navigate to the Project Folder

Go to the project directory:

```bash
cd Blog-Website-Backend
```

### 3. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 4. Setup Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
NODE_ENV=development

PORT=5000

DATABASE_URL=mongodb+srv://Blog-Assignment-Server:NZE8dUQ1OqFG3yeC@cluster0.sjppj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


BCRYPT_SALT_ROUNDS=12

ACCESS_TOKEN_SECRET=d7aedf6b3aebddb9b16e838047f60a9511f468104b23f247ef2c7ba7da0f31a8e46ee084da5d70c88519324dcb1b565c1aebdbe8a9c74ec4fb3792ee9075db99

ACCESS_TOKEN_EXPIRES_IN=30d
```

### 5. Admin Login Credentials

To access the admin panel, use the following credentials:

- **Email:** `admin@gmail.com`
- **Password:** `admin123`

### 6. Run the Application

Start the development server:

```bash
npm run start:dev
```

Your application should now be running at `http://localhost:5000`.

### 7. Access the Application

- Visit the site in your browser at `http://localhost:5000`.
- You can now use the application to create, update, delete, and manage blogs based on the user roles.

### 8. Additional Notes

- To access protected routes, use Bearer Tokens for authentication.

## ⚙️ Technologies Used

This project is built using technologies that ensure smooth performance and easy development:

### Backend

- **Node.js**: Runtime environment for executing JavaScript server-side.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **TypeScript**: Typed superset of JavaScript for maintaining type safety.

### Authentication & Authorization

- **JWT (JSON Web Tokens)**: Secure authentication and user verification.
- **Bearer Token**: A method of transmitting the JWT in the `Authorization` header to protect routes and ensure only authorized access to APIs.

### Validation

- **Zod**: Schema-based data validation.

### Testing & Development Tools

- **Postman**: API testing and debugging.
- **Nodemon**: Auto-restarting for development.
- **ESLint**: Code linting to enforce consistent coding standards.
- **Prettier**: Code formatter to maintain clean and readable code.

### Deployment

- **Vercel**: For seamless deployment and hosting.
- **dotenv**: Environment variable management.

### Other Tools

- **bcryptjs**: For hashing passwords securely.
- **CORS**: Middleware to enable cross-origin resource sharing.

These technologies work together to create a secure, scalable, and user-friendly blogging platform.

### 📝 Access Control

- **🔓 Public Access**: Available to all users without authentication.
- **🔐 Admin Only**: Restricted to admin users only.
- **✍️ Blog Owner Only**: Actions allowed only for the blog's creator.
- **👑 Admin / Owner**: Accessible to both admins and the blog owner.

## 📩 Get in Touch

For any questions, feedback, or collaboration opportunities, feel free to connect:

- 📧 **Email**: [ishtiakahmed18899@gmail.com](mailto:ishtiakahmed18899@gmail.com)
- 🖥 **GitHub**: [Ishtiak Ahmed](https://github.com/Ishtiak007)
- 💼 **LinkedIn**: [Ishtiak Ahmed](https://www.linkedin.com/in/ishtiak-ahmed-2846722a5/)

Looking forward to connecting with you! 😊
