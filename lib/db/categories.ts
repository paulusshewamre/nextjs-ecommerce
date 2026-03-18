import { prisma } from "@/lib/prisma"

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  })
}



export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: {
      slug,
    },
    include: {
      products: {
        include: {
          images: true,
        },
      },
    },
  })
}