import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice } = useCart();



    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
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
                        <h2 className=" text-2xl font-semibold mb-4">Panier</h2>

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between mb-3"
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {item.price}F x {item.quantity}
                                    </p>
                                </div>
                                <p className="font-semibold">
                                    {item.price * item.quantity}F
                                </p>
                            </div>
                        ))}

                        <hr className="my-4" />

                        <p className="font-bold">
                            Total : {totalPrice}F
                        </p>

                        <Link
                            to="/checkout"
                            className="block mt-4 text-center bg-violet-500 text-white py-2 rounded"
                        >
                            Commander
                        </Link>
                    </div>
                )}
            </main>

            <BottomNav />
        </div>
    );
};

export default Cart;
