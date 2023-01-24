import { Courses, Modules, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRaw<Courses[]>(
    Prisma.sql`SELECT * FROM courses`
  );

  result.map((item) => console.log(item.name));
}

main();
