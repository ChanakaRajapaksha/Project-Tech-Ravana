const Tech = () => {
    const row1 = [
        "/assets/React-Dark.svg",
        "/assets/NextJS-Dark.svg",
        "/assets/ThreeJS-Dark.svg",
        "/assets/VueJS-Dark.svg",
        "/assets/JavaScript.svg",
        "/assets/TypeScript.svg",
        "/assets/HTML.svg",
        "/assets/TailwindCSS-Dark.svg",
        "/assets/Sass.svg",
        "/assets/Redux.svg",
        "/assets/Wordpress.svg",
        "/assets/Figma-Dark.svg",
        "/assets/Vite-Dark.svg",
        "/assets/StyledComponents.svg",
        "/assets/Bootstrap.svg",
        "/assets/Babel.svg",
        "/assets/Flutter-Dark.svg",
    ];

    const row2 = [
        "/assets/AWS-Dark.svg",
        "/assets/AndroidStudio-Dark.svg",
        "/assets/Azure-Dark.svg",
        "/assets/Docker.svg",
        "/assets/ExpressJS-Dark.svg",
        "/assets/Firebase-Dark.svg",
        "/assets/Flask-Dark.svg",
        "/assets/Grafana-Dark.svg",
        "/assets/Java-Dark.svg",
        "/assets/Kubernetes.svg",
        "/assets/Laravel-Dark.svg",
        "/assets/MongoDB.svg",
        "/assets/MySQL-Dark.svg",
        "/assets/NodeJS-Dark.svg",
        "/assets/PostgreSQL-Dark.svg",
        "/assets/Python-Dark.svg",
        "/assets/Spring-Dark.svg",
        "/assets/TensorFlow-Dark.svg",
    ];

    return (
        <section className="c-space my-20">
            <h3 className="head-text">Technologies We Use</h3>

            <div className="w-full flex flex-col items-center justify-center overflow-hidden my-10">
                {/* First Marquee */}
                <div className="flex max-w-6xl overflow-hidden select-none space-y-5">
                    <div className="flex animate-scroll">
                        {row1.map((el, idx) => (
                            <div
                                key={idx}
                                className="grid place-items-center w-[clamp(6rem,1rem+20vmin,15rem)] p-5"
                            >
                                <img
                                    src={el}
                                    alt={`tech-logo-${idx}`}
                                    className="object-contain max-w-full max-h-full rounded-md aspect-video shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-scroll">
                        {row1.map((el, idx) => (
                            <div
                                key={idx}
                                className="grid place-items-center w-[clamp(6rem,1rem+20vmin,15rem)] p-5"
                            >
                                <img
                                    src={el}
                                    alt={`tech-logo-${idx}`}
                                    className="object-contain max-w-full max-h-full rounded-md aspect-video shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Marquee */}
                <div className="flex max-w-6xl overflow-hidden select-none space-y-5">
                    <div className="flex animate-scroll-reverse">
                        {row2.map((el, idx) => (
                            <div
                                key={idx}
                                className="grid place-items-center w-[clamp(6rem,1rem+20vmin,15rem)] p-5"
                            >
                                <img
                                    src={el}
                                    alt={`tech-logo-${idx}`}
                                    className="object-contain max-w-full max-h-full rounded-md aspect-video shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-scroll-reverse">
                        {row2.map((el, idx) => (
                            <div
                                key={idx}
                                className="grid place-items-center w-[clamp(6rem,1rem+20vmin,15rem)] p-5"
                            >
                                <img
                                    src={el}
                                    alt={`tech-logo-${idx}`}
                                    className="object-contain max-w-full max-h-full rounded-md aspect-video shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Tech;