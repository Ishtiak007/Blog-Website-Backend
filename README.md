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
