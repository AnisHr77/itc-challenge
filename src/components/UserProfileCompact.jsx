import React from "react";
import Banner from "../assets/pics/banner.jpg";
import Anis from "../assets/pics/Anis.jpg";
import verifie from "../assets/icons/verified.png";
import { LuCalendarDays } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

const UserProfileCompact = ({
                                banner,
                                avatar,
                                name,
                                username,
                                title,
                                joined,
                                category,
                                verified = false,
                            }) => {
    return (
        <div className="w-full max-w-3xl mx-auto text-center">

            <div className="relative w-full h-30 rounded-xl  bg-gray-200">

                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover object-[top_28%_left_55%]"
                />

                {verified && (
                    <div className="absolute top-4 left-2 w-5 h-5  rounded-full flex items-center justify-center shadow-md">

                            <img
                                src={verifie}
                                alt="verified"
                                title={'Verified'}

                            />


                    </div>
                )}

                <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 ">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="w-24 h-25 rounded-full object-cover border-4 border-white shadow-md object-[top_88%_left_55%]"
                        />

                        <span className="absolute bottom-2 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-[#BBBBBB] font-semibold text-xs">@{username}</p>
            </div>

            <p className="mt-1 text-xs font-semibold ">{title}</p>

            <div className="flex justify-center items-center gap-8 mt-2 text-neutral-500 text-sm ">
                <div className="flex items-center gap-1">
                    <LuCalendarDays/>
                    <p className={'text-[9px]'}>{joined}</p>
                </div>

                <div className="flex items-center gap-1">
                    < RiGraduationCapLine />
                    <p className={'text-[9px]'}>{category}</p>
                </div>
            </div>
        </div>
    );
};


const ProfilePage = () => {
    return (
        <div className="p-0 relative bottom-4 ">
            <UserProfileCompact
                banner={Banner}
                avatar={Anis}
                name="Hadj Ramdane Anis"
                username="Hadj Ramdane Anis"
                title="FullStack Developer"
                joined="Joined September 2025"
                category="Computer Science"
                verified={true}
            />
        </div>
    );
};

export default ProfilePage;
