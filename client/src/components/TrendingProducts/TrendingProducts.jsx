import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './TrendingProducts.module.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import item1 from '../../assets/trendingProduct/item5.png'

const TrendingProducts = () => {

    const [box, setBox] = useState(null)
    useEffect(() => {
        setBox(document.querySelector('#tranding-product-container'));
    }, [])
    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    return (
        <div className={styles.trending_product_container}>
            <div className="container">
                <div className={styles.trending_product_wrap}>
                    <h3 className={styles.trending_product_title} >TrendingProducts</h3>
                    <p className={styles.trending_product_text}>Life is hard enough already. Let us make it a little easier.</p>
                    <div className={styles.controller}>
                        <button onClick={btnpressprev} style={{ width: 20, height: 20, fontSize: 16 }} className={`carousel_btn`}>
                            <IoIosArrowBack />
                        </button>
                        <button onClick={btnpressnext} style={{ width: 20, height: 20, fontSize: 16 }} className={`carousel_btn`}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.trending_product_category}>
                <div>
                    Fashion
                </div>
                <div>
                    Technology
                </div>
                <div>
                    Interiors
                </div>
                <div>
                    Food & Drink
                </div>
            </div>

            <div className={styles.trending_product_slider}>
                <div id='tranding-product-container' className={styles.trending_product_slide}>

                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                    <Item img={item1} />
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;