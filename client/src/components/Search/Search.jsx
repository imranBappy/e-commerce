import styles from './Search.module.css'
import searchIcon from '../../assets/icons/search-icon.png'
const Search = () => {
    return (
        <div className={styles.search}>
            <input placeholder='Search SnipShop.com' type="text" />
            <div className={styles.search_icon}>
                <img src={searchIcon} alt="" />
            </div>
        </div>
    );
};

export default Search;