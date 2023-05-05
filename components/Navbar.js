import Image from "next/image"
import { useState } from "react";

export default function Navbar() {

    const [navbar, setNavbar] = useState();
    const [featuresOpen, setFeaturesOpen] = useState();
    const [companyOpen, setCompanyOpen] = useState();

    return (
        <nav className="p-5 xl:p-2">
            <div className="flex justify-between items-center">
                <Image className="lg:hidden" src="/logo.svg" width="80" height="50" alt="logo-image" />
                <Image onClick={() => setNavbar(!navbar)} className="cursor-pointer lg:hidden" src="/icon-menu.svg" width="30" height="30" alt="logo-image" />
            </div>

            {/* navbar menu mobile */}
            <div className={`bg-[#FAFAFA] space-y-5 p-5 h-full absolute right-0 top-0 duration-300 ${navbar ? "w-3/5" : "hidden"}`}>
                <div>
                    <Image onClick={() => setNavbar(!navbar)} className="cursor-pointer absolute right-5" src="/icon-close-menu.svg" width="30" height="30" alt="logo-image" />
                </div>

                <ul className="text-[#696969] space-y-3 pt-10">

                    <li onClick={() => setFeaturesOpen((open) => !open)}>

                        <div className="flex items-center cursor-pointer hover:text-[#141414]">
                            Features
                            <div className="pl-3">
                                {!featuresOpen ? (
                                    <Image src="/icon-arrow-down.svg" width="10" height="10" alt="arrow-down-image" />
                                ) : (
                                    <Image src="/icon-arrow-up.svg" width="10" height="10" alt="arrow-up-image" />
                                )}
                            </div>

                        </div>

                        {featuresOpen && (
                            <div className="space-y-3 p-5">
                                <li className="flex items-center space-x-2 cursor-pointer">
                                    <Image src="/icon-todo.svg" width="15" height="15" alt="todo-image" />
                                    <li>Todo List</li>
                                </li>
                                <li className="flex items-center space-x-2 cursor-pointer">
                                    <Image src="/icon-calendar.svg" width="15" height="15" alt="todo-image" />
                                    <li>Calendar</li>
                                </li>
                                <li className="flex items-center space-x-2 cursor-pointer">
                                    <Image src="/icon-reminders.svg" width="15" height="15" alt="todo-image" />
                                    <li>Reminders</li>
                                </li>
                                <li className="flex items-center space-x-2 cursor-pointer">
                                    <Image src="/icon-planning.svg" width="15" height="15" alt="todo-image" />
                                    <li>Planning</li>
                                </li>
                            </div>
                        )}
                    </li>

                    <li onClick={() => setCompanyOpen((open) => !open)}>
                        <div className="flex items-center cursor-pointer hover:text-[#141414]">
                            Company
                            <div className="pl-3">
                                {!companyOpen ? (
                                    <Image src="/icon-arrow-down.svg" width="10" height="10" alt="logo-image" />
                                ) : (
                                    <Image src="/icon-arrow-up.svg" width="10" height="10" alt="logo-image" />
                                )}
                            </div>
                        </div>

                        {companyOpen && (
                            <div className="space-y-3 p-5">
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                            </div>
                        )}
                    </li>

                    <li className="cursor-pointer hover:text-[#141414]">Careers</li>
                    <li className="cursor-pointer hover:text-[#141414]">About</li>
                </ul>

                <div className="text-[#696969] space-y-3 flex flex-col">
                    <button className="cursor-pointer hover:text-[#141414]">Login</button>
                    <button className="border-2 border-[#696969] rounded-xl p-1 hover:bg-[#696969] hover:text-[#FAFAFA]">Register</button>
                </div>

            </div>

            {/* Navbar desktop */}
            <div className="hidden lg:px-10 lg:pt-5 lg:pb-10 lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center space-x-20">
                    <Image className="hidden lg:inline-block" src="/logo.svg" width="100" height="50" alt="logo-image" />

                    <ul className="text-[#696969] flex space-x-8">

                        <li onClick={() => setFeaturesOpen((prev) => !prev)}>

                            <div className="flex items-center cursor-pointer hover:text-[#141414]">
                                Features
                                <div className="pl-1">
                                    {!featuresOpen ? (
                                        <Image src="/icon-arrow-down.svg" width="10" height="10" alt="arrow-down-image" />
                                    ) : (
                                        <Image src="/icon-arrow-up.svg" width="10" height="10" alt="arrow-up-image" />
                                    )}
                                </div>

                            </div>

                            {featuresOpen && (
                                <div className="space-y-3 p-5 absolute left-40 bg-[#FAFAFA] rounded-xl drop-shadow-xl">
                                    <li className="flex items-center space-x-2 cursor-pointer">
                                        <Image src="/icon-todo.svg" width="15" height="15" alt="todo-image" />
                                        <li>Todo List</li>
                                    </li>
                                    <li className="flex items-center space-x-2 cursor-pointer">
                                        <Image src="/icon-calendar.svg" width="15" height="15" alt="todo-image" />
                                        <li>Calendar</li>
                                    </li>
                                    <li className="flex items-center space-x-2 cursor-pointer">
                                        <Image src="/icon-reminders.svg" width="15" height="15" alt="todo-image" />
                                        <li>Reminders</li>
                                    </li>
                                    <li className="flex items-center space-x-2 cursor-pointer">
                                        <Image src="/icon-planning.svg" width="15" height="15" alt="todo-image" />
                                        <li>Planning</li>
                                    </li>
                                </div>
                            )}
                        </li>

                        <li onClick={() => setCompanyOpen((prev) => !prev)}>
                            <div className="flex items-center cursor-pointer hover:text-[#141414]">
                                Company
                                <div className="pl-1">
                                    {!companyOpen ? (
                                        <Image src="/icon-arrow-down.svg" width="10" height="10" alt="logo-image" />
                                    ) : (
                                        <Image src="/icon-arrow-up.svg" width="10" height="10" alt="logo-image" />
                                    )}
                                </div>
                            </div>

                            {companyOpen && (
                                <div className="space-y-3 p-5 absolute bg-[#FAFAFA] rounded-xl drop-shadow-xl">
                                    <li>History</li>
                                    <li>Our Team</li>
                                    <li>Blog</li>
                                </div>
                            )}
                        </li>

                        <li className="cursor-pointer hover:text-[#141414]">Careers</li>
                        <li className="cursor-pointer hover:text-[#141414]">About</li>
                    </ul>
                </div>

                <div className="text-[#696969] hidden lg:flex justify-end">
                    <div className="space-x-10">
                        <button className="cursor-pointer hover:text-[#141414]">Login</button>
                        <button className="border-2 border-[#696969] rounded-xl py-2 px-5 hover:bg-[#696969] hover:text-[#FAFAFA]">Register</button>
                    </div>
                </div>
            </div>

        </nav >
    )
}
