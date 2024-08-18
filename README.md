# 📚 nodejs-course

> A full Node.js course — from JavaScript fundamentals to Node core, Express,
> databases, and production practices.
>
> Built from the material I taught as an IT lecturer at **Cao Thắng Technical
> College** (Trường Cao đẳng Kỹ thuật Cao Thắng).

![license](https://img.shields.io/badge/license-MIT-green.svg) ![node](https://img.shields.io/badge/node-18+-339933.svg) ![lessons](https://img.shields.io/badge/lessons-35-blue.svg) ![topics](https://img.shields.io/badge/topics-78-orange.svg) ![status](https://img.shields.io/badge/status-active-brightgreen.svg)

---

## How this course is organised

- **`lessons/`** — the structured curriculum for beginners. Start here and go
  in order. Each lesson covers one concept with notes, a runnable example, and
  an exercise.
- **`topics/`** — deeper dives into specific areas (JS internals, Node modules,
  Express, databases, DevOps). Reference these once you're comfortable with the
  basics.

## Curriculum (lessons/)

### Part 1 — Getting started
1. [Setting up Node.js](./lessons/01-setup-node/)
2. [Your first program](./lessons/02-first-program/)
3. [Running code & the REPL](./lessons/03-running-and-repl/)
4. [Comments](./lessons/04-comments/)
5. [Syntax: statements & semicolons](./lessons/05-syntax-and-semicolons/)
6. [Naming conventions](./lessons/06-naming-conventions/)

### Part 2 — Values & types
7. [Variables: let, const, var](./lessons/07-variables/)
8. [Data types](./lessons/08-data-types/)
9. [Strings](./lessons/09-strings/)
10. [Numbers](./lessons/10-numbers/)
11. [Booleans & truthiness](./lessons/11-booleans/)
12. [null vs undefined](./lessons/12-null-undefined/)
13. [Type conversion](./lessons/13-type-conversion/)

### Part 3 — Operators & control flow
14. [Arithmetic operators](./lessons/14-arithmetic-operators/)
15. [Comparison operators](./lessons/15-comparison-operators/)
16. [Logical operators](./lessons/16-logical-operators/)
17. [if / else](./lessons/17-if-else/)
18. [switch](./lessons/18-switch/)
19. [Ternary operator](./lessons/19-ternary/)
20. [while & do-while](./lessons/20-while-loops/)
21. [for loops](./lessons/21-for-loops/)

### Part 4 — Functions & scope
22. [Functions](./lessons/22-functions/)
23. [Function expressions vs declarations](./lessons/23-function-expressions/)
24. [Arrow functions](./lessons/24-arrow-functions/)
25. [Function parameters](./lessons/25-function-parameters/)
26. [Scope](./lessons/26-scope/)

### Part 5 — Data structures
27. [Arrays](./lessons/27-arrays/)
28. [Iterating arrays](./lessons/28-array-iteration/)
29. [Objects](./lessons/29-objects/)

### Part 6 — Async & Node basics
30. [Callbacks](./lessons/30-callbacks/)
31. [Input & output](./lessons/31-input-output/)
32. [Modules: require & exports](./lessons/32-modules-require/)
33. [Command-line arguments](./lessons/33-cli-args/)
34. [Environment variables](./lessons/34-env-vars/)
35. [Error handling basics](./lessons/35-error-handling-basics/)

## Deep-dive topics (topics/)

JavaScript internals (hoisting, closures, prototypes, the event loop…), Node
core modules (streams, fs, crypto, worker threads…), Express (middleware, auth,
validation…), databases (Postgres, Mongo, Redis…), and production concerns
(Docker, CI, profiling, security). See the [`topics/`](./topics/) directory.

## Running examples

```bash
node lessons/01-setup-node/examples/check-version.js
```

## About

Authored and maintained by **Lê Đức Minh**, IT lecturer at Cao Thắng Technical
College. These materials were used to teach Node.js and backend web development
to my students. Feedback and pull requests are welcome.

## License

MIT © Lê Đức Minh
