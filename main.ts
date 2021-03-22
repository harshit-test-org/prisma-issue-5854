import { PrismaClient } from "@prisma/client";
import { Chance } from "chance";

const chance = new Chance();

async function main() {
  const prisma = new PrismaClient();

  const triggerDate = chance.birthday({
    year: chance.year({ min: 1930, max: 1970 }),
  });

  console.log("date which triggered the panic", triggerDate);

  const data = await prisma.test.create({
    data: {
      dateField: triggerDate,
      updatedAt: "1949-01-12T00:00:00.000Z",
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
