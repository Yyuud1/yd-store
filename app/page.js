"use client";

import { useEffect, useState } from "react";
import CartPanel from "./components/CartPanel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // on add/remove cart show toast
  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage);
      setToastMessage(null);
    }
  }, [toastMessage]);

  // update quantity in cart
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setToastMessage(`${product.name} Ditambahkan ✅`);
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setToastMessage("Produk Dihapus");
  };

  // total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // cart open close
  const toggleCartPanel = () => {
    setCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="max-w-6xl m-auto w-[90%]">
      <Navbar cart={cart} onCartClick={toggleCartPanel} />
      <Hero />
      <div>
        <h1 className="text-3xl text-slate-700 font-bold py-4">Products</h1>
        <ProductList addToCart={addToCart} />
      </div>
      {isCartOpen && (
        <CartPanel
          cart={cart}
          total={total}
          removeFromCart={removeFromCart}
          closeCart={closeCart}
          updateQuantity={updateQuantity}
        />
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
      <p className="text-center py-8">&#169; Yuds-Store - 2025</p>
    </div>
  );
}
