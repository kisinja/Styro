import { useEffect, useState } from 'react';
import items from '../assets/products.json';
import ProductCard from './ProductCard';
import Loader from './Loader';

const LatestArrivals = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts(items);
        setLoading(false);
    }, [products]);


    return (
        <section className="mt-16 bg-[#fafafa]">

            <h2 className="text-center text-3xl font-light py-8 text-primary/90">New Arrivals</h2>

            {loading && <Loader text="Fetching latest arrivals..." />}

            <div className=" md:grid grid-cols-4 gap-8 lg:px-[60px] px-4 py-12 md:grid-cols-3">
                
                {products.map((item, index) => (
                    <ProductCard item={item} key={index} />
                ))}
            </div>
        </section>
    )
}

export default LatestArrivals