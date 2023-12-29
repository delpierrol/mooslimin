'use client';
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../../product/product-item";
import HomeSectionTitle from "./home-section-title";

export default async function ProductNewArrival({promise}) {
  const products = await promise;
  return (
    <div>
      <HomeSectionTitle title={'Produk Terbaru'} subtitle={'Temukan Koleksi Produk Terbaru.'} button={'Belanja produk baru'}/>
      <Container className="pb-5">
        <Row className="gy-5">
          {products.data.products.map((item) => (
            <Col xs="6" md="3" key={item.id}><ProductItem product={item} /></Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
