import styles from './Bottombar.module.css';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';


const Bottombar = () => {
    return (
        <div className={styles.bottombar_wrap}>
            <ul>
                <li>
                    <a href="/">
                        <AiFillHome className={styles.bottombar_icon} />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <AiFillHeart className={styles.bottombar_icon} />
                        <span>My Items</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <BsFillCartCheckFill className={styles.bottombar_icon} />
                        <span>Cart</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <MdManageAccounts className={styles.bottombar_icon} />
                        <span>Account</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Bottombar;