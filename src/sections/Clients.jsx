import { clientReviews } from '../constants/index.js';

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Hear from Our Clients</h3>

            <div className="client-container">
                {clientReviews.map((item) => (
                    <div key={`review-${item.id}`} className="client-review">
                        <div>
                            <p className="text-white-800 font-light">{item.review}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex items-center justify-center">
                                        <p className="font-semibold text-white-800">{item.name}</p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;