import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seeder untuk Level
  const levels = ['JUNIOR', 'MID', 'SENIOR'];
  for (const level of levels) {
    await prisma.level.create({
      data: { name: level },
    });
  }

  // Seeder untuk Department
  const departments = ['HR', 'IT', 'MARKETING'];
  for (const department of departments) {
    await prisma.department.create({
      data: { name: department },
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
