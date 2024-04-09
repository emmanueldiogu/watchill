import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/watchill.svg';
import { BiMenu } from "react-icons/bi";
import searchIcon from '../assets/img/icons/search.png'
import userImg from '../assets/img/icons/account.png'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    console.log(isMenuOpen);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY > 100) ? setIsSticky(true) : setIsSticky(false);
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
        <header className="fixed top-0 left-0 right-0 z-10 w-full py-6 bg-slate-950/40">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-8 lg:grid-cols-12 gap-5 items-center justify-between mx-auto">
                    {/* logo */}
                    <a href="/" className="col-span-3 lg:col-span-4"><img src={logo} alt="logo" /><span className="hidden">Home</span></a>
                    {/* menu */}
                    <nav className="flex items-center justify-self-end lg:justify-self-stretch gap-5 justify-around col-span-4 lg:col-span-7">
                        <form>
                            <button>
                                <img src={searchIcon} alt="" className=" w-6 h-6 md:w-10 md:h-10" />
                            </button>
                            <label htmlFor="search"></label>
                            <input type="text" name="search" id="search" className="hidden" />
                        </form>
                        <div className="text-white lg:hidden">
                            <button onClick={toggleMenu}><BiMenu className="w-6 md:w-10 h-6 md:h-10" /></button>
                        </div>
                        <div className={isMenuOpen ? "lg:flex lg:items-center lg:justify-evenly flex flex-col gap-5 w-full" : "lg:flex lg:items-center lg:justify-evenly hidden gap-5 w-full"}>
                            {
                                navItems.map(({ link, path }, index) => (
                                    <NavLink
                                        key={path}
                                        to={path}
                                        className={({ isActive }) =>
                                            [
                                                "hover:text-main1 font-bold text-clamp-menu", // classes applied in both active and inactive states
                                                isActive ? "active text-main1 hover:text-main2 font-bold" : "text-white",
                                                index === navItems.length - 1 ? "text-main2 hover:text-main1" : ""
                                            ].filter(Boolean).join(' ')
                                        }
                                    >
                                        {link}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </nav>
                    {/* account */}
                    <Link to="" className="col-span-1 justify-self-end  w-8 h-8 md:w-10 md:h-10 rounded-full">
                        <img src={userImg} alt="" className="rounded-full" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar;