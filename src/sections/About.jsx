import { useState } from 'react';
import Globe from 'react-globe.gl';
import { Link } from 'react-scroll';

import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('hellotechravana@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container relative">
                        <img 
                            src="assets/grid1.png" 
                            alt="grid-1" 
                            className="w-[200px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-35 z-0" 
                        />

                        <div className='relative z-10'>
                            <p className="grid-headtext">Hi, We are TechRavana</p>
                            <p className="grid-subtext mt-5">
                                At TechRavana, we’ve successfully developed over 10 projects by fostering a high-performance team that prioritizes quality and outcomes. We believe that great products are built through active collaboration with our clients, customers, and teams, ensuring a seamless development experience. Embracing failures as valuable lessons, we create a safe environment where experimentation thrives, allowing us to continuously evolve and improve our products based on real insights. Our commitment is to turn your ideas into successful solutions that deliver exceptional results
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain opacity-40" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                We leverage modern technologies and cutting-edge tools to build innovative, scalable, and high-performance solutions for all your project needs
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 6.9271, lng: 79.8612,
                                    text: 'We are here!',
                                    color: 'white',
                                    size: 30
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">We are very flexible with time zone communication & locations</p>
                            <p className="grid-subtext">We are based in Colombo, Sri Lanka and open to remote work worldwide</p>
                            <Link to='contact' smooth={true} duration={500}>
                                <Button
                                    name="Contact us"
                                    isBeam
                                    containerClass="w-full mt-10"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Our Passion for Coding</p>
                            <p className="grid-subtext">
                                At TechRavana, solving challenges and bringing ideas to life through code is more than just our work—it's our passion. We thrive on exploring new technologies, continuously enhancing our skills, and creating innovative solutions that make an impact
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact us</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">hellotechravana@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;