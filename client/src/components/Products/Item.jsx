import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './Item.module.css';

const Item = ({ img, title, price }) => {
    return (
        <div className={styles.item_wrap} >
            <div>
                <img className={styles.item_img} src={img} alt="" />
            </div>
            <div className={styles.item_info}>
                <h4 className={styles.item_title}>{title}</h4>
                <div className={styles.item_info_bottom}>
                    <div className={styles.item_price}>
                        <p className={styles.original_price}>${price}</p>
                        <p className={styles.discount_price}>${price}</p>
                    </div>
                    <div className={styles.product_add_to_cart_btn}>
                        <AiOutlinePlusCircle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;