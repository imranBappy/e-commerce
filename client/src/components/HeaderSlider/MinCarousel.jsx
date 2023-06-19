import styles from './MinCarousel.module.css';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import upArrow from '../../assets/icons/arrow-up.png'
import downArrow from '../../assets/icons/arrow-down.png'
import { useState } from 'react';

const MinCarousel = () => {

    const [current, setCurrent] = useState(0)
    const upSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const downSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const slides = [
        <div className={styles.slide} style={{ background: "red" }}>
            <div >
                <img src="https://picsum.photos/id/237/200/200" alt="" />
                <p>Fuji 14mm Lens</p>
            </div>
            <div >
                <img src="https://picsum.photos/id/236/200/200" alt="" />
                <p>Fuji 14mm Lens</p>
            </div>
        </div>,
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
    ]

    const slides2 = [
        < >
            <div >
                <img src="https://picsum.photos/id/237/200/200" alt="" />
                <p>Fuji 14mm Lens</p>
            </div>
            <div >
                <img src="https://picsum.photos/id/236/200/200" alt="" />
                <p>Fuji 14mm Lens</p>
            </div>
        </>,
        < >
            <div >
                <img src="https://picsum.photos/id/231/200/200" alt="" />
                <p>Fuji 14mm Lens</p>
            </div>
            <div >
                <img src="https://picsum.photos/id/232/200/200" alt="" />
                <p>Fuji 14mm Lens</p>
            </div>
        </>
    ]
    // let newX = slides2.map((slide, index) => {
    //     // console.log();
    //     //  = { transform: `translateY(${300 * index}%)` }
    //     return (
    //         <div className={styles.slide} style={{ transform: `translateY(${300 * index}%)` }}>
    //             {slide}
    //         </div>
    //     )
    // })
    return (
        <div className={styles.carousel_container}>
            <button onClick={upSlide}>
                <img src={upArrow} alt="upArrow" />
            </button>
            <div className={styles.carousel_wrap}>
                <div style={current == 0 ? { top: 0 } : { top: (100 * 1) * -1 }} className={styles.slide}>
                    <div >
                        <img src="https://picsum.photos/id/237/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                    <div >
                        <img src="https://picsum.photos/id/236/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                </div>
                <div style={current == 1 ? { top: 0 } : { visibility: 'hidden' }} className={styles.slide}>
                    <div >
                        <img src="https://picsum.photos/id/231/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                    <div >
                        <img src="https://picsum.photos/id/232/200/200" alt="" />
                        <p>Fuji 14mm Lens</p>
                    </div>
                </div>

                {/* {slides[current]} */}

                {/* <div className={styles.slide} style={{ transform: `translateY(${300 * current}%)` }}>
                    {slides2[current]}
                </div> */}
            </div>
            <button onClick={downSlide}>
                <img src={downArrow} alt="downArrow" />
            </button>
        </div>

    );
};

export default MinCarousel;