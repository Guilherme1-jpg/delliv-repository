const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  // Crie um usuário de exemplo
  const hashedPassword = await bcrypt.hash('1234', 10); // Substitua 'suaSenhaAqui' pela senha desejada

  const user = await prisma.UserAccess.create({
    data: {
      name: 'Guilherme',
      email: 'admin2s@example.com',
      password: hashedPassword,
      role: ['Admin', 'admin'],
    },
  });

  // Crie um pedido de exemplo associado ao usuário
  await prisma.Order.create({
    data: {
      name: 'Exemplo de Pedido',
      address: 'Rua Exemplo, 123',
      status: 'Em separacao',
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
