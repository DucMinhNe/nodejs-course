const { z } = require('zod');
const express = require('express');
const app = express();
app.use(express.json());

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().int().min(13).optional(),
});

app.post('/signup', (req, res) => {
  const parsed = SignupSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten() });
  }
  res.json({ ok: true, user: parsed.data });
});

app.listen(3000);
