import React, { useState } from "react";
import SidebarMenu from "../components/SidebarMenu";
import CategoryBar from "../components/CategoryBar";
import BottomNav from "../components/BottomNav";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../index.css";


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const sortedProducts = [...products].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const filteredProducts =
        selectedCategory === "Tous"
            ? sortedProducts
            : sortedProducts.filter(
                (p) => p.category === selectedCategory
            );

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find(p => p.id === product.id);

            if (existing) {
                return prevCart.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className="min-h-screen bg-white">

            <header className="flex items-center p-4 shadow-sm">
                <SidebarMenu />
                <h1 className="ml-4 text-lg font-semibold text-sky-400">
                    TOKIA-LOH
                </h1>
            </header>
            <hr />

            <div>
                <CategoryBar onSelect={setSelectedCategory} />
            </div>

            <main className="p-4 overflow-auto">
                <p className="text-sm text-gray-600">
                    Catégorie sélectionnée :{" "}
                    <span className="font-semibold text-sky-500">
                        {selectedCategory}
                    </span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 sm:m-6 md:m-8 mt-6 sm:mt-8 md:mt-10">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>

            </main>

            <BottomNav />
        </div>
    );
};

export default Home;
