import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java",
      duration: 500,
      description: "Curso de Java 17",
      teacher: {
        connect: {
          id: "b5ace3d5-7444-4e0a-b53d-32cce70d92ec",
        },
      },
    },
  });

  console.log(result);
}

main();
