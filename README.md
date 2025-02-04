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
