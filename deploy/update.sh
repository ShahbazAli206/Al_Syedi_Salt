#!/bin/bash
# Run on the VPS every time you push new code.
# cd /var/www/syedi-salt && bash deploy/update.sh
set -e

REPO_DIR="/var/www/syedi-salt"
cd "$REPO_DIR"

echo "--- Pulling latest code ---"
git pull origin main

echo "--- Installing dependencies ---"
cd client && npm install

echo "--- Building Next.js ---"
npm run build
cd "$REPO_DIR"

echo "--- Restarting PM2 ---"
if pm2 list | grep -q "salt-web"; then
  pm2 restart ecosystem.config.cjs --env production
else
  pm2 start ecosystem.config.cjs --env production
fi

pm2 save

echo ""
echo "=== Deployed! Visit https://syedi-salt.com ==="
pm2 list
