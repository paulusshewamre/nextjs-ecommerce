'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/components/my/cart-context";
import { toast } from "sonner"

type ProductImage = {
  id: string;
  url: string;
};

type ProductType = {
  id: string;
  name: string;
  description?: string;
  price: number;
  images: ProductImage[];
  category: { name: string; slug: string };
};

export function ProductView({ product }: { product: ProductType }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleBuyNow = () => {
    // Redirect to mock checkout page with productId and quantity
    window.location.href = `/checkout?productId=${product.id}&quantity=${quantity}`;
  };

  const { addToCart } = useCart();

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span className="hover:underline cursor-pointer">{product.category.name}</span> / {product.name}
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column: Images */}
        <div>
          <div className="rounded-xl overflow-hidden mb-4">
            <Image
              src={product.images[selectedImage]?.url ?? "/placeholder.png"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <div
                key={img.id}
                className={`border rounded-lg cursor-pointer p-1 ${
                  selectedImage === idx ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                <Image
                  src={img.url}
                  alt={`${product.name} ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-2xl font-semibold text-gray-800">${product.price.toFixed(2)}</p>

          <p className="text-gray-600">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                onClick={decrease}
                className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increase}
                className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images[0]?.url ?? "/placeholder.png",
                  quantity,
                })

                toast("Added to cart", {
                  description: `${product.name} added successfully`,
                });
                }
              }
            >
              Add to Cart
            </Button>

            <Button
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}