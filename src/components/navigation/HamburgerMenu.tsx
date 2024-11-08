import React from 'react';

interface HamburgerProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

function HamburgerMenu({ isMenuOpen, setIsMenuOpen }: HamburgerProps) {
    return (
        <>
            <div className="md:hidden z-20">
                <button
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    className="text-[#78350F] p-2"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    )}
                </button>
            </div>

            <div className={`absolute top-16 left-0 w-full bg-[#FDF6E3] shadow-lg z-50 md:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <nav className="px-4 py-2">
                    <ul className="space-y-2">
                        {["Products", "Solutions", "Pricing", "Resources", "Log In"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="block py-2 text-[#78350F] hover:text-[#92400E] text-base"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="w-full mt-4 bg-transparent border border-[#78350F] text-[#78350F] px-4 py-2 rounded-lg hover:bg-[#78350F] hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sign up now
                    </button>
                </nav>
            </div>
        </>
    );
}

export default HamburgerMenu;
