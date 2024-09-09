import { PrismaClient } from '@prisma/client';
import { userSeed } from './seed/user-seed';
import { assetTypesSeed } from './seed/assets-seed';

const prisma = new PrismaClient();

async function main() {
  try {
    await userSeed(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  try {
    await assetTypesSeed(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  await prisma.$disconnect();
}

main();
