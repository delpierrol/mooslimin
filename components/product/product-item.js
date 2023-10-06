import Image from "next/image";
import Badge from "../badge/badge";
import styles from "./product-item.module.css";
const ProductItem = ({ image, alt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image layout="fill" objectFit="cover" alt={alt} src={image} />
      </div>
      <div className={styles.containerProduct}>
        <div className={styles.brandName}>Brand name</div>
        <div className={styles.productTitle}>PRODUCT TITLE</div>
        <div className={styles.labelSpecialPrice}>
          <div>IDR 150.000</div>
        </div>
        <div className={styles.labelPrice}>
          <div className={styles.price}>IDR 180.000</div>
          <div className={styles.strike} />
        </div>
      </div>
      <Badge />
    </div>
  );
};

export default ProductItem;
