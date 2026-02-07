import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiShoppingBag } from 'react-icons/fi'

export default function NotFound() {
    return (
        <div className="min-h-screen  from-violet-50 to-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* Icône ou Illustration */}
                <div className="mb-8">
                    <div className="text-9xl font-bold text-violet-500 mb-4">
                        404
                    </div>
                    <div className="text-6xl mb-4">🛍️</div>
                </div>

                {/* Titre */}
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                    Page introuvable
                </h1>

                {/* Message */}
                <p className="text-gray-600 mb-8">
                    Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-600 transition"
                    >
                        <FiHome size={20} />
                        Retour à l'accueil
                    </Link>

                    <Link
                        to="/categories"
                        className="flex items-center justify-center gap-2 bg-sky-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-500 transition"
                    >
                        <FiShoppingBag size={20} />
                        Voir les produits
                    </Link>
                </div>

                {/* Suggestions */}
                <div className="mt-12 text-left bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-800 mb-3">
                        Que souhaitez-vous faire ?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <Link to="/" className="text-violet-500 hover:underline">
                                → Explorer les nouveautés
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories" className="text-violet-500 hover:underline">
                                → Parcourir les catégories
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="text-violet-500 hover:underline">
                                → Voir mon panier
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}