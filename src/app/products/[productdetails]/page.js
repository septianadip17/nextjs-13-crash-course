async function fetchProductDetails(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const result = await response.json();
  return result;
}

export default async function ProductDetails({ params }) {
  const { productdetails } = params;
  const getCurrentProductDetails = await fetchProductDetails(productdetails);
  console.log(getCurrentProductDetails);
  return <div>
    <h1>{getCurrentProductDetails?.title}</h1>
    <p>{getCurrentProductDetails?.description}</p>
    <p>{getCurrentProductDetails?.price}</p>
  </div>
}
