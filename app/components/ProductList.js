import { products } from "../data/products";

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain rounded bg-gray-200"
          />
          <h2 className="text-lg font-semibold mt-3 text-slate-700 uppercase">
            {product.name}
          </h2>
          <p className="text-gray-700">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 py-2 bg-green-400 px-4 hover:bg-green-600 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
