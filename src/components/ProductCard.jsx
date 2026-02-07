import React, { useState } from 'react'

export default function ProductCard({ product, onAddToCart }) {
    const [showDescription, setShowDescription] = useState(false);

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    return (
        <div className="border rounded-lg p-3 shadow-sm bg-white">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
                onClick={() => setShowDescription(!showDescription)}
            />

            {/* Nom sous l’image */}
            <h3 className="mt-2 font-semibold text-sm">
                {product.name}
            </h3>

            {/* Prix */}
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

            {/* Description au clic */}
            {showDescription && (
                <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                </p>
            )}

            {/* Ajouter au panier */}
            <button
                onClick={() => onAddToCart(product)}
                className="mt-3 w-full bg-sky-400 text-white py-2 rounded cursor-pointer"
                title="ajouter au panier"
            >
                Ajouter au panier
            </button>
        </div>
    )
}
