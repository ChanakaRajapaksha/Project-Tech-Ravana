import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-scroll';

import Button from '../components/Button';

const CounterPage = () => {
    const [counterState, setCounterState] = useState(false);

    return (
        <div className="py-20 text-center md:px-20 px-5">
            <ScrollTrigger
                onEnter={() => setCounterState(true)}
                onExit={() => setCounterState(false)}
            >
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img
                            src='/assets/spotlight2.png'
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Side - Image */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/assets/laptop-girl.png" // Use the actual image here
                                alt="girl working on laptop"
                                className="rounded-lg shadow-md"
                            />
                        </div>

                        {/* Right Side - Contact Info */}
                        <div className="flex-1 flex flex-col justify-center gap-5 text-center md:text-left">
                            <div className="flex items-center space-x-2">
                                <div className="social-icon">
                                    <img src="/assets/phone.svg" alt="instagram" className="w-1/2 h-1/2" />
                                </div>
                                <p className="field-label">CALL US 24/7</p>
                            </div>
                            <h2 className="text-white text-2xl font-semibold animatedText">+94 71 526 4449  |  +94 78 335 6601</h2>
                            <p className="text-lg text-white-600">
                                Have any idea or project in your mind? Call us or schedule an
                                appointment. Our representative will reply to you shortly
                            </p>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="inline-block"
                            >
                                <Button
                                    name="Let's talk"
                                    isBeam
                                    containerClass="w-full mt-10"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    <div className="flex flex-col items-center gap-5">
                        <h2 className="text-white-600 text-6xl font-extrabold">
                            {counterState && (
                                <CountUp
                                    start={0}
                                    end={20}
                                    duration={2.75}
                                >
                                </CountUp>
                            )}
                            +
                        </h2>
                        <p className="text-white text-2xl font-semibold animatedText">Happy Clients</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-white-600 text-6xl font-extrabold">
                            {counterState && (
                                <CountUp
                                    start={0}
                                    end={30}
                                    duration={2.75}
                                >
                                </CountUp>
                            )}
                            +
                        </h2>
                        <p className="text-white text-2xl font-semibold animatedText">Projects Done</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-white-600 text-6xl font-extrabold">
                            {counterState && (
                                <CountUp
                                    start={0}
                                    end={91}
                                    duration={2.75}
                                >
                                </CountUp>
                            )}
                            %
                        </h2>
                        <p className="text-white text-2xl font-semibold animatedText">Success Rate</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
};

export default CounterPage;