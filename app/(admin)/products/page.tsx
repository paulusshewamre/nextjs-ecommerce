import Link from "next/link";
import { getAllProducts } from "@/lib/db/products";
import { Button } from "@/components/ui/button";
import DeleteProductButton from "@/components/admin/DeleteProductButton";

export default async function AdminProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>

        <Link href="/products/new">
          <Button>Add Product</Button>
        </Link>
      </div>

      <div className="border rounded-lg divide-y">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center p-4"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-muted-foreground">
                ${product.price}
              </p>
            </div>

            <div className="flex gap-2">
                <Link href={`/products/${product.id}`}>
                    <Button size="sm" variant="outline">
                    Edit
                    </Button>
                </Link>

                <DeleteProductButton id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}