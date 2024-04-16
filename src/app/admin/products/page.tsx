import { Button } from "@/components/ui/button";
import { Pageheader } from "../_components/PageHeader";
import Link from "next/link";

export default function AdminProductPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <Pageheader>Products</Pageheader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
    </>
  );
}
