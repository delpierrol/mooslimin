import { Col, Container, Row } from "react-bootstrap";
import styles from "./brand.module.css";
import ItemBrand from "../../../brand/item-brand";
const Brand = () => {

  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(
      <Col md="4">
        <ItemBrand />
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
