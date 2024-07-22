// run: PORT=4000 NODE_ENV=production node env-vars.js
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

console.log(`Starting in ${env} mode on port ${port}`);

// with dotenv (npm i dotenv)
// require('dotenv').config();
// console.log(process.env.DATABASE_URL);

if (!process.env.JWT_SECRET && env === 'production') {
  console.error('JWT_SECRET is required in production');
  process.exit(1);
}
