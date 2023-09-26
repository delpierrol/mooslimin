import styles from "./product-item-outfit.module.css";
const ProductItemOutfit = ({ image, title }) => {
  return (
    <div className={styles.componentproductTiles}>
      <div className={styles.propertiescomponentproductT}>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.propertiescomponentproductT1}>
        <div className={styles.productTitle}>{title}</div>
      </div>
    </div>
  );
};

export default ProductItemOutfit;
