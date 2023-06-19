import styles from './HeaderSlider.module.css'
import HeaderSlide from '../HeaderSlide/HeaderSlide';
import MinCarousel from './MinCarousel';
import { useEffect, useState } from 'react';
const HeaderSlider = () => {
    const [current, setCurrent] = useState(0)
    const [box, setBox] = useState(null)
    useEffect(() => {
        setBox(document.querySelector('#slider-container'));
    }, [])
    const prevSlide = () => {
        setCurrent((prev) => prev == 0 ? 0 : prev - 1);
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width - 5;
    }
    const nextSlide = () => {
        setCurrent((prev) => prev == 2 ? 2 : prev + 1);
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width + 5;
    }
    return (
        <>
            <div className={styles.slider_container}>
                <div className={styles.slider_wrap} id='slider-container'>
                    <div key={1}
                        className={styles.slide}>
                        <HeaderSlide
                            nextSlide={nextSlide}
                            prevSlide={prevSlide}
                            index={0}
                            current={current}
                            img_src="https://picsum.photos/id/237/500/500"
                        />
                    </div>,
                    <div key={2}
                        className={styles.slide}>
                        <HeaderSlide
                            nextSlide={nextSlide}
                            prevSlide={prevSlide}
                            index={1}
                            current={current}
                            img_src="https://picsum.photos/id/231/500/500"
                        />
                    </div>,
                    <div key={3}
                        className={styles.slide}>
                        <HeaderSlide
                            nextSlide={nextSlide}
                            prevSlide={prevSlide}
                            index={2}
                            current={current}
                            img_src="https://picsum.photos/id/239/500/500"
                        />
                    </div>

                </div>
                <div className={styles.right_slider_wrap}>
                    <MinCarousel />
                </div>
            </div>

        </>
    );
};

export default HeaderSlider;