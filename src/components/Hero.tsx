import React from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import ColImage from '/public/Col.png';
import Image from 'next/image';
import CupImage from '/public/cup.png';
import TunnelImage from '/public/tunnel.png';
import RadioImage from '/public/radio.png';

function Hero() {
    return (
        <section className="w-full bg-[#FDF6E3] px-4 md:px-20 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 top-4 md:top-32 -z-0">
                <Image
                    src="/rectangle.png"
                    alt="Background Pattern"
                    fill
                    className=""
                    priority
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center relative z-10">
                <div className="md:col-span-7">
                    <h2 className="text-6xl md:text-7xl font-bold text-[#0F172A] mb-4 text-center md:text-left">Collectible Sneakers</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-lg">Lorem ipsum dolor sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-transparent border border-[#78350F] text-[#78350F] px-4 py-2 rounded-lg hover:bg-[#78350F] hover:text-white transition-colors">
                            Sign up now
                        </button>
                        <button className="flex items-center space-x-2 text-gray-700">
                            <IoPlayCircleOutline size={24} />
                            <span>Watch Demo</span>
                        </button>
                    </div>
                </div>
                <div className="md:col-span-5">
                    <Image
                        src={ColImage}
                        alt="Collectible Sneakers"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative z-10 text-center md:text-left">
                <div className=''>
                    <div className="relative w-12 h-12 mb-6 mx-auto md:mx-0">
                        <Image
                            src={CupImage}
                            alt="Icon 1"
                            className="w-full h-full object-contain"
                        />
                        <svg className="absolute -top-2 -right-2 w-10 h-10" width="57" height="39" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6869 21.3553 35.7816L3.07107 17.4973Z" fill="#0369A1" />
                        </svg>

                    </div>
                    <h3 className="font-semibold text-xl text-[#0F172A] mb-3">Nibh viverra</h3>
                    <p className="text-gray-600">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>

                <div>
                    <div className="relative w-12 h-12 mb-6 mx-auto md:mx-0">
                        <Image
                            src={TunnelImage}
                            alt="Icon 2"
                            className="w-full h-full object-contain z-10 relative"
                        />
                        <svg className="absolute -top-2 -right-2 w-10 h-10" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5228 34.5222 39 28.9994 39L10.1415 39C1.23247 39 -3.22919 28.2286 3.07046 21.9289L21.9283 3.07106Z" fill="#15803D" />
                        </svg>

                    </div>
                    <h3 className="font-semibold text-xl text-[#0F172A] mb-3">Cursus amet</h3>
                    <p className="text-gray-600">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>

                <div>
                    <div className="relative w-12 h-12 mb-6 mx-auto md:mx-0">
                        <Image
                            src={RadioImage}
                            alt="Icon 3"
                            className="w-full h-full object-contain z-10 relative"
                        />
                        <svg className="absolute -top-2 -right-2 w-10 h-10" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="0.000671387" width="45" height="45" rx="20" fill="#A21CAF" />
                        </svg>

                    </div>
                    <h3 className="font-semibold text-xl text-[#0F172A] mb-3">Ipsum fermentum</h3>
                    <p className="text-gray-600">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
