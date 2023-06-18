import Search from '../Search/Search';
import styles from './Sidebar.module.css'
const Sidebar = ({ sidebarOpen }) => {
    return (
        <div style={{ left: sidebarOpen ? 0 : -250 }} className={styles.sidebar_wrap}>
            <div className={styles.sidebar_search_wrap}>
                <Search />
            </div>

            <div className={styles.sidebar_categories_title}>
                <h3>Categories</h3>
            </div>
            <ul>
                <li><a href="/">Category 1</a></li>
                <li><a href="/">Category 2</a></li>
                <li><a href="/">Category 3</a></li>
                <li><a href="/">Category 4</a></li>
                <li><a href="/">Category 5</a></li>
                <li><a href="/">Category 6</a></li>
                <li><a href="/">Category 7</a></li>
                <li><a href="/">Category 8</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;