import Image from "next/image";
import Link from 'next/link';
import Badge from "../badge/badge";
import styles from "./product-item.module.css";
import { NumericFormat } from "react-number-format";
import React, { useState } from 'react';

export default function ProductItem({ product }) {
  const transformedArray = product.metas.reduce((result, item) => {
    result[item.meta_key] = item.meta_value;
    return result;
  }, {});
  const metas = transformedArray;
  const imgGalleries = JSON.parse(metas.image_gallery);
  const [image, setImage] = useState(imgGalleries[0].media_path);
  const isSpecialPrice = (product.item_special_price >= product.item_normal_price) ? 'd-none' : '';
  const isSold = (!product.total_bought) ? 'd-none' : '';

  function handleMouseEnter(imgGalleries) {
    return () => {
      if (typeof imgGalleries[1] !== 'undefined') {
        setImage(imgGalleries[1].media_path);
      }
    };
  }
  function handleMouseOut(imgGalleries) {
    return () => {
      setImage(imgGalleries[0].media_path);
    };
  }
  return (
    <Link href={`/product/${product.slug}`}>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <Image
            width={260}
            height={390}
            alt={product.item_name}
            src={image}
            onMouseEnter={handleMouseEnter(imgGalleries)}
            onMouseOut={handleMouseOut(imgGalleries)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.containerProduct}>
          <div className={styles.brandName}>{product.supplier.supplier_name}</div>
          <div className={styles.productTitle}>{product.item_name}</div>
          <div className={styles.labelSpecialPrice}>
            <div>
              <NumericFormat value={product.item_special_price}
                allowLeadingZeros
                thousandSeparator="."
                decimalSeparator=","
                prefix={'IDR '}
                displayType="text" />
            </div>
          </div>
          <div className={styles.labelPrice}>
            <div className={`${styles.price} ${isSpecialPrice}`} >
              <NumericFormat value={product.item_normal_price}
                allowLeadingZeros
                thousandSeparator="."
                decimalSeparator=","
                prefix={'IDR '}
                displayType="text" />
            </div>
            <div className={styles.strike} />
          </div>
          <small className={`${styles.sold} ${isSold}`}>Terjual {product.total_bought}</small>
        </div>
        <Badge />
      </div>
    </Link>
  );
};
