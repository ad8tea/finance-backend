# Finance Backend System

A backend REST API for managing financial records with role-based access control, 
built with Node.js and Express.js.

## Features

- JWT-based authentication (register & login)
- Role-based access control with three roles:
  - **Admin** — full access: create and manage all records
  - **Analyst** — view records and summaries
  - **Viewer** — read-only access to data
- Financial record management (income, expenses, net balance)
- User-specific data filtering
- Dashboard summary endpoint (total income, total expense, net balance)

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Auth:** JSON Web Tokens (JWT)
- **Storage:** In-memory (resets on restart — focuses on API design over persistence)

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive JWT token |

### Records
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/records` | Admin only | Create a new financial record |
| GET | `/records` | Admin, Analyst | View all records |
| GET | `/records/summary` | Admin, Analyst | Get income, expense, and net balance |

## Getting Started

```bash
npm install
npm run dev
```

Server runs at: `http://localhost:5000`

## Notes

- Data is stored in memory and resets on server restart
- Project emphasis is on backend architecture, access control design, 
  and clean API structure rather than production-level persistence
- To extend: swap in-memory storage with MongoDB or PostgreSQL
