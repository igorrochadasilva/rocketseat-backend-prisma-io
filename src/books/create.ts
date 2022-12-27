import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      author_id: "69e15d4e-5784-4f89-9e38-18054a96d852",
    },
  });

  console.log(result);
}

main();
