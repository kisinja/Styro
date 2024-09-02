import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars as FaBar } from 'react-icons/fa';
import { CiShoppingCart } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { useCart } from '../context/CartContext';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { cartQuantity } = useCart();


    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ];

    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-[3%] shadow-sm bg-black sticky top-0 w-full z-50'>
            <nav className='flex justify-between items-center py-6 bg-black/70 px-2'>

                {/* Nav items for large devices */}
                <ul className='hidden md:flex gap-12'>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className='text-xl text-white tracking-wider'>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'active'
                                        : ''
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <a href="/" className='flex items-center gap-2 text-3xl text-white font-bold' id='logo'>
                    <span>Sty<span className='text-blue'>ro</span> </span>
                </a>

                <div className='flex gap-12 items-center'>
                    <HiMagnifyingGlass className='text-white text-2xl cursor-pointer w-12 h-12 rounded-full border-2 p-2 border-blue' />
                    <div className='relative'>
                        <CiShoppingCart className='text-white text-2xl cursor-pointer w-12 h-12 rounded-full border-2 p-2 border-blue' />
                        <div className="absolute w-6 h-6 bg-blue text-gray-50 rounded-full flex justify-center items-center top-0 right-0 -mt-2 -mr-2">
                            <span className="text-xs font-light">
                                {cartQuantity()}
                            </span>
                        </div>
                    </div>
                    <CiUser className='text-white text-2xl cursor-pointer w-12 h-12 rounded-full border-2 p-2 border-blue' />
                </div>

                {/* mobile menu */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-white' /> : <FaBar className='w-5 h-5 text-white' />
                        }
                    </button>
                </div>

                {/* Nav items for mobile devices */}
                < div className={`px-4 bg-black py-5 rounded-sm  ${isMenuOpen ? "" : "hidden"}`}>
                    <ul className=''>
                        {navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-white first:text-white py-1'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={handleMenuToggler}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </ div >
            </nav>
        </header >
    )
}

export default Navbar