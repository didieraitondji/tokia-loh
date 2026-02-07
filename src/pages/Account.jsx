const Account = () => {
    return (
        <div className="p-4">
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
    );
};

export default Account;
