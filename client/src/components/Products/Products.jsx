
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Products.module.css'
import Item from './Item';
import { productsApi } from '../../features/products/productsApi';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Products = () => {
    const [current, setCurrent] = useState(0)
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)
    useEffect(() => {
        dispatch(productsApi.endpoints.getProducts.initiate({ skip: current * 9, limit: 9 }))
            .unwrap()
            .then((data) => {
                setTotal(data?.total)
                setProducts([...data?.products])
            })

    }, [current, dispatch])

    const next = () => {
        if (total >= (current + 1) * 9) {
            setCurrent(current + 1);
        }
    }
    const prev = () => {
        if (current > 0)
            setCurrent(current - 1);
    }
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
                            <button onClick={prev} style={{ width: 20, height: 20, fontSize: 16 }} className={`carousel_btn`}>
                                <IoIosArrowBack />
                            </button>
                            <button onClick={next} style={{ width: 20, height: 20, fontSize: 16 }} className={`carousel_btn`}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.products_container}>
                    {
                        products?.map((item) => <Item key={item.id} item={item} />)
                    }
                    {/* <Item img={item1} title='Fashion' price="123" />
                    <Item img={item1} title='Fashion' price="123" /> */}

                </div>
            </div>
        </div>
    );
};

export default Products;