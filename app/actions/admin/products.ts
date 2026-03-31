"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createProductAction(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryId = formData.get("categoryId") as string;
  const featured = formData.get("featured") === "on"; // checkbox
  const images = formData.getAll("images") as string[]; // array of image URLs

  if (!name || !price || !categoryId) {
    throw new Error("Missing required fields");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      featured,
      categoryId,
      images: {
        create: images.map((url) => ({ url })),
      },
    },
  });
}



export async function updateProductAction(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryId = formData.get("categoryId") as string;
  const featured = formData.get("featured") === "on";
  const images = formData.getAll("images") as string[];

  await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      price,
      categoryId,
      featured,
      images: {
        deleteMany: {}, // remove old images
        create: images
          .filter((url) => url)
          .map((url) => ({ url })),
      },
    },
  });

  redirect("/admin/products");
}

export async function deleteProductAction(id: string) {
  await prisma.productImage.deleteMany({
    where: { productId: id },
    });

    await prisma.product.delete({
    where: { id },
    });
}