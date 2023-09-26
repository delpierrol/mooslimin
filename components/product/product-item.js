import styles from "./product-item.module.css";
const ProductItem = ({ image }) => {
  return (
    <div className={styles.componentproductTiles}>
      <div className={styles.propertiescomponentproductT}>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.propertiescomponentproductT1}>
        <div className={styles.brandName}>Brand name</div>
        <div className={styles.productTitle}>PRODUCT TITLE</div>
        <div className={styles.price}>
          <div className={styles.propertiescomponentproductT2}>
            <div className={styles.newlyAdded}>IDR 150.000</div>
          </div>
          <div className={styles.propertiescomponentproductT3}>
            <div className={styles.idr100000}>IDR 180.000</div>
            <div className={styles.strike} />
          </div>
        </div>
      </div>
      <div className={styles.badge}>
        <div className={styles.newlyAdded}>NEWLY ADDED Paling baru</div>
      </div>
    </div>
  );
};

export default ProductItem;
