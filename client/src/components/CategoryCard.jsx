
const CategoryCard = ({ category }) => {


    return (
        <div className={`md:grid grid-cols-2 gap-8 h-[350px] py-8 px-12 cursor-pointer`} style={{ background: `linear-gradient(rgba(0,0,0,.8), #668fbd6a),url(${category.img})`, backgroundPosition: `${category.alignment}`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} title={`Shop ${category.name}`}>
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-5xl font-bold text-gray-100">{category.name}</h2>
                <p className="text-2xl text-gray-400 font-semibold mt-4">{category.description}</p>
                <button className="bg-black px-6 py-2 mt-4 hover:bg-white hover:text-black transition-all text-white focus:bg-white focus:ring-4 focus:ring-blue focus:outline-none font-bold">Shop Now</button>
            </div>
        </div>
    )
}

export default CategoryCard
