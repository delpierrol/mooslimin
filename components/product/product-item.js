import Image from "next/image";
import Badge from "../badge/badge";
import styles from "./product-item.module.css";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <a href={"product/" + product.id}>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <Image layout="fill" objectFit="cover" alt="" src={product.image} />
        </div>
        <div className={styles.containerProduct}>
          <div className={styles.brandName}>{product.brand.name}</div>
          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.labelSpecialPrice}>
            <div>{product.specialPrice}</div>
          </div>
          <div className={styles.labelPrice}>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.strike} />
          </div>
        </div>
        <Badge />
      </div>
    </a>
  );
};
