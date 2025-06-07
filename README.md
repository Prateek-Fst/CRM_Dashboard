# CRM Web Application

A modern Customer Relationship Management (CRM) web application built with React, Redux, Redux Toolkit, and Tailwind CSS, integrated with the DummyJSON API. The application features user authentication, a dashboard with data visualizations, and product management with full CRUD operations.

---

## 📑 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Demo Credentials](#demo-credentials)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## ✅ Features

- **Login Page**: Secure user authentication with a responsive login form.
- **Authentication**: Public and private routing using Redux for state management.
- **Dashboard**: Visualizations including bar, pie, and line charts for product analytics.
- **Product Management**: Full CRUD (Create, Read, Update, Delete) operations for managing products.
- **Responsive Design**: Mobile-friendly interface styled with Tailwind CSS.
- **State Management**: Efficient state handling with Redux Toolkit.
- **Toast Notifications**: User feedback for actions using toast notifications.
- **Animations**: Smooth transitions and animations using Framer Motion.

---

## 🧰 Technologies

- **React**: Frontend library for building user interfaces.
- **Redux & Redux Toolkit**: State management for authentication and product data.
- **React Router**: Client-side routing for navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for smooth transitions.
- **React Query**: Data fetching and caching for API calls.
- **Shadcn/UI**: Reusable UI components for a consistent look.
- **Recharts**: Charting library for data visualizations.
- **Lucide React**: Icon library for UI elements.
- **DummyJSON API**: Mock API for authentication and product data.

---

## ⚙️ Setup and Installation

```bash
# Clone the repository
git clone https://github.com/your-username/crm-web-app.git
cd crm-web-app

# Install dependencies
npm install

# Run the development server
npm start
```
## Project structure 

crm-web-app/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── auth/           # Authentication components (LoginForm, ProtectedRoute)
│   │   ├── dashboard/      # Dashboard components
│   │   ├── layout/         # Layout components (sidebar, header)
│   │   ├── products/       # Product management components (ProductList, ProductForm)
│   │   └── ui/             # Reusable UI components (Button, Input, etc.)
│   ├── pages/
│   │   ├── Index.tsx       # Main entry page
│   │   └── NotFound.tsx    # 404 page
│   ├── store/
│   │   ├── slices/
│   │   │   ├── authSlice.ts      # Authentication state and actions
│   │   │   └── productSlice.ts   # Product state and actions
│   │   └── store.ts              # Redux store configuration
│   ├── App.tsx             # Main App component
│   ├── index.tsx           # Entry point
│   └── styles/             # Tailwind CSS configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation


## 🚀 Usage
##  Login
Navigate to the login page (/ if not authenticated).

Use the demo credentials or any valid credentials from the DummyJSON API.

Upon successful login, you'll be redirected to the dashboard.

## 📊 Dashboard
View product analytics through bar, pie, and line charts.

See key metrics like:

Total revenue

Product count

Average rating

Total stock

## 📦 Product Management
Access the product management page via the sidebar.

Add new products using the "Add Product" button.

Edit or delete existing products.

Search products by title or category.

## 🚪 Logout
Use the logout option in the sidebar to clear the session and return to the login page.

🔌 API Integration
The application integrates with the DummyJSON API for the following endpoints:

🔐 Authentication:
POST /auth/login: Authenticate users and retrieve a token.

GET /auth/me: Fetch current user details.

📦 Products:
GET /products: Fetch a list of products with pagination.

GET /products/:id: Fetch a single product by ID.

POST /products/add: Add a new product.

PUT /products/:id: Update an existing product.

DELETE /products/:id: Delete a product.

# 🔑 Demo Credentials
Use the following credentials for testing:

Username: emilys

Password: emilyspass

