# LongTerm Trends PL - PoC

A simple proof-of-concept version of LongTermTrends.net focused on Poland.

## Charts
- Gold to Real Estate
- Gold in PLN
- WIG to Real Estate

## Stack
- Node.js + Express (Backend)
- PostgreSQL (RDS)
- Chart.js (Frontend)
- Hosted on EC2

## Setup

```bash
git clone <repo>
cd longterm-trends-pl-poc
npm install
```

Create a `.env` file:
```bash
DB_HOST=your-rds-endpoint
DB_USER=your-db-user
DB_PASS=your-db-password
DB_NAME=your-db-name
```

## One-Time Import

```bash
node import/importData.js
```

## Run

```bash
npm start
```

Visit `frontend/index.html` or set up NGINX to serve frontend and proxy `/api/*` to port 3000.