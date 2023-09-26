import styles from "./brand.module.css";
const Brand = () => {
  return (
    <div className={styles.brand}>
      <div className={styles.card}>
        <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
        <div className={styles.header}>
          <div className={styles.text}>
            <div className={styles.mabrookidn}>Mabrook.idn</div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img className={styles.starIcon} alt="" src="/star.svg" />
                <div className={styles.mabrookidn}>4.50</div>
              </div>
              <div className={styles.dot} />
              <div className={styles.mabrookidn}>14 Reviews</div>
            </div>
          </div>
          <div className={styles.headerChild} />
        </div>
        <div className={styles.badge}>
          <div className={styles.mabrookidn}>NEW</div>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.bg} />
        <div className={styles.header1}>
          <div className={styles.text}>
            <div className={styles.mabrookidn}>MAJEED</div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img className={styles.starIcon} alt="" src="/star1.svg" />
                <div className={styles.mabrookidn}>4.50</div>
              </div>
              <div className={styles.dot} />
              <div className={styles.mabrookidn}>14 Reviews</div>
            </div>
          </div>
          <div className={styles.headerChild} />
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.bg} />
        <div className={styles.header1}>
          <div className={styles.text}>
            <div className={styles.mabrookidn}>SAMASE</div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img className={styles.starIcon} alt="" src="/star2.svg" />
                <div className={styles.mabrookidn}>4.50</div>
              </div>
              <div className={styles.dot} />
              <div className={styles.mabrookidn}>14 Reviews</div>
            </div>
          </div>
          <div className={styles.headerChild} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
