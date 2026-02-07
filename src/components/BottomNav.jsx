import React from 'react'
import { NavLink } from "react-router-dom";
//import { Home, Grid, ShoppingCart, User } from "react-icons/fi";
import { FiHome, FiGrid, FiShoppingCart, FiUser } from "react-icons/fi";

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm">
            <div className="flex justify-around items-center h-14">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"
                        }`
                    }
                >
                    <FiHome size={26} />
                    <span>Accueil</span>
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"
                        }`
                    }
                >
                    <FiGrid size={26} />
                    <span>Catégories</span>
                </NavLink>

                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"
                        }`
                    }
                >
                    <FiShoppingCart size={26} />
                    <span>Panier</span>
                </NavLink>

                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-violet-500" : "text-gray-500"
                        }`
                    }
                >
                    <FiUser size={26} />
                    <span>Mon TOKIA-LOH</span>
                </NavLink>

            </div>
        </nav>
    );
}
