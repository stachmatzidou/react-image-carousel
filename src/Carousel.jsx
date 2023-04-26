import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";

const Carousel = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((current) => (current - 1 + data.length) % data.length);
    };

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % data.length);
    };

    useEffect(() => {
        let sliderId = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => {
            clearInterval(sliderId);
        };
    }, [currentSlide]);

    return (
        <section className="slider-container">
            {data.map((item, index) => (
                <article
                    className="slide"
                    key={item.id}
                    style={{
                        transform: `translateX(${
                            100 * (index - currentSlide)
                        }%)`,
                        opacity: index === currentSlide ? "1" : "0",
                        visibility:
                            index === currentSlide ? "visible" : "hidden",
                    }}
                >
                    <img
                        className="img"
                        src={item.largeImageURL}
                        alt=""
                        key={item.id}
                    />
                </article>
            ))}
            <button type="button" className="prev" onClick={prevSlide}>
                <FiChevronLeft />
            </button>
            <button type="button" className="next" onClick={nextSlide}>
                <FiChevronRight />
            </button>
        </section>
    );
};
export default Carousel;
