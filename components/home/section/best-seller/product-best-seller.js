import SectionTitle from "../home-section-title";
import ProductItem from "../../../product/product-item";
import { Col, Container, Row } from "react-bootstrap";

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 100000,
    specialPrice: 80000,
    image: "/images/product/image@2x.png",
    brand: {
      id: 1,
      name: "Brand 1"
    }
  },
  {
    id: 2,
    title: 'Product 2',
    price: 100000,
    specialPrice: 80000,
    image: "/images/product/image@2x.png",
    brand: {
      id: 1,
      name: "Brand 1"
    }
  },
  {
    id: 3,
    title: 'Product 3',
    price: 100000,
    specialPrice: 80000,
    image: "/images/product/image@2x.png",
    brand: {
      id: 1,
      name: "Brand 1"
    }
  },
  {
    id: 4,
    title: 'Product 4',
    price: 100000,
    specialPrice: 80000,
    image: "/images/product/image@2x.png",
    brand: {
      id: 1,
      name: "Brand 1"
    }
  },
];

export default function ProductBestSeller() {

  // const rows = [];
  // for (let i = 0; i < 4; i++) {
  //   rows.push(
  //     <Col xs="6" md="3"><ProductItem image={'/images/product/image7@2x.png'} /></Col>
  //   );
  // }

  return (
    <div>
      <SectionTitle title={'Mooslimin Best Sellers Yang Laris Manis di Mooslimin'} subtitle={'The outfit everyone is buying. Favorit outfit setiap Mooslimin'} />
      <Container className="pb-5">
        <Row className="gy-5">
          {products.map((item) => (
            <Col xs="6" md="3"><ProductItem product={item} /></Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
