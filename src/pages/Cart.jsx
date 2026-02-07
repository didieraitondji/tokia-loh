import React from 'react'
import SidebarMenu from "../components/SidebarMenu";
import BottomNav from "../components/BottomNav";
import "../index.css";

export default function Cart() {
    return (
        <div className="min-h-screen bg-white">

            <header className="flex items-center p-4 shadow-sm">
                <SidebarMenu />
                <h1 className="ml-4 text-lg font-semibold text-sky-400">
                    TOKIA-LOH
                </h1>
            </header>
            <hr />

            <main className="p-4 overflow-auto">
                <p className="text-sm text-gray-600">
                    Votre panier est vide pour le moment...
                </p>
            </main>

            <BottomNav />
        </div>
    )
}
