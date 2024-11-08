import Image from 'next/image';
import { BsCart } from 'react-icons/bs';
import Shoes2 from '@/public/shoes2.png';
import Shoes1 from '@/public/shoes1.jpg';
import Shoes3 from '@/public/shoes3.jpg';

const PopularShoes = () => {
    return (
        <section className="bg-[#0F172A] py-20 px-10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white">The best of the best</h2>
                    <button className="border border-white text-white px-6 py-4 rounded-lg hover:bg-white hover:text-[#0F172A] transition-colors">
                        Sign up now
                    </button>
                </div>

                <div className="relative px-10 py-8">
                    <Image
                        src="/Backlights.png"
                        alt="Background decoration"
                        fill
                        className="absolute pointer-events-none"
                        priority
                    />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-[#0B1222] rounded-3xl overflow-hidden relative group">
                            <div className="relative h-64 bg-[#FDB022] rounded-t-3xl">
                                <Image
                                    src="/shoes2.png"
                                    alt="Popular Shoe 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Title</h3>
                                <p className="text-gray-400 mb-6">
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                                <button className="w-full flex items-center justify-center space-x-2 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-[#0B1222] transition-colors">
                                    <BsCart className="text-xl" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#0B1222] rounded-3xl overflow-hidden relative group">
                            <div className="relative h-64 bg-[#3B82F6] rounded-t-3xl">
                                <Image
                                    src="/shoes1.png"
                                    alt="Popular Shoe 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Title</h3>
                                <p className="text-gray-400 mb-6">
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                                <button className="w-full flex items-center justify-center space-x-2 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-[#0B1222] transition-colors">
                                    <BsCart className="text-xl" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#0B1222] rounded-3xl overflow-hidden relative group">
                            <div className="relative h-64 bg-[#FDB022] rounded-t-3xl">
                                <Image
                                    src="/shoes3.png"
                                    alt="Popular Shoe 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Title</h3>
                                <p className="text-gray-400 mb-6">
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                                <button className="w-full flex items-center justify-center space-x-2 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-[#0B1222] transition-colors">
                                    <BsCart className="text-xl" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularShoes;