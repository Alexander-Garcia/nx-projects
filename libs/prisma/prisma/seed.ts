import { prisma } from '../src';

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Jimi Hendrix', email: 'fake@blah.com' },
      { name: 'Jimmy Page', email: 'fake2@blah.com' },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
