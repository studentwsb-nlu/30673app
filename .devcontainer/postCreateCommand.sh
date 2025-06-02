#!/bin/bash
set -e

echo "🛠️ Running postCreate setup..."

# Wait a bit for PostgreSQL to initialize
sleep 3

# Run schema and import scripts
PGPASSWORD=devpass psql -h localhost -U devuser -d localdev -f db/schema.sql

echo "📦 Importing CSV data..."
node import/importData.js

echo "✅ Post-create setup complete."
