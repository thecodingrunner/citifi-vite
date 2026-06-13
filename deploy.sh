#!/bin/bash
set -e

echo "Building and restarting citifi..."
docker compose up -d --build

echo "Cleaning up old images..."
docker image prune -f

echo "Done. Current status:"
docker ps | grep citifi