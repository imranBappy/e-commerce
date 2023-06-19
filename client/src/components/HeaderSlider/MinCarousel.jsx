import styles from './MinCarousel.module.css';
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const MinCarousel = () => {
    const [current, setCurrent] = useState(0)
    const len = 1;
    const [box, setBox] = useState(null)
    useEffect(() => {
        setBox(document.querySelector('#min-slider-container'));
    }, [])

    const upSlide = () => {
        setCurrent((prev) => prev == 0 ? 0 : prev - 1);
        let width = box.clientWidth;

        box.scrollTop = box.scrollTop - width - 100;
    }
    const downSlide = () => {
        setCurrent((prev) => prev == 2 ? 2 : prev + 1);
        let width = box.clientWidth;
        box.scrollTop = box.scrollTop + width + 100;
    }


    return (
        <div className={styles.carousel_container}>
            <button className='carousel_btn' style={0 === current ? { visibility: "hidden" } : { divisibilitysplay: "visible" }} onClick={upSlide}>
                <IoIosArrowDown />
            </button>
            <div className={styles.carousel_wrap} id='min-slider-container'>
                <div className={styles.slide}>
                    <div style={{ marginTop: 0 }} >
                        <img src="https://picsum.photos/id/237/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                    <div >
                        <img src="https://picsum.photos/id/236/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                </div>
                <div className={styles.slide}>
                    <div >
                        <img src="https://picsum.photos/id/231/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                    <div >
                        <img src="https://picsum.photos/id/232/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                </div>
                <div className={styles.slide}>
                    <div >
                        <img src="https://picsum.photos/id/231/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                    <div >
                        <img src="https://picsum.photos/id/232/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                </div>

            </div>
            <button className='carousel_btn' style={len === current ? { visibility: "hidden" } : { divisibilitysplay: "visible" }} onClick={downSlide}>
                <IoIosArrowUp />
            </button>
        </div >

    );
};

export default MinCarousel;