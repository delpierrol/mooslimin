import SectionTitle from "../home-section-title";
import styles from "./blog-content.module.css";
const BlogContent = () => {
  return (
    <div>
      <SectionTitle title={'Read our latest articles Baca artikel terbaru Mooslimin'} subtitle={'Browse article Telusuri artikel'} />
      <div className={styles.blogContent}>
        <div className={styles.blogLarge}>
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
          <div className={styles.title}>
            <div className={styles.minsRead}>6 MINS READ</div>
            <div
              className={styles.fashionMuslimPilihan}
            >{`Fashion Muslim Pilihan Terlengkap & Produk Terbaru`}</div>
            <div className={styles.info}>
              <div className={styles.moosliminTeam}>Mooslimin team</div>
              <div className={styles.infoChild} />
              <div className={styles.moosliminTeam}>01 Jan 2022</div>
            </div>
          </div>
          {/* <div className={styles.itIsA}>
            It is a long established fact that a reader will be distracted by the
            readable content of a page It is a long established fact that a reader
            will be distracted by the readable content of a page w...
          </div> */}
          <div className={styles.badge}>
            <div className={styles.moosliminTeam}>HIGHLIGHT</div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.blogSmall}>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
            <div className={styles.right}>
              <div className={styles.title1}>
                <div className={styles.minsRead}>6 MINS READ</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet
                </div>
                <div className={styles.info}>
                  <div className={styles.moosliminTeam}>Mooslimin team</div>
                  <div className={styles.infoChild} />
                  <div className={styles.moosliminTeam}>01 Jan 2022</div>
                </div>
              </div>
              {/* <div className={styles.itIsA1}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div> */}
            </div>
          </div>
          <div className={styles.blogSmall}>
            <img className={styles.image12Icon} alt="" src="/image-11@2x.png" />
            <div className={styles.right}>
              <div className={styles.title1}>
                <div className={styles.minsRead}>6 MINS READ</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet
                </div>
                <div className={styles.info}>
                  <div className={styles.moosliminTeam}>Mooslimin team</div>
                  <div className={styles.infoChild} />
                  <div className={styles.moosliminTeam}>01 Jan 2022</div>
                </div>
              </div>
              {/* <div className={styles.itIsA1}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div> */}
            </div>
          </div>
          <div className={styles.blogSmall}>
            <img className={styles.image12Icon} alt="" src="/image-121@2x.png" />
            <div className={styles.right}>
              <div className={styles.title1}>
                <div className={styles.minsRead}>6 MINS READ</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet
                </div>
                <div className={styles.info}>
                  <div className={styles.moosliminTeam}>Mooslimin team</div>
                  <div className={styles.infoChild} />
                  <div className={styles.moosliminTeam}>01 Jan 2022</div>
                </div>
              </div>
              {/* <div className={styles.itIsA1}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div> */}
            </div>
          </div>
          <div className={styles.blogSmall}>
            <img className={styles.image12Icon} alt="" src="/image-111@2x.png" />
            <div className={styles.right}>
              <div className={styles.title1}>
                <div className={styles.minsRead}>6 MINS READ</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet
                </div>
                <div className={styles.info}>
                  <div className={styles.moosliminTeam}>Mooslimin team</div>
                  <div className={styles.infoChild} />
                  <div className={styles.moosliminTeam}>01 Jan 2022</div>
                </div>
              </div>
              {/* <div className={styles.itIsA1}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
