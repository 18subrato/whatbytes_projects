'use client'

import useProduct from "@/context/ProductContext";

function Items({ image, id, title, price }) {
    const { AddToCart, setFleg } = useProduct();

    const handleAdd = () => {
        AddToCart({ id });
        setFleg(true);
    };

    return (
        <div className="border p-3">
            <img src={image} className="w-full h-[200px] object-contain" alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
            <button onClick={handleAdd} className="mt-2 border p-2">Add to Cart</button>
        </div>
    );
}

export default Items;
