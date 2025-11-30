import React from "react";
import Banner from "../assets/pics/banner.jpg";
import Anis from "../assets/pics/Anis.jpg";
import UserProfileCompact from "../components/UserProfileCompact";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const ProfilePage = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/AnisHr77",
            color: "hover:text-gray-800",
            bgColor: "hover:bg-gray-100"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/anis-hadj-ramdane-65b676389",
            color: "hover:text-blue-600",
            bgColor: "hover:bg-blue-50"
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/a_n_is__hr/",
            color: "hover:text-pink-600",
            bgColor: "hover:bg-pink-50"
        },
        {
            name: "Discord",
            icon: FaDiscord,
            url: "https://discordapp.com/users/710263307386486854",
            color: "hover:text-indigo-600",
            bgColor: "hover:bg-indigo-50"
        }
    ];

    return (
        <div className="min-h-screen  ">
            <div className="  p-8 border border-neutral-200 shadow-sm  bg-gray-50 overflow-hidden">
                <UserProfileCompact
                    banner={Banner}
                    avatar={Anis}
                    name="Anis Hadj Ramdane"
                    username="anishr"
                    title="Full Stack Developer & UI/UX Designer"
                    joined="Joined September 2025"
                    category="Computer Science"
                    verified={true}
                />

                <div className="px-8 py-6 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Hello I am Anis Hadj Ramdane, a 20-year-old Algerian Student with a strong and diverse skill set
                        in full-stack development and UI/UX design. Passionate about creating efficient, user-friendly
                        applications and seamless digital experiences.
                    </p>
                </div>

                <div className="px-8 py-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center p-4 rounded-lg border border-gray-200 transition-all duration-200 ${social.bgColor} group`}
                                    aria-label={social.name}
                                >
                                    <IconComponent
                                        className={`w-6 h-6 text-gray-500 transition-colors duration-200 ${social.color} group-hover:scale-110`}
                                    />
                                    <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                        {social.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React.js", "Node.js", "UI/UX Design", "JavaScript",
                            "TypeScript", "MongoDB", "Express.js", "Figma",
                            "Responsive Design", "REST APIs", "Git", "Tailwind CSS"
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                        Always learning, always building • Open to collaborations and new opportunities
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;