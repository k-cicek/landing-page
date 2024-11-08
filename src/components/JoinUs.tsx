import Image from 'next/image';

const JoinUs = () => {
    return (
        <section className='px-20 py-40'>
            <div className="container mx-auto py-7 px-20 bg-white shadow-xl rounded-[2rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className=''>
                        <h2 className="text-4xl font-bold mb-6">
                            Why join us
                        </h2>
                        <div className="mt-4">
                            <div className="flex items-start gap-2">
                                <svg className="w-6 h-6 text-[#5B3926] mt-1" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                                <p className="text-gray-600">Est et in pharetra magna adipiscing ornare aliquam.</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <svg className="w-6 h-6 text-[#5B3926]" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                                <p className="text-gray-600">Tellus arcu sed consequat ac velit ut eu blandit.</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <svg className="w-6 h-6 text-[#5B3926]" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                                <p className="text-gray-600">Ullamcorper ornare in et egestas dolor orci.</p>
                            </div>
                        </div>
                        <button className="bg-transparent border border-[#78350F] text-[#78350F] px-4 py-2 rounded-lg hover:bg-[#78350F] hover:text-white transition-colors">
                            Sign up now
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <Image
                            src="/Deco.png"
                            alt="Background decoration"
                            width={713}
                            height={625}
                            className="absolute pointer-events-none"
                            priority
                        />
                        <div className="relative z-10">
                            <Image
                                src="/video.png"
                                alt="Video thumbnail"
                                width={520}
                                height={350}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
