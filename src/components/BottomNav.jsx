import React from 'react'
import { NavLink } from "react-router-dom";
import { FiHome, FiGrid, FiShoppingCart, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function BottomNav() {
    const { cart } = useCart();

    const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm">
            <div className="flex justify-around items-center h-14">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"}`
                    }
                >
                    <FiHome size={26} />
                    <span>Accueil</span>
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"}`
                    }
                >
                    <FiGrid size={26} />
                    <span>Catégories</span>
                </NavLink>

                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"} relative`
                    }
                >
                    <div className="relative">
                        <FiShoppingCart size={26} />
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                {itemCount > 9 ? '9+' : itemCount}
                            </span>
                        )}
                    </div>
                    <span>Panier</span>
                </NavLink>

                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"}`
                    }
                >
                    <FiUser size={26} />
                    <span>Mon TOKIA-LOH</span>
                </NavLink>

            </div>
        </nav>
    );
}