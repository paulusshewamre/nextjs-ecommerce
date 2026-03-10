import { prisma } from "./lib/prisma";

async function main() {
  console.log("Seeding database...");

  // 1️⃣ Create multiple users
  await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@ecom.io" },
      { name: "Bob", email: "bob@ecom.io" },
      { name: "Charlie", email: "charlie@ecom.io" },
    ],
    skipDuplicates: true,
  });

  // Fetch all users to get their UUIDs
  const allUsers = await prisma.user.findMany();
  console.log("Users created:", allUsers.map(u => ({ id: u.id, email: u.email })));

  // 2️⃣ Create products
  await prisma.product.createMany({
    data: [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 45 },
    ],
    skipDuplicates: true,
  });

  const allProducts = await prisma.product.findMany();
  console.log("Products created:", allProducts.map(p => ({ id: p.id, name: p.name })));

  // 3️⃣ Create orders for each user
  for (const user of allUsers) {
    // Assign a random product for each order
    const product = allProducts[Math.floor(Math.random() * allProducts.length)];
    await prisma.order.create({
      data: {
        quantity: 1 + Math.floor(Math.random() * 3), // random 1-3
        userId: user.id, // ✅ UUID
        productId: product.id, // ✅ UUID
      },
    });
  }
  console.log("Orders created for all users");

  // 4️⃣ (Removed session creation for now — no authentication yet)

  // 5️⃣ Fetch all users with orders and products
  const result = await prisma.user.findMany({
    include: {
      orders: {
        include: {
          product: true,
        },
      },
    },
  });

  console.log("Seed result:", JSON.stringify(result, null, 2));
}

main()
  .then(async () => {
    console.log("Seeding completed!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });