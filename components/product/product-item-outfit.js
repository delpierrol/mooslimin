import styles from "./product-item-outfit.module.css";
export default function ProductItemOutfit({ image, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img className={styles.image} alt="" src={image} />
      </div>
      <div className={styles.categoryName}>{title}</div>
    </div>
  );
};