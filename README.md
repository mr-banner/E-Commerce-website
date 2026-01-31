# 🛒 E-Commerce Assignment (Next.js)

This project is a responsive e-commerce application built using **Next.js (App Router)**.  
It implements authentication, protected routing, product listing, filtering, and sorting using the APIs provided in the assignment.

---

## 🚀 Features

- **Authentication**
  - Login using provided credentials
  - Token stored in browser cookies using `js-cookie`
  - Logout functionality with token cleanup

- **Protected Routes**
  - `/productlist` is protected using **Next.js Middleware**
  - Token validation via `/validateToken` API before route access

- **Product Listing**
  - Products fetched from `/products` API by default
  - Responsive product grid with image support
  - Clean separation of UI and business logic

- **Filtering & Sorting**
  - Filters work **concurrently (AND logic)**
  - Filter by:
    - Price
    - Size
    - Color
    - Brand
    - Collection
    - Tags
  - Sorting by price
  - Active filter indicators in sidebar

- **Responsive UI**
  - Optimized for mobile, tablet, and desktop
  - Sidebar + grid layout
  - UI structure aligned with provided Figma design

---

## 🧩 Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Next.js Middleware**
- **js-cookie**
- **next/image**

---

Check here: https://5tdh18nh-3000.inc1.devtunnels.ms/

## 🔐 Authentication Flow

1. User lands on **Login Page** (`/login`)
2. On successful login:
   - Token stored in cookie as `token`
   - Username stored in cookie as `userName`
3. User is redirected to `/productlist`
4. Middleware validates token using `/validateToken`
5. Unauthorized users are redirected back to `/login`

---

## 🧪 Login Credentials (For Testing)

```json
{
  "email": "example@gmail.com",
  "password": "P@ssw0rd",
  "mobile": "7354440855"
}


🌐 API Endpoints Used

| Purpose        | Endpoint         |
| -------------- | ---------------- |
| Login          | `/login`         |
| Validate Token | `/validateToken` |
| Get Products   | `/products`      |

All APIs are integrated exactly as per the assignment instructions.

🛡 Middleware Protection

Middleware runs before rendering protected routes

Reads token from cookies

Calls /validateToken

Redirects unauthenticated users to /login

Prevents UI flicker and unauthorized access

⚙️ Environment Setup

Create a .env.local file in the root directory:

NEXT_PUBLIC_BACKEND_URL=<BACKEND_API_BASE_URL>

▶️ Getting Started

# Install dependencies
npm install

# Run development server
npm run dev

Open the application at:
👉 http://localhost:3000
