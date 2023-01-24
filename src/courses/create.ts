import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de next",
      description: "Curso excelente de next Jose Camarda",
    },
  });

  console.log(result);
}

main();
