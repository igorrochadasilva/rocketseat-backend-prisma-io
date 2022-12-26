import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const reuslt = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso excelente de ReactJS",
      fk_id_teacher: "d50d5d90-cb63-4e64-b8d7-4ed621cdf80a",
    },
  });

  console.log(reuslt);
}

main();
