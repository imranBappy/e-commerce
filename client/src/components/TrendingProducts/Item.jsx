import styles from './Item.module.css';


const Item = ({ img }) => {
    return (
        <div className={styles.item_wrap}>
            <div className={styles.item}>
                <div className={styles.item_img}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.item_info}>
                    <div>
                        <h4>
                            Seven Zero Five
                        </h4>
                        <p className={styles.text}>Starting</p>
                        <p className={styles.item_price}> $10.00 </p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Item;