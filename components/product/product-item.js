import Image from "next/image";
import Badge from "../badge/badge";
import styles from "./product-item.module.css";
import { NumericFormat } from "react-number-format";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <a href={"product/" + product.id}>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <Image layout="fill" objectFit="cover" alt="" src={product.image} />
        </div>
        <div className={styles.containerProduct}>
          <text className={styles.brandName}>{product.brand.name}</text>
          <text className={styles.productTitle}>{product.title}</text>
          <div className={styles.labelSpecialPrice}>
            <text>{product.specialPrice}</text>
          </div>
          <div className={styles.labelPrice}>
            <text className={styles.price}>{product.price}</text>
            <div className={styles.strike} />
          </div>
          <text>Terjual 10</text>
        </div>
        <Badge />
      </div>
    </a>
  );
};
