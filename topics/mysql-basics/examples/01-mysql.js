const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'app',
  waitForConnections: true,
  connectionLimit: 10,
});

async function findUserByEmail(email) {
  const [rows] = await pool.query(
    'SELECT id, email FROM users WHERE email = ? LIMIT 1', [email]);
  return rows[0];
}

async function tx() {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    await conn.query('UPDATE accounts SET balance = balance - 10 WHERE id = 1');
    await conn.query('UPDATE accounts SET balance = balance + 10 WHERE id = 2');
    await conn.commit();
  } catch (e) { await conn.rollback(); throw e; }
  finally { conn.release(); }
}
