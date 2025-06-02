#!/bin/bash
docker-compose up -d
sleep 5
PGPASSWORD=devpass psql -h localhost -U devuser -d localdev -f db/schema.sql
node import/importData.js