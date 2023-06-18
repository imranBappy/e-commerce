import slider1 from '../../assets/slider1.png'
import styles from './HeaderSlide.module.css'

const HeaderSlide = () => {
    return (
        <div className={styles.slide_wrap}>
            <div className={styles.slide_text_wrap}>
                <div className={styles.slide_text_info}>
                    <p className={styles.slide_text_info_fist} >100% QUALITY, 100% SATISFACTION</p>
                    <h3 className={styles.slide_text_info_title}>Where the world comes to shop.</h3>
                    <p className={styles.slide_text_info_second}>Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
                </div>
                <div className={styles.slide_text_bottom}>
                    <div className={styles.slide_text_button}>
                        <button>SHOP NOW</button>
                    </div>
                    <div className={styles.slide_text_price}>
                        <p>Start from</p>
                        <h6>110.00$</h6>
                    </div>
                </div>
            </div>
            <div className={styles.slide_img_wrap}>
                <div >
                    <img className={styles.slide_img} src={slider1} />
                </div>
                <div className={styles.dots_wrap}>
                    <button>PREV</button>
                    <div className={styles.slider_dots}>
                        <div className={styles.slider_dot}></div>
                        <div className={styles.slider_dot}></div>
                        <div className={styles.slider_dot}></div>
                    </div>
                    <button>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlide;