import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/NewProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ FIX

  if (!id) return notFound(); // safety check

  const product = await prisma.product.findUnique({
    where: { id },
    include: { images: true },
  });

  if (!product) return notFound();

  const categories = await prisma.category.findMany();

  return (
    <ProductForm
      categories={categories}
      initialData={product}
    />
  );
}