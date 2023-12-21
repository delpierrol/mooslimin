import Image from "next/image";
import Badge from "../badge/badge";
import styles from "./product-item.module.css";
import { NumericFormat } from "react-number-format";

export default function ProductItem({ product }) {
  return (
    <a href={"product/" + product.id}>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <Image 
            layout="fill" 
            objectFit="cover" 
            alt={product.title} 
            src={product.image}
          {if(typeof product.image2 !== 'undefined')
            {
              return (
                onMouseOver={e => (e.currentTarget.src = {product.image2})} 
                onMouseOut={e => (e.currentTarget.src = {product.image})} 
              )
            }
          } />
        </div>
        <div className={styles.containerProduct}>
          <text className={styles.brandName}>{product.brand.name}</text>
          <text className={styles.productTitle}>{product.title}</text>
          <div className={styles.labelSpecialPrice}>
            <text>
              <NumericFormat value={product.specialPrice} 
              allowLeadingZeros 
              thousandSeparator="." 
              decimalSeparator="," 
              prefix={'IDR '} 
              displayType="text"/>
            </text>
          </div>
          <div className={styles.labelPrice}>
            <text className={styles.price}>
              <NumericFormat value={product.price} 
              allowLeadingZeros 
              thousandSeparator="." 
              decimalSeparator="," 
              prefix={'IDR '} 
              displayType="text"/>
            </text>
            <div className={styles.strike} />
          </div>
          <small className={styles.sold}>Terjual 10</small>
        </div>
        <Badge />
      </div>
    </a>
  );
};
