import { Col, Container, Row } from "react-bootstrap";
import styles from "./brand.module.css";
import ItemBrand from "../../../brand/item-brand";
const Brand = () => {

  const brands = [
    {
      id: 1,
      name: "Brand 1",
      rating: 4.0,
      reviews: []
    },
    {
      id: 2,
      name: "Brand 2",
      rating: 4.0,
      reviews: []
    }
  ];


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
        {brands.map((brand) => <Col md="4">
          <ItemBrand brand={brand} />
        </Col>)}
      </Row>
    </Container>
  );
};

export default Brand;
