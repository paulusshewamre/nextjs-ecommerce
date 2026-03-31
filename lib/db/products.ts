import { prisma } from "@/lib/prisma"

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
      category: true,
    },
  })
}


export async function getFeaturedProducts() {
  return prisma.product.findMany({
    where: {
      featured: true,
    },
    include: {
      images: true,
    },
    take: 4,
  })
}


export async function getAllProducts() {
  return prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}


type ProductFilter = {
  category?: string
  sort?: string
}

export async function getFilteredProducts(filter: ProductFilter) {
  return prisma.product.findMany({
    where: {
      category: filter.category
        ? { slug: filter.category }
        : undefined,
    },
    include: {
      images: true,
      category: true,
    },
    orderBy:
      filter.sort === "price-asc"
        ? { price: "asc" }
        : filter.sort === "price-desc"
        ? { price: "desc" }
        : { createdAt: "desc" },
  })
}


export async function createProduct(data: {
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  images: string[];
}) {
  return prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
      images: {
        create: data.images.map((url) => ({ url })),
      },
    },
  });
}