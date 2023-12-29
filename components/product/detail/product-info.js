'use client'
import styles from '@/components/product/detail/product-detail.module.css';
import { NumericFormat } from "react-number-format";
import Container from 'react-bootstrap/Container';

export default function ProductInfo({ product }) {
    const isDiscount = (product.item_special_price < product.item_normal_price) ? true : false;
    let percentage = 0;
    if (isDiscount === true) {
        percentage = Math.floor(((product.item_normal_price - product.item_special_price) / product.item_normal_price) * 100);
    }

    return (
        <>
            <div className={`${styles.brandName} pb-2`}>{product.supplier.supplier_name}</div>
            <h2 className={styles.productName}>{product.item_name}</h2>
            <h3 className={styles.price}>
                {
                    isDiscount && <span className={`${styles.priceDisc} badge bg-danger rounded-0 py-2 me-2`}>{percentage}%</span>
                }
                <NumericFormat value={product.item_special_price}
                    allowLeadingZeros
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix={'IDR '}
                    displayType="text" />
                {
                    isDiscount && <small className={`${styles.priceStrike} ms-2`}><del><NumericFormat value={product.item_normal_price}
                        allowLeadingZeros
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix={'IDR '}
                        displayType="text" /></del></small>
                }
            </h3>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.details[0].item_detail_content }} />
            <div className='mb-3'>
                <div className='mb-3'>Pilih Ukuran: </div>
                <Container>
                    <div className='inline row gap-3'>
                        <label className={`${styles.sizing} text-center py-2`}>
                            <input type="radio" name="s" value="s" hidden />
                            S</label>
                        <label className={`${styles.sizing} text-center py-2`}>
                            <input type="radio" name="m" value="m" hidden />
                            M</label>
                    </div>
                </Container>
            </div>
        </>
    )
}
