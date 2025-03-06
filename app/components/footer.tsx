import React from 'react';
import FbSvg from "~/icons/f1.svg";
import LinkinSvg from "~/icons/Linkin.svg";
import InstagramSvg from "~/icons/Instagram.svg";
import TwitterSvg from "~/icons/Twitter.svg";
import VectorSvg from "~/icons/Vector.svg";



const Footer: React.FC = () => {
    return (
        <footer >

            <section className="bg-black/95 lg:flex gap-25 justify-center place-items-center py-20 px-5">

                <div className="sm:flex gap-25 justify-center space-y-6">
                    <div className="max-w-60 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-200 size-10 rounded-full place-items-center place-content-center"><img src={VectorSvg} alt="" className="size-7" /></div>
                            <p className="text-3xl font-semibold text-white">Gilio</p>
                        </div>
                        <p className="text-gray-400 text-xs">We build readymade websites, mobile
                            applications, and elaborate online
                            business services.</p>

                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <p>Light Mode</p>
                            <div className="bg-primary w-7 h-3.5 rounded-2xl place-content-center p-0.5" >
                                <div className="bg-white size-2 rounded-full"></div>
                            </div>
                            <p>Dark Mode</p>
                        </div>
                    </div>

                    <div className="sm:flex gap-25 space-y-6">
                        <div>
                            <h1 className="text-white text-sm font-semibold mb-5">QUICK LINKS</h1>
                            <div className="text-gray-500 text-xs space-y-2 ">
                                <p>Portfolio</p>
                                <p>About</p>
                                <p>Services</p>
                                <p>Pricing Plans</p>
                                <p>Contact</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white text-sm font-semibold mb-5">SERVICES</h1>
                            <div className="text-gray-500 text-xs space-y-2 ">
                                <p>UI/UX Design</p>
                                <p>Branding</p>
                                <p>Ilustration</p>
                                <p>Design Concept</p>
                                <p>App Design</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white text-sm font-semibold mb-5">PRODUCT</h1>
                            <div className="text-gray-500 text-xs space-y-2 ">
                                <p>Figma</p>
                                <p>Adobe</p>
                                <p>Dribbble</p>
                                <p>Behance</p>
                                <p>Themeforest</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="  lg:grid lg:grid-cols-1 sm:flex sm:gap-4 grid grid-cols-2 gap-2 max-w-75 sm:max-w-150 mt-6 lg:mt-0">
                    <div className="flex items-center gap-3 bg-zinc-900 max-w-35  px-4 py-2 rounded-lg" >
                        <img src={FbSvg} alt="" className="size-4 " />
                        <div className="bg-white/30 w-0.25 h-4"></div>
                        <p className="text-white text-xs">Facebook</p>
                    </div>

                    <div className="flex items-center gap-3 bg-zinc-900 max-w-35 px-4  py-2 rounded-lg" >
                        <img src={LinkinSvg} alt="" className="size-4 " />
                        <div className="bg-white/30 w-0.25 h-4"></div>
                        <p className="text-white text-xs">Linkedin</p>
                    </div>

                    <div className="flex items-center gap-3 bg-zinc-900 max-w-35 px-4 py-2 rounded-lg" >
                        <img src={TwitterSvg} alt="" className="size-4 " />
                        <div className="bg-white/30 w-0.25 h-4"></div>
                        <p className="text-white text-xs">Twitter</p>
                    </div>

                    <div className="flex items-center gap-3 bg-zinc-900 max-w-35 px-4 py-2 rounded-lg" >
                        <img src={InstagramSvg} alt="" className="size-4 " />
                        <div className="bg-white/30 w-0.25 h-4"></div>
                        <p className="text-white text-xs">Instagram</p>
                    </div>
                </div>
            </section>

            <div className='text-center p-6 bg-black/90'>
                <p className='text-white'> &copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;