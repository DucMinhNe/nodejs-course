// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'api',
    script: 'dist/index.js',
    instances: 4,
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '512M',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};

// Usage:
//   pm2 start ecosystem.config.js --env production
//   pm2 logs api
//   pm2 reload api  (zero-downtime restart)
//   pm2 startup     (autostart on boot)
