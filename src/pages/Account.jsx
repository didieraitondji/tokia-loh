import React from 'react';
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import "../index.css";

const Account = () => {
    return (
        <div>
            <Header />

            <main className="p-4 pb-20">
                <div className="p-4 max-w-[600px] mx-auto border rounded-lg mt-6 bg-white shadow">
                    <h2 className="text-lg font-semibold mb-4">
                        Mon TOKIA-LOH
                    </h2>

                    <input
                        type="text"
                        placeholder="Nom et Prénom"
                        className="w-full border p-2 mb-3"
                    />
                    <input
                        type="text"
                        placeholder="Ville"
                        className="w-full border p-2 mb-3"
                    />
                    <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        className="w-full border p-2 mb-3"
                    />

                    <button className="w-full bg-violet-500 text-white py-2 rounded">
                        Enregistrer
                    </button>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default Account;
