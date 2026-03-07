import { prisma } from "./lib/prisma";

async function main() {
  // Create a new user with an order
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@ecom.io",
      orders: {
        create: {
          quantity: 2,
          product: {
            create: {
              name: "Laptop",
              price: 1200,
            },
          },
        },
      },
    },
    include: {
      orders: {
        include: {
          product: true,
        },
      },
    },
  });
  console.log("Created user with order:", JSON.stringify(user, null, 2));

  // Fetch all users with their orders and products
  const allUsers = await prisma.user.findMany({
    include: {
      orders: {
        include: {
          product: true,
        },
      },
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });