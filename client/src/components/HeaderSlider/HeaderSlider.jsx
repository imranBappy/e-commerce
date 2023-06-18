import styles from './HeaderSlider.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/slider1.png'
const HeaderSlider = () => {
    return (
        <div className={styles.hello}>
            <Carousel
                infiniteLoop={true}
            >
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default HeaderSlider;