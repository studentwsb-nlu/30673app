#!/bin/bash
set -e

echo "==> Installing PostgreSQL..."
sudo apt-get update -y
sudo apt-get install -y postgresql postgresql-contrib

echo "==> Starting PostgreSQL service..."
sudo service postgresql start

echo "==> Creating user and database..."
sudo -u postgres psql -c "CREATE USER devuser WITH PASSWORD 'devpass';"
sudo -u postgres psql -c "CREATE DATABASE localdev OWNER devuser;"

echo "==> Running schema..."
PGPASSWORD=devpass psql -h localhost -U devuser -d localdev -f db/schema.sql

echo "==> Importing sample data..."
node import/importData.js

echo "==> Setup complete."
