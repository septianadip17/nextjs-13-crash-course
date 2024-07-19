"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "product 1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "product 2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "product 3",
  },
];

export default function ProductList({ getAllProducts }) {
  const router = useRouter();
  console.log(getAllProducts, "getAllProducts");

  return (
    <ul>
      {getAllProducts && getAllProducts.length ? (
        getAllProducts.map((productItem) => (
          <Link href={`/products/${productItem.id}`}>
            <li  key={productItem.id}>{productItem.title}</li>
          </Link>
        ))
      ) : (
        <h1>No products</h1>
      )}
    </ul>
  );
}
