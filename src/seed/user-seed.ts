import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

export async function userSeed(prisma: PrismaClient) {
  await prisma.user.create({
    data: {
      email: faker.internet.email(),
    },
  });
}
