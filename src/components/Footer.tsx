import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 md:px-20 text-center md:text-left">
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-4">
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/overview">Overview</Link></li>
                            <li><Link href="/browse">Browse</Link></li>
                            <li><Link href="/accessibility">Accessibility</Link></li>
                            <li><Link href="/five">Five</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-4">
                            <li><Link href="/brainstorming">Brainstorming</Link></li>
                            <li><Link href="/ideation">Ideation</Link></li>
                            <li><Link href="/wireframing">Wireframing</Link></li>
                            <li><Link href="/research">Research</Link></li>
                            <li><Link href="/design">Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-4">
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/developers">Developers</Link></li>
                            <li><Link href="/documentation">Documentation</Link></li>
                            <li><Link href="/integrations">Integrations</Link></li>
                            <li><Link href="/reports">Reports</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Get the App</h3>
                        <Link href="https://apps.apple.com" className="flex justify-center md:justify-start">
                            <Image
                                src="/app-store.png"
                                alt="Download on App Store"
                                width={140}
                                height={42}
                                className='mb-3'
                            />
                        </Link>
                        <Link href="https://play.google.com" className="flex justify-center md:justify-start">
                            <Image
                                src="/google-play.png"
                                alt="Get it on Google Play"
                                width={140}
                                height={42}
                            />
                        </Link>
                        <div className="mt-8">
                            <h3 className="font-semibold mb-4">Follow Us</h3>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <Link href="#" className="hover:text-gray-400"><FaYoutube size={24} /></Link>
                                <Link href="#" className="hover:text-gray-400"><FaFacebook size={24} /></Link>
                                <Link href="#" className="hover:text-gray-400"><FaTwitter size={24} /></Link>
                                <Link href="#" className="hover:text-gray-400"><FaInstagram size={24} /></Link>
                                <Link href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 py-9 flex flex-col md:flex-row justify-between items-center px-20">
                    <p>Collers @ 2023. All rights reserved.</p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-gray-400">Terms</Link>
                        <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
                        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                        <div className="flex items-center">
                            <Image src="/globe.svg" alt="Language" width={20} height={20} className="mr-2" />
                            <span>EN</span>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    );
};

export default Footer;