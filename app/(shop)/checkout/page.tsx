'use client'
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const quantity = searchParams.get("quantity");

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-6">Checkout Page</h1>
      <p className="text-lg mb-4">
        You are buying <strong>{quantity}</strong> of product <strong>{productId}</strong>
      </p>
      <p className="text-gray-600 mb-8">
        This is a mock banking page. In real integration, you would redirect to Stripe / PayPal / Banking API.
      </p>

      <button
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        onClick={() => alert("Payment simulated!")}
      >
        Simulate Payment
      </button>
    </main>
  );
}