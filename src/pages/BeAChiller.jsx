import { useState } from "react";
import wachillLogo from "../assets/watchill.svg";
import { Navigate } from "react-router-dom";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";


function BeAChiller() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
    }

    return (
        <main className={" w-full h-dvh overflow-y-auto"} style={{ background: 'url(/signin-lg.jpg) lightgray center/cover no-repeat' }}
        >
            <div className="bg-gradient-to-r from-black to-black/0 h-full overflow-y-auto w-full">
                <div className="container mx-auto h-full">
                    <div className="flex flex-col lg:flex-row justify-start gap-5 lg:justify-between items-center h-full">
                        <div className="flex justify-center items-end w-full lg:w-1/2 p-5">
                            <img src={wachillLogo} alt="watchill logo" className="w-full lg:w-1/2" />
                        </div>
                        <div className="flex justify-center lg:w-1/2">
                            <div className="flex flex-col lg:bg-black/60 lg:backdrop-blur-[15px] lg:shadow-input rounded-[10px] lg:px-12 lg:py-20">
                                <h1 className="text-white font-semibold leading-100 mb-7 text-clamp-h2">Sign In</h1>
                                <form className="mb-7">
                                    <div className="mb-5">
                                        <label htmlFor="email" className="inline-block text-white font-medium text-sm leading-100 mb-2">Email or Phone</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="w-full px-5 py-[0.69rem] text-base border border-[#737373] rounded-md text-main2 shadow-inner focus:outline-none focus:border-main1 bg-[#303030]"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password" className="inline-block text-white font-medium text-sm leading-100 mb-2">Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-5 py-[0.69rem] text-base border border-[#737373] rounded-md text-main2 shadow-inner focus:outline-none focus:border-main1 bg-[#303030]"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <button
                                            onClick={handleLogin}
                                            type="submit"
                                            className="w-full py-4 text-base leading-100 font-medium text-white transition border rounded-md cursor-pointer border-none bg-main1 hover:bg-opacity-90"
                                        >
                                            Sign In
                                            {isLoggedIn && <Navigate to="/" />}
                                        </button>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="remember" id="remember" className="border border-[#737373] rounded-md text-main2 shadow-inner focus:outline-none focus:border-main1 bg-[#303030]" /> <label htmlFor="remember" className="text-white font-light text-sm leading-100 italic">Remember me</label>
                                    </div>
                                </form>
                                <div className="flex justify-between lg:justify-center lg:flex-col mb-7">
                                    <div className="lg:w-full mb-5">
                                        <a
                                            onClick={handleLogin}
                                            className="flex gap-3 p-5 cursor-pointer items-center justify-center rounded-full lg:rounded-md bg-[#4064AC] text-white hover:bg-opacity-90"
                                        >
                                            <FaFacebook size={24} /> <span className="hidden lg:inline">&nbsp; Continue with Facebook</span>
                                        </a>
                                    </div>
                                    <div className="lg:w-full mb-5">
                                        <a
                                            onClick={handleLogin}
                                            className="flex gap-3 p-5 cursor-pointer items-center justify-center rounded-full lg:rounded-md bg-white text-black/50 hover:bg-opacity-90"
                                        >
                                            <FaGoogle size={24} /> <span className="hidden lg:inline">&nbsp; Continue with Google</span>
                                        </a>
                                    </div>
                                    <div className="lg:w-full mb-5">
                                        <a
                                            onClick={handleLogin}
                                            className="flex gap-3 p-5 cursor-pointer items-center justify-center rounded-full lg:rounded-md bg-white text-black hover:bg-opacity-90"
                                        >
                                            <FaApple size={24} /> <span className="hidden lg:inline">&nbsp; Continue with Google</span>
                                        </a>
                                    </div>
                                </div>
                                <p className="text-white text-sm leading-100 italic">
                                    Don&apos;t have an account?
                                    <a
                                        onClick={handleLogin}
                                        className="text-main2 hover:underline"
                                    >
                                        &nbsp; Sign Up &nbsp;
                                    </a>
                                    now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BeAChiller;