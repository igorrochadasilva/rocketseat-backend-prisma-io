import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      courses: {
        create: {
          course: {
            connect: {
              id: "31629ef6-3bf6-4662-ba4c-db1656c340c0",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
