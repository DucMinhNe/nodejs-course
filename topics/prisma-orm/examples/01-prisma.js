// schema.prisma
//
// model User {
//   id    Int    @id @default(autoincrement())
//   email String @unique
//   posts Post[]
// }
//
// model Post {
//   id       Int    @id @default(autoincrement())
//   title    String
//   author   User   @relation(fields: [authorId], references: [id])
//   authorId Int
// }

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function recentPosts() {
  return prisma.post.findMany({
    take: 10,
    orderBy: { id: 'desc' },
    include: { author: { select: { email: true } } },
  });
}
