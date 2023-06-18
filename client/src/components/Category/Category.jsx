import Styles from './Category.module.css'

const Category = () => {
    return (
        <div className={Styles.category_wrap}>
            <div className={Styles.category}>Jewelry & Accessories</div>
            <div className={Styles.category}>Clothing & Shoes</div>
            <div className={Styles.category}>Home & Living</div>
            <div className={Styles.category}>Wedding & Party</div>
            <div className={Styles.category}>Toys & Entertainment</div>
            <div className={Styles.category}>Art & Collectibles</div>
            <div className={Styles.category}>Craft Supplies & Tools</div>
            <div className={Styles.category}>Vintage</div>
        </div>
    );
};

export default Category;