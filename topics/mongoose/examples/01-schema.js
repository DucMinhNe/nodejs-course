const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  const u = await User.create({ email: 'a@b.com', passwordHash: 'x' });
  console.log(u);
}

main();
