// PM2 config — runs the Next.js app on the VPS.
// Usage:  pm2 start ecosystem.config.cjs --env production
//         pm2 restart ecosystem.config.cjs --env production

module.exports = {
  apps: [
    {
      name: 'salt-web',
      cwd: './client',
      script: 'node_modules/.bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      max_memory_restart: '500M',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        // Env vars (GEMINI_API_KEY, CONTACT_EMAIL_USER, etc.) are loaded
        // from client/.env.local on the server — do NOT commit that file.
      },
    },
  ],
};
