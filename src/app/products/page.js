import ProductList from "@/components/product-list";

// create a method
async function fetchAllProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });

  const result = await response.json();

  if (result && result.products && result.products.length)
    return result.products;
}

export default async function Products() {
  const getAllProducts = await fetchAllProducts();

  console.log("=======================================");
  console.log(getAllProducts);
  console.log("=======================================");

  return <ProductList getAllProducts={getAllProducts} />;
}
