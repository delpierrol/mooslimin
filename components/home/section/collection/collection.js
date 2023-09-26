import styles from "./collection.module.css";
const Collection = () => {
  return (
    <div className={styles.collection}>
      <div className={styles.titleParent}>
        <div className={styles.title}>
          <div className={styles.highlight}>{`HIGHLIGHT `}</div>
          <b className={styles.dailywearCollectionKoleksiContainer}>
            <p
              className={styles.dailywearCollection}
            >{`Dailywear collection `}</p>
            <p className={styles.dailywearCollection}>Koleksi Baju Kerja</p>
          </b>
        </div>
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <div className={styles.majeedOurTrustedContainer}>
          <p
            className={styles.dailywearCollection}
          >{`MAJEED. Our trusted brand partner focusing on muslim daily and streetwear. Oversized tshirt with comfort material. `}</p>
          <p className={styles.dailywearCollection}>
            Salah satu mitra kepercayaan kami yang menyediakan outfit dengan
            gaya Muslim Daily Wear dan Streetwear. T-shirt oversize dengan bahan
            yang nyaman.
          </p>
        </div>
        <div className={styles.componentnavigationbutton}>
          <div className={styles.primaryMedium}>View all Lihat semua</div>
        </div>
      </div>
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
    </div>
  );
};

export default Collection;
