"use client";

import { useCart } from "@/components/my/cart-context";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  // Total price
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/shop">
          <Button>Go Shopping</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4 gap-4"
          >
            {/* Product Image */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Checkout */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-4 mt-6">
        <div className="text-lg font-bold">
          Total: ${totalPrice.toFixed(2)}
        </div>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <Button
            variant="outline"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
          <Link href={`/checkout`}>
            <Button>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}