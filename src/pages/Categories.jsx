import React from 'react'
import SidebarMenu from "../components/SidebarMenu";
import BottomNav from "../components/BottomNav";
import "../index.css";

export default function Categories() {
    return (
        <div className="min-h-screen bg-white">

            <header className="flex items-center p-4 shadow-sm">
                <SidebarMenu />
                <h1 className="ml-4 text-lg font-semibold text-sky-400">
                    TOKIA-LOH
                </h1>
            </header>
            <hr />

            <main className="p-4 overflow-auto pb-20">
                <p className="text-sm text-gray-600">
                    Catégories de produits à venir...
                </p>
            </main>

            <BottomNav />
        </div>
    )
}
