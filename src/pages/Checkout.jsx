import { useCart } from "../context/CartContext";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const Checkout = () => {
    const { cart, totalPrice } = useCart();
    const [note, setNote] = useState("");

    const handleSendEmail = () => {

        const orderId = `ORD-${Date.now()}`;
        const comment = note ? `Note de commande : ${note}` : "Aucune note fournie";

        const templateParams = {
            order_id: orderId,
            email: "didieraitondji@gmail.com",
            orders: cart.map(item => ({
                name: item.name,
                price: item.price,
                units: item.quantity,
                image: item.image
            })),
            comments: comment,
            cost: {
                shipping: 0,
                tax: 0,
                total: totalPrice
            }
        };

        emailjs.send(
            'service_o84mm3b',
            'template_qfrekbg',
            templateParams,
            'Gsiei7zlUBDpQyJgI'
        )
            .then((response) => {
                alert('Email de confirmation envoyé avec succès!');
                // actualisation de la page
                window.location.reload();
                // redirection vers la page d'accueil après l'envoi de l'email
                window.location.href = "/";
            })
            .catch((error) => {
                console.error('Erreur:', error);
                alert('Erreur lors de l\'envoi de l\'email');
            });
    };

    return (
        <div>
            <Header />
            <main className="p-4 pb-20">

                {cart.length === 0 ? (
                    <div className="grid items-center justify-center h-[60vh]"><br />
                        <img src="/src/assets/logo/logo_1.png" alt="Tokia Loh" className="w-32 h-32" /> <br />
                        <p className="p-4 text-red-500">Votre panier est vide</p>

                        <a href="/" className="bg-sky-400 text-white py-2 px-4 rounded">
                            Choisissez des articles
                        </a>
                    </div>
                ) : (
                    <div className="grid max-w-[600px] mx-auto p-4 border rounded-lg mt-6 bg-white shadow">
                        <h2 className="text-lg font-semibold mb-4">
                            Récapitulatif de commande
                        </h2>

                        {cart.map((item) => (
                            <p key={item.id}>
                                {item.name} — {item.quantity} × {item.price}F
                            </p>
                        ))}

                        <p className="font-bold mt-4">
                            Total : {totalPrice}F
                        </p>

                        
                        <textarea
                            placeholder="Note de commande..."
                            className="w-full border rounded p-2 mt-4"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />

                        <p className="text-sm text-gray-500 mt-2">
                            Paiement à la livraison
                        </p>

                        <button className="w-full bg-sky-400 text-white py-2 mt-4 rounded cursor-pointer"
                            title="Valider votre commande en laissant vos informations dans les commentaires"
                            onClick={handleSendEmail}>
                            Valider la commande
                        </button>
                    </div>
                )}
            </main>
            <BottomNav />
        </div>
    );
};

export default Checkout;
