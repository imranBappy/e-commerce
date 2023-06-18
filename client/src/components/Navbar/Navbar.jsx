import styles from './Navbar.module.css';
import logo from '../../assets/Logo.png';
import accountIcon from '../../assets/icons/profile-icon.png'
import heartIcon from '../../assets/icons/heart-icon.png'
import cartIcon from '../../assets/icons/cart-icon.png'
import optionIcon from '../../assets/icons/option-icon.png'
import Search from '../Search/Search';



const Navbar = ({ setSidebarOpen }) => {
    const handleSidebarOpen = () => {
        setSidebarOpen((prv) => !prv);
    }

    return (
        <nav className={styles.navbar_wrap}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.navbar_logo}>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className={styles.navbar_search}>
                        <Search />
                    </div>
                    <div className={styles.navbar_menu}>
                        <ul>
                            <li >
                                <a className={styles.nav_icon} href="/">
                                    <img src={accountIcon} alt="Account" />
                                    <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.nav_icon} href="/">
                                    <img src={heartIcon} alt="My Items" />

                                    <span>My Items</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.nav_icon} href="/">
                                    <img src={cartIcon} alt="Cart" />
                                </a>
                            </li>
                            <li className={styles.option}>
                                <img onClick={handleSidebarOpen} className={styles.nav_icon} src={optionIcon} alt="Option" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;