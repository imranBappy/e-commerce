import styles from './HeaderSlider.module.css'
import HeaderSlide from '../HeaderSlide/HeaderSlide';
import MinCarousel from './MinCarousel';
const HeaderSlider = () => {
    return (
        <div className={styles.slider_container}>
            <div className={styles.slider_wrap}>
                <div className={styles.slide}>
                    <HeaderSlide />
                </div>
                <div className={styles.slide}>
                    <HeaderSlide />
                </div>
                <div className={styles.slide}>
                    <HeaderSlide />
                </div>
            </div>
            <div className={styles.right_slider_wrap}>
                <MinCarousel />
            </div>
        </div>
    );
};

export default HeaderSlider;