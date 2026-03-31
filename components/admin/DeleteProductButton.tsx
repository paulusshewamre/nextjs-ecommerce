"use client";

import { Button } from "@/components/ui/button";
import { deleteProductAction } from "@/app/actions/admin/products";
import { toast } from "sonner";
import { useTransition } from "react";

export default function DeleteProductButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    startTransition(async () => {
      try {
        await deleteProductAction(id);

        toast("Product deleted");
      } catch (err) {
        toast("Error deleting product");
      }
    });
  };

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={handleDelete}
      disabled={pending}
    >
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
}