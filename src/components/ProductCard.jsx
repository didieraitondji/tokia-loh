import React, { useState } from 'react'
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onAddToCart }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const { addToCart } = useCart();

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    const handleAddToCart = () => {
        addToCart(product);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    return (
        <div className="border rounded-lg p-3 shadow-sm bg-white">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
                onClick={() => setShowDescription(!showDescription)}
            />

            <h3 className="mt-2 font-semibold text-sm">
                {product.name}
            </h3>

            <div className="flex items-center gap-2 mt-1">
                <span className="text-violet-500 font-bold">
                    {product.price}F
                </span>
                <span className="line-through text-gray-400 text-sm">
                    {product.oldPrice}F
                </span>
                <span className="text-xs text-green-600">
                    -{discount}%
                </span>
            </div>

            {showDescription && (
                <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                </p>
            )}

            <button
                onClick={handleAddToCart}
                className="mt-3 w-full bg-sky-500 text-white py-2 rounded cursor-pointer"
                title={"Ajouter " + product.name + " au panier"}
            >
                Ajouter au panier
            </button>

            {showNotification && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
                    Produit ajouté au panier
                </div>
            )}
        </div>
    )
}