import { useEffect, useState } from "react";
import items from "../assets/categories.json";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(items);
    }, [categories]);

    return (
        <div className="mt-8 pages mb-12">

            <h2 className="text-center text-3xl font-light py-8 text-primary/90">From our Categories... </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    )
}

export default Categories