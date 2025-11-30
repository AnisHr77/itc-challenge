import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import RankBadge from "../assets/icons/RANK_BADGES.png";
import NotificationBell from "../assets/icons/Notification_Bell.png";
import Streak_Fire from "../assets/icons/Streak_Fire.png";
import Anis from "../assets/pics/Anis.jpg";
import { CiSearch } from "react-icons/ci";

const SIDEBAR_WIDTH = "w-54";
const RIGHT_PANEL_WIDTH = "w-82";
const HEADER_HEIGHT = "h-20";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const iconData = [
        {
            id: 'rank',
            image: RankBadge,
            alt: "RANK_BADGES",
            value: "5",
            color: "text-[#8c4500]",
            title: "Rank Badge",
            description: "Top performer ranking - You're in the top 5% of active users"
        },
        {
            id: 'streak',
            image: Streak_Fire,
            alt: "Streak_Fire",
            value: "5",
            color: "text-[#fb5130]",
            title: "Streak Fire",
            description: "5-day activity streak - Keep going to maintain your progress"
        },
        {
            id: 'notification',
            image: NotificationBell,
            alt: "NotificationBell",
            value: "5",
            color: "text-[#f6a000]",
            title: "Notifications",
            description: "5 unread notifications - Updates and important alerts"
        }
    ];

    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const IconWithTooltip = ({ item }) => (
        <div
            className="relative flex justify-between items-center"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center gap-1">
                <img
                    className='w-5 h-5 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110'
                    src={item.image}
                    alt={item.alt}
                />
                <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
            </div>


            {hoveredItem === item.id && (
                <div className="absolute top-full left-1/4 transform -translate-x-1/2 mt-2 z-50">
                    <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 w-28 shadow-lg">
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-gray-200 leading-tight">{item.description}</div>

                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            <header className={` flex w-full bg-white border-gray-200 ${HEADER_HEIGHT}`}>
                <div className={`${SIDEBAR_WIDTH}  border-r-[1px]   border-neutral-100 flex items-center px-6 mr-2  max-lg:flex-1 max-lg:border-r-0`}>
                    <a href="./" className="max-lg:flex-1">
                        <svg width="130" height="30" viewBox="0 0 215 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2001_135)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.3208 12.9645C9.80142 -1.8026 16.7454 -4.33223 25.9134 7.32626C39.8884 2.27304 44.456 8.05348 36.1295 20.3186C45.2858 31.9626 41.1648 38.0635 26.8509 33.9851C18.5348 46.235 11.421 44.2268 10.9008 29.4413C-3.39552 25.368 -3.67186 18.0243 10.3208 12.9645ZM19.1721 24.9252C18.6996 24.6348 18.079 24.7804 17.7862 25.2497C17.4937 25.7193 17.6401 26.3357 18.1127 26.6266C19.9307 27.7452 22.4088 27.6077 24.4419 26.8726C26.471 26.1389 28.4512 24.6656 29.0681 22.6443C29.2291 22.1158 28.9286 21.5577 28.3967 21.3973C27.8647 21.2371 27.303 21.5358 27.1415 22.0643C26.7844 23.234 25.485 24.3662 23.7531 24.9925C22.0255 25.6171 20.2594 25.5943 19.1721 24.9252Z" fill="#F7D047"/>
                                <path d="M61.3117 10.8991L58.0985 12.9561C57.2723 11.3596 56.3849 10.6842 55.1302 10.6842C53.9673 10.6842 53.0799 11.5132 53.0799 12.6491C53.0799 16.3947 62.2298 15.9035 62.2298 22.2895C62.2298 26.4956 59.4756 28.9825 55.375 28.9825C51.4886 28.9825 48.6732 26.25 48 22.9649L51.2132 20.9386C51.8558 23.2412 53.1411 25.2982 55.4668 25.2982C57.1193 25.2982 58.2515 24.4693 58.2515 22.5044C58.2515 18.943 49.2853 19.6491 49.2853 12.8333C49.2853 9.57895 51.764 7 55.1302 7C57.9761 7 60.1489 8.41228 61.3117 10.8991Z" fill="#F7D047"/>
                                <path d="M73.6126 25.3596L74.5001 28.4298C73.6432 28.8289 72.817 28.9825 71.9907 28.9825C68.5021 28.9825 66.3294 27.1096 66.3294 23.2719V16.5175H63.9425V13.2632H66.3294V9.39474L70.124 7V13.2632H74.194V16.5175H70.124V23.2105C70.124 25.114 70.8585 25.7281 72.1437 25.7281C72.664 25.7281 73.0924 25.636 73.6126 25.3596Z" fill="#F7D047"/>
                                <path d="M80.3591 18.0526L77.1459 17.3158C77.6355 14.7675 79.8695 13.0175 83.0214 13.0175C86.6936 13.0175 89.509 14.5526 89.509 19.4956V28.7368H86.3876L85.9898 26.7719C84.9187 28.0921 83.4498 28.9825 81.2465 28.9825C78.6148 28.9825 76.5645 27.3553 76.5645 24.2851C76.5645 21.2149 79.2574 19.2193 83.1438 19.2193H85.7144V18.5439C85.7144 16.8246 84.4291 16.2719 83.0214 16.2719C81.9504 16.2719 80.8487 16.6096 80.3591 18.0526ZM80.5427 24.2237C80.5427 24.9605 81.0629 25.7281 82.134 25.7281C83.8783 25.7281 85.7144 24.5307 85.7144 22.5351V22.2281H83.1744C81.5526 22.2281 80.5427 22.8421 80.5427 24.2237Z" fill="#F7D047"/>
                                <path d="M96.7922 28.7368H92.9976V13.2632H96.7922V15.7807C97.8938 13.9693 99.6075 13.0175 101.352 13.0175C102.025 13.0175 102.606 13.1404 103.219 13.3246L102.515 16.8553C102.056 16.5789 101.566 16.4254 100.923 16.4254C98.7201 16.4254 96.7922 18.2368 96.7922 23.2412V28.7368Z" fill="#F7D047"/>
                                <path d="M105.693 7H109.488V28.7368H105.693V7Z" fill="#F7D047"/>
                                <path d="M111.434 13.2632H115.259L118.839 22.9649L122.205 13.2632H126L118.044 35H114.371L117.034 27.7544L111.434 13.2632Z" fill="#F7D047"/>
                            </g>
                            <path d="M147.928 21C147.928 25.636 145.601 28.9825 141.071 28.9825C139.204 28.9825 137.306 27.9693 136.571 26.8333V28.7368H134V7H136.571V15.1053C137.092 14.2149 139.112 13.0175 141.071 13.0175C145.601 13.0175 147.928 16.364 147.928 21ZM145.295 21C145.295 17.6842 143.55 15.3509 140.826 15.3509C138.01 15.3509 136.357 17.6842 136.357 21C136.357 24.3158 138.01 26.6491 140.826 26.6491C143.55 26.6491 145.295 24.3158 145.295 21Z" fill="#A8A8A8"/>
                            <path d="M160.255 13.2632H162.949L155.296 35H152.664L155.113 28.0921L149.695 13.2632H152.511L156.429 24.4386L160.255 13.2632Z" fill="#A8A8A8"/>
                            <path d="M174.169 7.24561H176.863V28.7368H174.169V7.24561Z" fill="#A8A8A8"/>
                            <path d="M180.294 9.82456V7.24561H195.355V9.82456H189.171V28.7368H186.478V9.82456H180.294Z" fill="#A8A8A8"/>
                            <path d="M212.398 21.7061L215 22.4737C214.051 26.25 211.082 28.9825 206.613 28.9825C201.623 28.9825 196.94 25.3289 196.94 17.9912C196.94 10.6535 201.623 7 206.613 7C211.082 7 214.051 9.73246 215 13.5088L212.398 14.2763C211.419 11.2675 209.429 9.57895 206.613 9.57895C202.664 9.57895 199.725 12.4342 199.725 17.9912C199.725 23.5482 202.664 26.4035 206.613 26.4035C209.429 26.4035 211.419 24.7149 212.398 21.7061Z" fill="#A8A8A8"/>
                            <defs>
                                <clipPath id="clip0_2001_135">
                                    <rect width="126" height="42" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <button
                        className="lg:hidden ml-auto p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <div className="mt-2 flex-1 flex items-center px-4 max-lg:hidden">
                    <div className="w-full flex items-center bg-[#f5f5f5] rounded-lg px-3 h-9 border border-gray-100">
                        <svg className="font-boldtext-[#707070] mr-2 cursor-pointer " width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8752 18.8752L14.5322 14.5322M14.5322 14.5322C15.2751 13.7893 15.8644 12.9074 16.2664 11.9368C16.6685 10.9661 16.8754 9.92581 16.8754 8.87521C16.8754 7.8246 16.6685 6.78429 16.2664 5.81366C15.8644 4.84303 15.2751 3.96109 14.5322 3.21821C13.7893 2.47532 12.9074 1.88603 11.9368 1.48398C10.9661 1.08193 9.92581 0.875 8.87521 0.875C7.8246 0.875 6.78429 1.08193 5.81366 1.48398C4.84303 1.88603 3.96109 2.47532 3.21821 3.21821C1.71788 4.71854 0.875 6.75342 0.875 8.87521C0.875 10.997 1.71788 13.0319 3.21821 14.5322C4.71854 16.0325 6.75342 16.8754 8.87521 16.8754C10.997 16.8754 13.0319 16.0325 14.5322 14.5322Z" stroke="#707070" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <input
                            type="text"
                            placeholder="Search member..."
                            className="flex-1 outline-none text-sm placeholder-[#707070] bg-transparent"
                        />
                    </div>
                </div>

                <div className={`${RIGHT_PANEL_WIDTH} flex items-center justify-between px-8 space-x-6 max-lg:hidden`}>
                    <div className="text-gray-700 font-medium text-xs flex gap-3">
                        <div className='flex gap-1'>
                            <a href="./profile" className='flex gap-1' title={'Profile'}>
                                <img className='h-6 w-6 rounded-full object-cover object-[top_80%_left_50%]' src={Anis} alt="Anis" />
                                <span className='text-xs relative top-1' >Hadj Ramdane Anis</span>
                            </a>
                        </div>

                        {iconData.map((item) => (
                            <IconWithTooltip key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </header>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
                    <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center bg-gray-100/70 rounded-lg px-4 h-9 border border-gray-100">
                            <Search className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search member..."
                                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <img className='h-8 w-8 rounded-full object-cover object-[top_80%_left_50%]' src={Anis} alt="Anis" />
                            <div>
                                <div className="text-sm font-medium text-gray-900">Hadj Ramdane Anis</div>
                            </div>
                        </div>

                        {iconData.map((item) => (
                            <div key={item.id} className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-2">
                                    <img className='w-5 h-5 rounded-full' src={item.image} alt={item.alt} title={item.title} />
                                    <span className="text-sm text-gray-700">{item.title.split(' ')[0]}</span>
                                </div>
                                <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;