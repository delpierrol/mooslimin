import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../../../product/product-item";
import HomeSectionTitle from "../home-section-title";

export default function ProductNewArrival() {
  const images = ["/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png"];
  return (
    <div>
      <HomeSectionTitle title={'New arrivals Produk Baru'} subtitle={'Check out what’s new. Cari tahu yang baru.'} />
      <Container className="pb-5">
        <Row>
          {images.map((image) => (
            <Col xs="6" md="3"><ProductItem image={image} /></Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
