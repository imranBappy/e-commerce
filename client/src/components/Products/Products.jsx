
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Products.module.css'
import Item from './Item';
import item1 from '../../assets/products/item1.png'
const Products = () => {
    return (
        <div className='container'>
            <div className={styles.products_wrap} >
                <div>
                    <h3 className={styles.product_title}>
                        Shop by Category
                    </h3>
                    <div className={styles.products_info_bottom}>
                        <p className={styles.products_info}>
                            Life is hard enough already. Let us make it a little easier.
                        </p>
                        <div className={styles.controllers}>
                            <button style={{ width: 20, height: 20, fontSize: 16 }} className={`carousel_btn`}>
                                <IoIosArrowBack />
                            </button>
                            <button style={{ width: 20, height: 20, fontSize: 16 }} className={`carousel_btn`}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.products_container}>
                    <Item img={item1} title='Wireless Headphones' price="123" />
                    <Item img={item1} title='Fashion' price="123" />
                    <Item img={item1} title='Fashion' price="123" />
                    <Item img={item1} title='Fashion' price="123" />
                    <Item img={item1} title='Fashion' price="123" />
                    <Item img={item1} title='Fashion' price="123" />
                </div>
            </div>
        </div>
    );
};

export default Products;