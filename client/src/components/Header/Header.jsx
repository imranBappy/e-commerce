import styles from './Header.module.css'
import Category from '../Category/Category';
// import HeaderSlider from '../HeaderSlider/HeaderSlider';

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className="container">
                <Category />
                {/* <HeaderSlider /> */}
            </div>
        </div>
    );
};

export default Header;