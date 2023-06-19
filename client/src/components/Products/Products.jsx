
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Products.module.css'
import Item from './Item';
import { useGetProductsQuery, productsApi } from '../../features/products/productsApi';
import { useDispatch } from 'react-redux';

const Products = () => {
    const { data = {} } = useGetProductsQuery(9);
    console.log(data);
    const dispatch = useDispatch();
    const next = () => {
        dispatch(productsApi.endpoints.getMoreProducts.initiate({ limit: 9, skip: 9 }))
    }
    next()
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
                    {
                        data?.products?.map((item) => <Item key={item.id} item={item} />)
                    }
                    {/* <Item img={item1} title='Fashion' price="123" />
                    <Item img={item1} title='Fashion' price="123" /> */}

                </div>
            </div>
        </div>
    );
};

export default Products;