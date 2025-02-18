// write product card here
// write product card here
import React from "react";
import Button from "../components/button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://tse4.mm.bing.net/th?id=OIP.3V3JVtMbzDurV_qhZjiyPQHaHa&pid=Api&P=0&h=180";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  const handleViewProduct = () => {
    alert(`Viewing details for: ${productName}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg max-w-xs">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{productName}</h3>
      <p className="text-gray-700">{productPrice}</p>
      <div className="mt-4">
        <Button onClick={handleViewProduct} />
      </div>
    </div>
  );
};

export default ProductCard;