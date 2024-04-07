import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/watchill.svg'
import searchIcon from '../assets/img/icons/search.png'
import userImg from '../assets/img/icons/account.png'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            (Window.scrollY > 100) ? setIsSticky(true) : setIsSticky(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    // nav items array
    const navItems = [
        { link: "Movies", path: "/" },
        { link: "Series", path: "series" },
        { link: "Shows", path: "shows" },
        { link: "Be a Chiller", path: "be-a-chiller" },
    ];

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 z-10 w-full border-b border-gray-500 py-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-5 items-center justify-between mx-auto">
                    {/* logo */}
                    <a href="/" className="col-span-4 h-9"><img src={logo} alt="logo" /><span className="hidden">Home</span></a>
                    {/* menu */}
                    <nav className="md:flex md:items-center md:justify-around gap-5 hidden col-span-7">
                        <form>
                            <button>
                                <img src={searchIcon} alt="" className="w-10 h-10" />
                            </button>
                            <label htmlFor="search"></label>
                            <input type="text" name="search" id="search" className="hidden" />
                        </form>
                        {
                            navItems.map(({ link, path }) => <NavLink key={path} to={path} className={({ isActive }) => [
                                isActive ? "active text-main1 hover:text-main2 font-bold" : 'text-white hover:text-main1 font-semibold',
                            ].join(" ")
                            }>{link}</NavLink>)
                        }
                    </nav>
                    {/* account */}
                    <Link to="" className="col-span-1 justify-self-end">
                        <img src={userImg} alt="" className="w-10 h-10" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar;