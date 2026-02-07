import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const SidebarMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Bouton menu */}
            <button
                onClick={() => setOpen(true)}
                className="p-3 text-violet-600 cursor-pointer"
                title="Ouvrir le menu"
            >
                <FiMenu size={28} />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-[#1a14dc4d] z-40"
                    onClick={() => setOpen(false)}
                />
            )}
            

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold">
                        <span className="text-sky-400">T</span>
                        <span className="text-violet-600">L</span>
                    </h2>
                    <button onClick={() => setOpen(false)} className=" cursor-pointer" title="Fermer la sidebar">
                        <FiX size={22} />
                    </button>
                </div>

                {/* Menu items */}
                <nav className="flex flex-col p-4 space-y-4">
                    <Link to="/" className="text-gray-700 hover:text-sky-400">
                        Accueil
                    </Link>
                    <Link to="/categories" className="text-gray-700 hover:text-sky-400">
                        Catégories
                    </Link>
                    <Link to="/cart" className="text-gray-700 hover:text-sky-400">
                        Panier
                    </Link>
                    <Link to="/account" className="text-gray-700 hover:text-sky-400">
                        Mon TOKIA-LOH
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default SidebarMenu;
