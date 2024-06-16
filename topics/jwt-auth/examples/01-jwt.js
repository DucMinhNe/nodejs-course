const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET = process.env.JWT_SECRET;

async function login(email, password) {
  const user = await db.users.findOne({ email });
  if (!user) throw new Error('bad credentials');
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error('bad credentials');
  const token = jwt.sign({ sub: user.id }, SECRET, { expiresIn: '1d' });
  return { token };
}

function requireJWT(req, _res, next) {
  const [, token] = (req.headers.authorization || '').split(' ');
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch (e) {
    next(e);
  }
}
