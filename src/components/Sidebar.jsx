import React, { useEffect,useState } from 'react';

import { HelpCircle, ChevronRight, X } from 'lucide-react';

import { MdHomeFilled } from "react-icons/md";

import { FaUsers } from "react-icons/fa";

import { MdOutlineEvent } from "react-icons/md";

import { FaRegUser } from "react-icons/fa";

import { TiFlashOutline } from "react-icons/ti";

import { TbBubble } from "react-icons/tb";

import { GoShieldCheck } from "react-icons/go";

import { BsFacebook } from "react-icons/bs";

import { FaTiktok } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";

import { FaDiscord } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

import { LiaCopyrightSolid } from "react-icons/lia";

import { FaChevronRight } from "react-icons/fa";
import { NavLink as RouterNavLink } from "react-router-dom";

const primaryNav = [

    { name: 'Home', icon: MdHomeFilled, path: '/home' },

    { name: 'Teams', icon: FaUsers, path: '/teams' },

    { name: 'Events', icon: MdOutlineEvent, path: '/events' },

    { name: 'Profile', icon: FaRegUser, path: '/profile' },

    { name: 'Quests', icon: TiFlashOutline, path: '/quests' },

];



const secondaryNav = [

    { name: 'Q&A', icon: TbBubble, path: '/qa' },

    { name: 'Help Center', icon: HelpCircle, path: '/help' },

    { name: 'Policies', icon: GoShieldCheck, path: '/policies' },

];



const socialLinks = [

    { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@itcblida' },

    { name: 'Facebook', icon: BsFacebook, url: 'https://www.facebook.com/ITCBlida' },

    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@itcblida?si=pXl_Vmu_K3XrVQxf&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnbalbYVChuESe9C-zdnul-Obsufkf_3J9u_oqaUUUxDRG7Ia8OzTVg8Kp3ZU_aem_LzBL8X_hBstthLk1rSfONA' },

    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/it_community/' },

    { name: 'Discord', icon: FaDiscord, url: 'https://discord.com/invite/c4jDJJ2UUj?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnBLewV_ehkRr058HGxPzZIFXP1n0rOeSe0ibA_HQ7njBe7X4QrjQ4V1YCzEs_aem_XDJAwvpPwvumYnKRPSO2bw' },

];



const NavLink = ({ item, isActive, onClick }) => {
    const Icon = item.icon;

    return (
        <RouterNavLink
            to={item.path}
            onClick={onClick}
            className={({ isActive }) => `
                group
                flex items-center space-x-2 py-[6px] text-xs font-bold
                transition-colors duration-200
                ${isActive ? 'text-gray-900 bg-gray-100' : 'text-[#707070] hover:text-gray-900'}
            `}
        >
            <Icon className="w-4 h-4" />
            <span
                className={`
                    relative
                    after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-gray-900
                    after:transition-all after:duration-300
                    ${isActive ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'}
                `}
            >
                {item.name}
            </span>
        </RouterNavLink>
    );
};


export default function Sidebar() {



    const [activePath, setActivePath] = useState('/home');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;

        if (isLeftSwipe) {
            setIsMobileMenuOpen(false);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    useEffect(() => {
        const handleTouchStartGlobal = (e) => {
            if (window.innerWidth - e.touches[0].clientX <= 50) {
                setTouchStart(e.touches[0].clientX);
            }
        };

        const handleTouchEndGlobal = () => {
            if (!touchStart) return;

            const distance = touchEnd - touchStart;
            const isRightSwipe = distance > 50;

            if (isRightSwipe && touchStart <= 50) {
                setIsMobileMenuOpen(true);
            }

            setTouchStart(null);
            setTouchEnd(null);
        };

        document.addEventListener('touchstart', handleTouchStartGlobal);
        document.addEventListener('touchend', handleTouchEndGlobal);

        return () => {
            document.removeEventListener('touchstart', handleTouchStartGlobal);
            document.removeEventListener('touchend', handleTouchEndGlobal);
        };
    }, [touchStart, touchEnd]);

    useEffect(() => {
        const sidebar = document.querySelector('.sidebar-mobile');
        if (sidebar) {
            sidebar.addEventListener('touchstart', handleTouchStart);
            sidebar.addEventListener('touchmove', handleTouchMove);
            sidebar.addEventListener('touchend', handleTouchEnd);

            return () => {
                sidebar.removeEventListener('touchstart', handleTouchStart);
                sidebar.removeEventListener('touchmove', handleTouchMove);
                sidebar.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, [touchStart, touchEnd]);




    const handleNavClick = (path, e) => {
        setActivePath(path);
        console.log(`Navigating to: ${path}`);
        setIsMobileMenuOpen(false);
    };


    const handleLogOut = () => {

        console.log('User logged out.');

        setIsMobileMenuOpen(false);

    };



    return (

        <>

            <div className="flex lg:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    onTouchStart={(e) => {
                        e.stopPropagation();
                        setTouchStart(e.targetTouches[0].clientX);
                    }}
                    onTouchMove={(e) => {
                        e.stopPropagation();
                        setTouchEnd(e.targetTouches[0].clientX);
                    }}
                    onTouchEnd={(e) => {
                        e.stopPropagation();
                        if (!touchStart || !touchEnd) return;

                        const distance = touchEnd - touchStart;
                        const isRightSwipe = distance > 30;

                        if (isRightSwipe) {
                            setIsMobileMenuOpen(true);
                        }

                        setTouchStart(null);
                        setTouchEnd(null);
                    }}
                    className="
            fixed top-1/2 left-0 -translate-y-1/2 z-50
            w-5 h-14 opacity-60
            flex items-center justify-center
            bg-neutral-900 hover:bg-neutral-800
            clip-path-triangle
            rounded-r-lg
            transition-colors
            cursor-pointer
        "
                >
                    <FaChevronRight className="relative right-1 text-white text-sm" />
                </button>
            </div>



            {isMobileMenuOpen && (

                <div

                    className="lg:hidden fixed inset-0  bg-opacity-50 z-40"

                    onClick={() => setIsMobileMenuOpen(false)}

                />

            )}



            <div className={`

lg:hidden fixed top-0 left-0 h-full w-64 bg-white border-none  z-50

border-l-4 border-emerald-500 rounded-r-xs transition-transform duration-300 ease-in-out

${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}

overflow-y-auto

`}>

                <div className="flex flex-col w-full h-full">

                    <div className="flex justify-end p-4 border-b  border-gray-200">

                        <button

                            onClick={() => setIsMobileMenuOpen(false)}

                            className="p-1 rounded-md hover:bg-gray-100 transition-colors"

                        >

                            <X className="w-5 h-5" />

                        </button>

                    </div>



                    <div className="flex flex-col justify-between flex-grow px-6 py-0">

                        <nav className="space-y-1">

                            <div className="space-y-1 px-1 py-4 text-sm  border-b-[2px] justify-center w-[90%] border-neutral-200 ">

                                {primaryNav.map((item) => (

                                    <NavLink

                                        key={item.path}

                                        item={item}

                                        isActive={activePath === item.path}

                                        onClick={(e) => handleNavClick(item.path, e)}

                                    />

                                ))}

                            </div>



                            <div className="mt-40 py-4 w-full space-y-1 border-t-2 text-sm  border-neutral-200 ">

                                {secondaryNav.map((item) => (

                                    <NavLink

                                        key={item.path}

                                        item={item}

                                        isActive={activePath === item.path}

                                        onClick={(e) => handleNavClick(item.path, e)}

                                    />

                                ))}

                            </div>

                        </nav>



                        <div className="mt-3">

                            <button

                                onClick={handleLogOut}

                                className="w-full flex items-center justify-center text-[#707070] p-1 mb-6 text-sm font-semibold border border-gray-400 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"

                            >

                                Log Out

                            </button>



                            <div className="flex flex-col items-center w-full">

                                <div className="flex space-x-3 mb-4">

                                    {socialLinks.map((social) => {

                                        const Icon = social.icon;

                                        return (

                                            <a

                                                key={social.name}

                                                href={social.url}

                                                aria-label={social.name}

                                                title={social.name}

                                                className="flex items-center border border-neutral-500 justify-center w-6 h-6 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"

                                                target="_blank"

                                                rel="noopener noreferrer"

                                            >

                                                <Icon className="w-4 h-4 text-neutral-500" />

                                            </a>

                                        );

                                    })}

                                </div>



                                <div className="text-center w-full text-sm text-[#707070]">

                                    <div className="flex items-center mx-auto justify-start gap-1 text-[12px] mb-3 font-semibold hover:text-neutral-700">

                                        <a href="mailto:itc.blide@gmail.com" className="flex gap-1">

                                            <IoMdMail className="w-4 h-4" />

                                            <span>itc.blide@gmail.com</span>

                                        </a>

                                    </div>



                                    <div className="flex items-center mx-auto font-semibold justify-start gap-1 text-[10px] mb-2">

                                        <LiaCopyrightSolid className="w-3 h-3" />

                                        <span>{new Date().getFullYear()} Starly. All rights reserved.</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="hidden lg:flex overflow-y-auto bg-white overflow-x-auto">

                <div className="flex flex-col w-54 bg-white   h-full  rounded-r-xs">


                    <div className="flex flex-col justify-between flex-grow px-6 py-0  ">
                        <div className="absolute bg-neutral-100 top-[48%] left-54 h-[82%] w-px  "></div>

                        <nav className="space-y-1">

                            <div className="px-1 py-8 space-y-2 border-b-[2px] text-sm justify-center w-[90%] border-neutral-200  ">

                                {primaryNav.map((item) => (

                                    <NavLink

                                        key={item.path}

                                        item={item}

                                        isActive={activePath === item.path}

                                        onClick={(e) => handleNavClick(item.path, e)}

                                    />

                                ))}

                            </div>



                            <div className="mt-52 px-1 text-sm  justify-center w-[90%] border-neutral-200 py-4 space-y-1 border-t-2  ">

                                {secondaryNav.map((item) => (

                                    <NavLink

                                        key={item.path}

                                        item={item}

                                        isActive={activePath === item.path}

                                        onClick={(e) => handleNavClick(item.path, e)}

                                    />

                                ))}

                            </div>

                        </nav>



                        <div className="mt-3">

                            <button

                                onClick={handleLogOut}

                                className="w-full flex items-center justify-center text-[#707070] p-1 mb-6 text-sm font-semibold border border-gray-400 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"

                            >

                                Log Out

                            </button>



                            <div className="flex flex-col items-center w-full">

                                <div className="flex space-x-3 mb-4">

                                    {socialLinks.map((social) => {

                                        const Icon = social.icon;

                                        return (

                                            <a

                                                key={social.name}

                                                href={social.url}

                                                aria-label={social.name}

                                                title={social.name}

                                                className="flex items-center border  border-neutral-500 justify-center w-6 h-6 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"

                                                target="_blank"

                                                rel="noopener noreferrer"

                                            >

                                                <Icon className="w-4 h-4 text-neutral-500" />

                                            </a>

                                        );

                                    })}

                                </div>



                                <div className="text-center w-full text-sm text-[#707070]">

                                    <div className="flex items-center mx-auto justify-start gap-1 text-[12px] mb-3 font-semibold hover:text-neutral-700">

                                        <a href="mailto:itc.blide@gmail.com" className="flex gap-1">

                                            <IoMdMail className="w-4 h-4" />

                                            <span>itc.blide@gmail.com</span>

                                        </a>

                                    </div>



                                    <div className="flex items-center font-semibold mx-auto justify-start gap-1 text-[10px] mb-2">

                                        <LiaCopyrightSolid className="w-3 h-3" />

                                        <span>{new Date().getFullYear()} Starly. All rights reserved.</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}