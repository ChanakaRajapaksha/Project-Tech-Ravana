import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from 'react-scroll';

import Button from '../components/Button';
import HelloCube from "../components/HelloCube";

const Who = () => {
    return (
        <section className="c-space snap-center flex justify-center">
            <div className="min-h-[800px] snap-center w-[1400px] flex justify-between">
                <div className="flex-1 hidden md:block">
                    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[3, 2, 1]} />
                                <HelloCube />
                            <OrbitControls enableZoom={false} autoRotate />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-5 text-center md:text-left">
                    <h1 className="head-text">Think Outside the Square Space</h1>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <img 
                            src="./assets/line.png" 
                            alt="Line" 
                            className="h-1" 
                        />
                        <h2 className="text-white text-2xl font-semibold animatedText">Who we Are</h2>
                    </div>
                    <p className="text-lg text-white-600">
                        At TechRavana, we're not just a team of developers—we're a creative powerhouse of designers and innovators who thrive on bringing bold ideas to life. With a passion for both technology and the arts, we blend creativity and technical expertise to craft solutions that are not only functional but visually stunning. Whether it's designing captivating user interfaces or developing seamless applications, we push the boundaries to deliver something truly unique and impactful. Let us take your vision beyond the ordinary!
                    </p>
                    <Link to='works' smooth={true} duration={500}>
                        <Button
                            name="See our works"
                            isBeam
                            containerClass="mt-10 max-content"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Who;