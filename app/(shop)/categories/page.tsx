import { CategoryGrid } from "@/components/my/category-grid"
import { Navbar } from "@/components/my/nav-bar"
import { getCategories } from "@/lib/db/categories"

export default async function CategoriesPage() {
  const categories = await getCategories()
  return (
    <main>
        <Navbar />
        <CategoryGrid categories={categories}/>
    </main>
  )
}