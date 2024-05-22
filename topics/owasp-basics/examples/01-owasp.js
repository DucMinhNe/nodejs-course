// 1. Injection (NoSQL)
// bad : await User.findOne({ email: req.body.email })
//        where req.body.email might be { $ne: null }
// good: enforce schema with zod; coerce to string

// 2. SSRF
// bad : axios.get(req.query.url)
// good: maintain a whitelist of allowed hosts; resolve DNS,
//       reject private IP ranges (10.0.0.0/8, 169.254.x.x, etc.)

// 3. XXE / unsafe parsing
// don't accept XML if you can avoid it; if you must, use a parser
// with entity expansion disabled

// 4. Open redirect
// bad : res.redirect(req.query.next)
// good: validate `next` starts with '/'

// 5. CSRF on cookie-auth
//   use SameSite=Lax + a CSRF token (e.g. csurf, double-submit cookie)
