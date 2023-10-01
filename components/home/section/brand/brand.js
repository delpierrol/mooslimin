import { Col, Container, Row } from "react-bootstrap";
import styles from "./brand.module.css";
const Brand = () => {

  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(
      <Col md="4">
        <div className={styles.brand}>
          <div className={styles.card}>
            <img className={styles.imageBrand} alt="" src="/banner@2x.png" />
            <div className={styles.header}>
              <div className={styles.text}>
                <div className={styles.brandName}>Mabrook.idn</div>
                <div className={styles.info}>
                  <div className={styles.icon}>
                    <img className={styles.starIcon} alt="" src="/star.svg" />
                    <div className={styles.brandRating}>4.50</div>
                  </div>
                  <div className={styles.dot} />
                  <div className={styles.brandReview}>14 Reviews</div>
                </div>
              </div>
              <div className={styles.headerChild} />
            </div>
            <div className={styles.badge}>
              <div className={styles.mabrookidn}>NEW</div>
            </div>
          </div>
        </div>
      </Col>
    );
  }


  return (
    <Container className="mb-5">
      <div className={styles.containerTitle}>
        <div className={styles.title}>
          Brand Terpercaya
        </div>
        <div className={styles.containerSubtitle}>
          <p className={styles.subtitle}>
            Brand & produk terpercaya yang telah terkurasi secara Islami.
          </p>
        </div>
      </div>
      <Row>
        {rows}
      </Row>
    </Container>
  );
};

export default Brand;
