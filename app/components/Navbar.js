import { BiShoppingBag } from "react-icons/bi";

const Navbar = ({ cart, onCartClick }) => {
  // show cart quantity with cart icon
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white p-3 md:p-4 mt-4 flex justify-between items-center rounded-lg">
      <a
        href="/"
        className="bg-gradient-to-r from-green-600 via-green-700 to-orange-800 bg-clip-text text-transparent font-bold text-2xl"
      >
        YD Store.
      </a>
      <div className="flex items-center space-x-4">
        {/* icon kartu */}
        <div className="relative">
          <button onClick={onCartClick} className="text-black pr-2">
            <BiShoppingBag size={24} className="inline" />
            {cartQuantity > 0 && (
              <span className="absolute top-[-10px] right-[-4px] bg-orange-700 text-white text-xs px-2 py-1 rounded-full">
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
