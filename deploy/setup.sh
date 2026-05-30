#!/bin/bash
# Run ONCE on a fresh Hostinger VPS / Node.js server (Ubuntu 22.04).
# SSH in as root, then:  bash setup.sh
set -e

echo "=== 1. System update ==="
apt-get update && apt-get upgrade -y

echo "=== 2. Install Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "=== 3. Install PM2, Nginx, Git, Certbot ==="
npm install -g pm2
apt-get install -y nginx git certbot python3-certbot-nginx

echo "=== 4. Configure PM2 to start on reboot ==="
pm2 startup systemd -u root --hp /root | tail -1 | bash

echo ""
echo "=== Setup complete! Next steps: ==="
echo "  1. git clone <your-github-repo-url> /var/www/syedi-salt"
echo "  2. cd /var/www/syedi-salt/client"
echo "  3. Create .env.local (see client/.env.local.example for what to put in it)"
echo "  4. bash /var/www/syedi-salt/deploy/update.sh"
echo "  5. cp /var/www/syedi-salt/deploy/nginx.conf /etc/nginx/sites-available/syedi-salt.com"
echo "  6. ln -s /etc/nginx/sites-available/syedi-salt.com /etc/nginx/sites-enabled/"
echo "  7. nginx -t && systemctl reload nginx"
echo "  8. certbot --nginx -d syedi-salt.com -d www.syedi-salt.com"
echo "  9. In Hostinger DNS: A record syedi-salt.com → this VPS IP"

# -----------------------------------------------
# client/.env.local contents (create on VPS):
# -----------------------------------------------
# GEMINI_API_KEY=your_key_here
# CONTACT_EMAIL_USER=your-gmail@gmail.com
# CONTACT_EMAIL_PASS=your_app_password
# CONTACT_EMAIL_TO=sales@alsyedigroup.com
