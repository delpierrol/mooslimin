import styles from "./brand-title.module.css";
const BrandTitle = () => {
  return (
    <div className={styles.text}>
      <div className={styles.ourTrustedBrands}>
        Our trusted brands Brand kepercayaan kami
      </div>
      <div className={styles.curatedBrandsAndContainer}>
        <span className={styles.curatedBrandsAndContainer1}>
          <p className={styles.curatedBrandsAnd}>
            Curated brands and items by Mooslimin, trusted and 100%
          </p>
          <p
            className={styles.curatedBrandsAnd}
          >{`guarantee of islamic-way of live. `}</p>
          <p
            className={styles.curatedBrandsAnd}
          >{`Setiap produk di Mooslimin telah melalui proses kurasi. `}</p>
          <p className={styles.curatedBrandsAnd}>
            Kami garansi 100% secara Islami insya Allah.
          </p>
        </span>
      </div>
    </div>
  );
};

export default BrandTitle;
