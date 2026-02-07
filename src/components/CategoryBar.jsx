import React, { useState } from "react";

const categories = [
    "Tous",
    "Téléphones",
    "Électronique",
    "Ordinateurs",
    "Tablettes",
    "Gaming",
    "Photo",
    "Audio",
    "TV & Audio",
    "Accessoires",
    "Stockage",
    "Réseau",
    "Bureautique",
    "Moniteurs",
    "Composants PC",
    "Mobilier",
    "Sécurité",
];

const CategoryBar = ({ onSelect }) => {
    const [active, setActive] = useState("Tous");

    const handleClick = (category) => {
        setActive(category);
        onSelect(category);
    };

    return (
        <div className="flex gap-3 overflow-x-auto px-4 m-4 py-5 bg-white">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleClick(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full border cursor-pointer ${active === cat
                        ? "bg-violet-500 text-white border-violet-500"
                        : "border-sky-400 text-sky-400"
                        }`}
                    title={"Catégorie " + cat}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryBar;
