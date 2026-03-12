import { prisma } from "./lib/prisma"

async function main() {
  console.log("🌱 Seeding database...")

  // Categories
  const categories = await prisma.category.createMany({
    data: [
      { name: "Electronics", slug: "electronics" },
      { name: "Clothing", slug: "clothing" },
      { name: "Home", slug: "home" },
      { name: "Books", slug: "books" },
      { name: "Sports", slug: "sports" },
      { name: "Accessories", slug: "accessories" },
    ],
    skipDuplicates: true,
  })

  const allCategories = await prisma.category.findMany()

  const productNames = [
    "MacBook Pro",
    "Gaming Mouse",
    "Mechanical Keyboard",
    "4K Monitor",
    "Noise Cancelling Headphones",
    "USB-C Hub",
    "Classic Hoodie",
    "Slim Fit Jeans",
    "Running Shoes",
    "Winter Jacket",
    "Baseball Cap",
    "Leather Wallet",
    "Desk Lamp",
    "Office Chair",
    "Coffee Maker",
    "Blender",
    "Cookware Set",
    "Yoga Mat",
    "Dumbbells",
    "Basketball",
    "Football",
    "Smart Watch",
    "Wireless Charger",
    "Bluetooth Speaker",
    "Tablet Stand",
    "Laptop Sleeve",
    "Backpack",
    "Sunglasses",
    "Water Bottle",
    "Travel Mug"
  ]

  for (let i = 0; i < productNames.length; i++) {

    const category =
      allCategories[Math.floor(Math.random() * allCategories.length)]

    const product = await prisma.product.create({
      data: {
        name: productNames[i],
        description: "High quality product built for everyday use.",
        price: Math.floor(Math.random() * 400) + 50,
        featured: i < 5, // first 5 products featured
        categoryId: category.id,
      },
    })

    // add images
    await prisma.productImage.createMany({
      data: [
        {
          url: `/products/product${(i % 10) + 1}.jpg`,
          productId: product.id,
        },
        {
          url: `/products/product${(i % 10) + 1}-2.jpg`,
          productId: product.id,
        },
      ],
    })
  }

  console.log("✅ Database seeded successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })