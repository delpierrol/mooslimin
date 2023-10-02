import SectionTitle from "../home-section-title";
import ProductItem from "../../../product/product-item";
import { Col, Container, Row } from "react-bootstrap";
export default function ProductBestSeller() {

  const rows = [];
  for (let i = 0; i < 4; i++) {
    rows.push(
      <Col xs="6" md="3"><ProductItem image={'/images/product/image7@2x.png'} /></Col>
    );
  }

  return (
    <div>
      <SectionTitle title={'Mooslimin Best Sellers Yang Laris Manis di Mooslimin'} subtitle={'The outfit everyone is buying. Favorit outfit setiap Mooslimin'} />
      <Container className="pb-5">
        <Row>{rows}</Row>
      </Container>
    </div>
  );
};
