import { PrismaClient } from '@prisma/client';

export async function assetTypesSeed(prisma: PrismaClient) {
  await prisma.assetType.createMany({
    data: [
      {
        name: 'Laptop',
      },
      {
        name: 'Mobile',
      },
    ],
  });
}
