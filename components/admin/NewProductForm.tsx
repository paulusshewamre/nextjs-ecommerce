"use client";

import { useState, useEffect } from "react";
import {
  createProductAction,
  updateProductAction,
} from "@/app/actions/admin/products";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";

type Props = {
  categories: { id: string; name: string }[];
  initialData?: any; // product when editing
};

export default function ProductForm({ categories, initialData }: Props) {
  const router = useRouter();
  const isEdit = !!initialData;

  // state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [featured, setFeatured] = useState(false);
  const [images, setImages] = useState<string[]>([""]);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<any>({});

  // ✅ PREFILL (CRITICAL)
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setPrice(initialData.price?.toString() || "");
      setCategoryId(initialData.categoryId || "");
      setFeatured(initialData.featured || false);

      setImages(
        initialData.images?.length
          ? initialData.images.map((img: any) => img.url)
          : [""]
      );
    }
  }, [initialData]);

  // image handlers
  const handleImageChange = (index: number, value: string) => {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  };

  const addImageField = () => setImages([...images, ""]);

  // validation
  function validate() {
    const newErrors: any = {};

    if (!name.trim()) newErrors.name = "Product name is required";
    if (!price || isNaN(Number(price)) || Number(price) <= 0)
      newErrors.price = "Price must be a positive number";
    if (!categoryId) newErrors.categoryId = "Please select a category";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("categoryId", categoryId);

      if (featured) formData.append("featured", "on");

      images
        .filter((img) => img.trim() !== "")
        .forEach((img) => formData.append("images", img));

      if (isEdit) {
        await updateProductAction(initialData.id, formData);
        toast("Product updated", {
          description: `${name} updated successfully`,
        });
      } else {
        await createProductAction(formData);
        toast("Product created", {
          description: `${name} added successfully`,
        });
      }

      router.push("/products");
    } catch (err: any) {
      toast("Error", {
        description: err.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="space-y-6 border rounded-xl p-6 shadow-sm">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">
            {isEdit ? "Edit Product" : "Create Product"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isEdit
              ? "Update your product details"
              : "Add a new product to your store"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Product Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Price ($)</label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Category</label>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.categoryId && (
              <p className="text-sm text-red-500">{errors.categoryId}</p>
            )}
          </div>

          {/* Featured */}
          <div className="flex items-center gap-2">
            <Checkbox
              checked={featured}
              onCheckedChange={(val) => setFeatured(!!val)}
            />
            <span className="text-sm">Featured</span>
          </div>

          {/* Images */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URLs</label>

            {images.map((img, i) => (
              <Input
                key={i}
                value={img}
                onChange={(e) =>
                  handleImageChange(i, e.target.value)
                }
              />
            ))}

            <Button type="button" variant="outline" onClick={addImageField}>
              Add Image
            </Button>
          </div>

          {/* Submit */}
          <Button className="w-full" disabled={loading}>
            {loading
              ? isEdit
                ? "Updating..."
                : "Creating..."
              : isEdit
              ? "Update Product"
              : "Create Product"}
          </Button>
        </form>
      </div>
    </main>
  );
}




// "u\se client";

// import { useState } from "react";
// import { createProductAction } from "@/app/actions/admin/products";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { toast } from "sonner";

// export default function ProductForm({
//   categories,
// }: {
//   categories: { id: string; name: string }[];
// }) {
//   const router = useRouter();

//   // state
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [featured, setFeatured] = useState(false);
//   const [images, setImages] = useState<string[]>([""]);
//   const [loading, setLoading] = useState(false);

//   // validation errors
//   const [errors, setErrors] = useState<any>({});

//   // image handlers
//   const handleImageChange = (index: number, value: string) => {
//     const updated = [...images];
//     updated[index] = value;
//     setImages(updated);
//   };

//   const addImageField = () => setImages([...images, ""]);

//   // validation function
//   function validate() {
//     const newErrors: any = {};

//     if (!name.trim()) newErrors.name = "Product name is required";
//     if (!price || isNaN(Number(price)) || Number(price) <= 0)
//       newErrors.price = "Price must be a positive number";
//     if (!categoryId) newErrors.categoryId = "Please select a category";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }

//   // submit
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const formData = new FormData();

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("categoryId", categoryId);

//       if (featured) formData.append("featured", "on");

//       images
//         .filter((img) => img.trim() !== "")
//         .forEach((img) => formData.append("images", img));

//       await createProductAction(formData);

//       toast("Product created", {
//         description: `${name} added successfully`,
//       });

//       router.push("/products");
//     } catch (err: any) {
//       toast("Error", {
//         description: err.message || "Something went wrong",
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="max-w-2xl mx-auto p-6">
//       <div className="space-y-6 border rounded-xl p-6 shadow-sm">

//         {/* Header */}
//         <div>
//           <h1 className="text-2xl font-semibold">Create Product</h1>
//           <p className="text-sm text-muted-foreground">
//             Add a new product to your store
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Name */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Product Name</label>
//             <Input
//               placeholder="e.g. iPhone 15 Pro"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && (
//               <p className="text-sm text-red-500">{errors.name}</p>
//             )}
//           </div>

//           {/* Description */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Description</label>
//             <Textarea
//               placeholder="Write product description..."
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           {/* Price */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Price ($)</label>
//             <Input
//               type="number"
//               placeholder="e.g. 999"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//             {errors.price && (
//               <p className="text-sm text-red-500">{errors.price}</p>
//             )}
//           </div>

//           {/* Category */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Category</label>
//             <Select value={categoryId} onValueChange={setCategoryId}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Category" />
//               </SelectTrigger>

//               <SelectContent>
//                 {categories.map((cat) => (
//                   <SelectItem key={cat.id} value={cat.id}>
//                     {cat.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {errors.categoryId && (
//               <p className="text-sm text-red-500">{errors.categoryId}</p>
//             )}
//           </div>

//           {/* Featured */}
//           <div className="flex items-center gap-2 pt-2">
//             <Checkbox
//               checked={featured}
//               onCheckedChange={(val) => setFeatured(!!val)}
//             />
//             <span className="text-sm">Mark as Featured</span>
//           </div>

//           {/* Images */}
//           <div className="space-y-2">
//             <label className="text-sm font-medium">Image URLs</label>

//             {images.map((img, i) => (
//               <Input
//                 key={i}
//                 placeholder={`Image URL ${i + 1}`}
//                 value={img}
//                 onChange={(e) =>
//                   handleImageChange(i, e.target.value)
//                 }
//               />
//             ))}

//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={addImageField}
//             >
//               Add Another Image
//             </Button>
//           </div>

//           {/* Submit */}
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={loading}
//           >
//             {loading ? "Creating..." : "Create Product"}
//           </Button>

//         </form>
//       </div>
//     </main>
//   );
// }