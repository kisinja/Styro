import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

    const { id,name, imageUrl, category, description, price, stock } = item;

    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:w-[290px] gap-5">
            <Link to={`/product/${id}`}>
                <div className="w-full h-[150px] bg-gray-50 p-3">
                    <img src={imageUrl} className="w-full h-full object-contain" alt={name} />
                </div>
                <div className="flex flex-col h-[180px] justify-between p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-primary/70 font-extrabold uppercase">{category}</h3>

                        {stock === 0 && <span className="text-red-600 rounded-full">Out of Stock</span>}
                    </div>
                    <p className="text-primary/50 tracking-wider text-lg font-semibold">{description}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-primary text-lg font-bold">${price}</p>
                        <button className="shadow text-blue px-4 py-2 flex items-center gap-3 hover:bg-black hover:text-white cursor-pointer" onClick={() => addToCart(item)} disabled={stock === 0}>
                            <MdOutlineAddShoppingCart className="text-2xl" />
                            {/* <span>Add to Cart</span> */}
                        </button>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default ProductCard
