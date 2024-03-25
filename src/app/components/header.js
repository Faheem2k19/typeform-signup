"use client";
import { useState, useEffect } from "react";

export default function Header() {
    const [language, setLanguage] = useState("English");
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {

        function handleClickOutside(event) {
            if (showDropdown && !event.target.closest(".dropdown-container")) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLanguageSelect = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setShowDropdown(false);
    };

    return (
        <div className="flex justify-between px-5 py-3">
            <div className="self-center relative">
                <div className="dropdown-container">
                    <button onClick={toggleDropdown} className="flex items-center text-gray-600 focus:outline-none">
                        <svg height={14} viewBox="0 0 20 20" width={14} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fillRule="evenodd" />
                        </svg>
                        <span className="text-sm font-sans">&nbsp;{language}</span>
                        <svg className={`ml-1 transition-transform duration-150 ease-in ${showDropdown ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={14} height={14}>
                            <path fillRule="evenodd" d="M10 12.12l-5.12-5.12a.75.75 0 111.06-1.06L10 10l4.06-4.06a.75.75 0 111.06 1.06L10 12.12z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {showDropdown && (
                        <div className={`absolute mt-2 py-3 w-24 bg-white shadow-md rounded-lg border transition-all duration-300 ${showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <button onClick={() => handleLanguageSelect("English")} className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 font-sans">
                                English
                            </button>
                            <button onClick={() => handleLanguageSelect("Español")} className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 font-sans">
                                Español
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex">
                <p className="text-gray-600 self-center text-sm font-sans">Already have an account?</p>
                <button className="ml-2 border rounded-md border-black bg-transparent text-gray-950 py-1 px-4 focus:outline-none text-xs font-sans">Log in</button>
            </div>
        </div>
    )
}
