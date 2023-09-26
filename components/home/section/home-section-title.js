import styles from "./home-section-title.module.css";
const HomeSectionTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={styles.newArrivalsProduk}>{title}</div>
        <div className={styles.checkOutWhats}>{subtitle}</div>
      </div>
      <div className={styles.componentnavigationbutton}>
        <div className={styles.secondaryMedium}>
          Shop new arrival Belanja produk baru
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTitle;
