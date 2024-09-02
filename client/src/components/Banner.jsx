import myImg from '../assets/banner.png';
import tie from '../assets/tie.png';

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-6 bg-blue'>
            <div className="flex sm:h-[95vh] md:h-[80vh] md:flex-row items-center">
                <div className='w-full flex flex-col gap-5 items-start relative md:gap-3'>
                    <h3 className="text-xl text-gray-200 font-light">URBAN EDGE</h3>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-200 z-30">Jackets for the <br /> Modern Man</h1>
                    <img src={tie} alt="" className="absolute w-[150px] top-6 md:right-[150px] right-5 z-20" />
                    <button>
                        <a href="#products" className="bg-black px-6 py-2 mt-4 hover:bg-white hover:text-black transition-all text-white text-lg">Discover Now</a>
                    </button>
                </div>
                <div className='w-full'>
                    <img src={myImg} className='w-full object-contain' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner