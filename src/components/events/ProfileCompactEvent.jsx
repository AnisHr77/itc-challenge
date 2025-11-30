import React from "react";
import Banner from "../../assets/pics/banner.jpg";
import Anis from "../../assets/pics/Anis.jpg";
import verifie from "../../assets/icons/verified.png";

const ProfileCompactEvent = ({
                                 banner,
                                 avatar,
                                 name,
                                 username,
                                 verified = false,
                                 online = true,
                             }) => {
    return (
        <div className="w-full max-w-3xl mx-auto">

            <div className="relative justify-center  w-full h-32 rounded-xl overflow-hidden bg-gray-200">
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>


                <div className="absolute  inset-0 gap-3 flex items-center justify-start px-2">

                    <div className="relative">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="w-19 h-19 mt-2 rounded-full border-4 border-white object-cover shadow-lg flex-shrink-0"
                        />

                        {online && (
                            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                    </div>

                    <div className="text-start text-white drop-shadow-md ">
                        <div className="flex items-center flex justify-start gap-1">
                            <h2 className="text-xl font-bold whitespace-nowrap">{name}</h2>


                        </div>
                        <p className="font-sans text-xs opacity-70">@{username}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

const ProfilePageEvent = () => {
    return (
        <div className="p-0 relative bottom-4">
            <ProfileCompactEvent
                banner={Banner}
                avatar={Anis}
                name="Anis Hadj Ramdane"
                username="hadjramdaneanis"
                verified={true}
                online={true}
            />
        </div>
    );
};

export default ProfilePageEvent;
