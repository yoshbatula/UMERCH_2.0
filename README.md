# 🛍️ UMERCH - University of Mindanao Merchandise E-Commerce Management System

A streamlined e-commerce platform to manage the official University of Mindanao merchandise operations — enhancing efficiency, accuracy, and user experience for students, staff, alumni, and administrators.

---

## 📚 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🏫 Overview
**UMERCH (UM-MEMS)** centralizes the sale and inventory management of **University of Mindanao branded merchandise**.  
It replaces manual, error-prone processes with secure user authentication, product catalog management, automated stock tracking, cart checkout, order fulfillment, and sales reporting — all in one integrated system.

---

## ⚙️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | [React.js](https://react.dev/) |
| **Backend** | [Laravel](https://laravel.com/) |
| **Integration** | [Inertia.js](https://inertiajs.com/) |
| **Database** | [MySQL](https://www.mysql.com/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |

**Additional Tools**
- JWT Authentication  
- Email OTP verification (UM Email System)  
- RESTful + Inertia routing  
- Vite build system  

---

## 🚀 Features
- 🔐 **Secure UM email login with OTP verification**  
- 👥 **Role-based user access control** (Admin, Customer)  
- 🛒 **Product catalog with search and filtering**  
- 📦 **Real-time inventory management with stock alerts**  
- 💳 **Multiple payment options**: Cash, GCash, Salary Deduction, Card  
- 🧾 **Receipt upload and order status tracking**  
- 📊 **Dynamic sales dashboard with exportable reports**

---

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/umerch.git
cd umerch
2. Backend Setup (Laravel)
bash
Copy code
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
3. Frontend Setup (React + Vite)
bash
Copy code
cd frontend
npm install
npm run dev
4. Install and Configure Inertia.js
UMERCH uses Inertia.js to connect Laravel (backend) with React (frontend) seamlessly — eliminating the need for a traditional API layer.

✅ Step 1: Install Inertia server-side adapter
bash
Copy code
composer require inertiajs/inertia-laravel
✅ Step 2: Install Inertia client-side adapter for React
bash
Copy code
npm install @inertiajs/react
✅ Step 3: Set up Inertia middleware
In app/Http/Kernel.php, add the Inertia middleware:

php
Copy code
\App\Http\Middleware\HandleInertiaRequests::class,
✅ Step 4: Create a basic Inertia React page
Example: resources/js/Pages/Home.jsx

jsx
Copy code
import React from 'react';
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <div className="p-6 text-center">
      <Head title="Home" />
      <h1 className="text-2xl font-bold text-gray-800">Welcome to UMERCH</h1>
    </div>
  );
}
✅ Step 5: Render Inertia responses from Laravel routes
Example: routes/web.php

php
Copy code
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home');
});
✅ Step 6: Configure Vite to use React + Inertia
Ensure vite.config.js includes:

js
Copy code
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'],
      refresh: true,
    }),
    react(),
  ],
});
Once configured, your Laravel and React apps will work together through Inertia.js, creating a seamless single-page application experience.

5. Configure Environment Variables
Database connection (MySQL)

University email authentication provider

Email server for OTP delivery

(Optional) Seed initial product and user data if needed.

💡 Usage
Register or log in using your University of Mindanao credentials

Browse products and add items to your cart

Proceed to checkout and select a payment method

Upload payment receipts if required

Track your order status and history via your dashboard

Admins can manage inventory, orders, and generate sales reports from the admin panel

🧩 Architecture
UMERCH is built with a modular architecture that includes the following subsystems:

User Authentication & Account Management

Product & Inventory Management

Cart & Checkout Management

Order & Fulfillment Management

Sales & Reporting Management

Each subsystem communicates securely and maintains audit logs for accountability and transparency.

📄 License
This project is licensed under the [Specify License Here] License.
Please see the LICENSE file for more information.

📬 Contact
For inquiries, feedback, or support, please reach out to the development team:
📧 ummerch-support@umindanao.edu.ph
💻 Or open an issue via GitHub Issues

💖 Acknowledgments
Special thanks to:

The University of Mindanao community for inspiring this project

The UMERCH Development Team for their dedication and teamwork

The open-source community behind React, Laravel, Inertia.js, MySQL, and Tailwind CSS

