# My Go-to Stack

This monorepo is built using **Turborepo**, featuring a **React + Vite + ShadCN** frontend and a **NestJS** backend. It is structured for scalability, performance, and maintainability.

## 🚀 Tech Stack

### **Monorepo Tooling**

- **[Turborepo](https://turbo.build/)** - High-performance monorepo build system
- **npm** - Package manager with workspace support

### **Frontend (apps/web)**

- **[React](https://react.dev/)** - UI library for building interactive applications
- **[Vite](https://vitejs.dev/)** - Fast build tool for frontend development
- **[ShadCN](https://ui.shadcn.com/)** - Accessible and customizable UI components built on Radix UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[React Query](https://tanstack.com/query)** - Server-state management for efficient API handling

### **Backend (apps/server)**

- **[NestJS](https://nestjs.com/)** - A progressive Node.js framework for building scalable APIs
- **[TypeORM](https://typeorm.io/)** - ORM for database access

### **Shared Code (packages/shared)**

- **Shared Types & Utilities** - Reusable code for both frontend and backend

---

## 🛠️ Setup & Installation

### 1️⃣ **Clone the Repository**

```sh
 git clone https://github.com/jannomeister/go-to-stack.git
 cd go-to-stack
```

### 2️⃣ **Change Git Remote URL**

If you want to use your own repository, update the remote URL:

```sh
 git remote set-url origin https://github.com/your-username/your-repo.git
```

### 3️⃣ **Install Dependencies**

```sh
 npm install
```

### 3️⃣ **Run Development Servers**

To start both frontend and backend:

```sh
 npm run dev
```

Or run them separately:

```sh
# Start frontend
cd apps/web
npm run dev

# Start backend
cd apps/server
npm run start:dev
```

---

## 📂 Project Structure

```
go-to-stack/
│── apps/
│   ├── web/      # React + Vite + ShadCN (Frontend)
│   ├── server/        # NestJS Backend
│── packages/
│   ├── shared/        # Shared Types/Utils
│── turbo.json         # Turborepo Config
│── package.json       # Root package.json (npm workspace)
│── README.md          # Project Documentation
```

---

## 🏗️ Building the Project

Run the following command to build both frontend and backend:

```sh
npm run build
```

---

## 🚀 Deployment

### **Frontend (React + Vite)**

- Deploy on **Vercel, Netlify, or Cloudflare Pages**

### **Backend (NestJS API)**

- Deploy on **Railway, Fly.io, or VPS (Docker)**

---

## 🛠️ Useful Commands

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `npm run dev`        | Start both frontend and backend |
| `npm run test`       | Run tests for the project       |
| `npm run dev:server` | Start only the backend          |
| `npm run dev:web`    | Start only the frontend         |
| `npm run build`      | Build both frontend and backend |

## 📜 License

This project is licensed under the [MIT License](LICENSE).
