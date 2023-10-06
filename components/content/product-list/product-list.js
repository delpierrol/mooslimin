import { Col, Container, Form, Pagination, Row, Stack } from "react-bootstrap";
import ProductItem from "../../product/product-item";
import Filter from "./filter/filter";

export default function ProductList() {
    const images = ["/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png"];
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Container>
            <Row className="gx-5 py-5">
                <Col md="3">
                    <Filter />
                </Col>
                <Col md="9">
                    <div>
                        <div className="pb-3 d-flex align-items-center justify-content-end">
                            <div>Urutkan {"10"} produk berdasarkan:</div>
                            <Form.Select aria-label="sort" class="border-none p-2" style={{ border: "none" }}>
                                <option value="1">Rekomendasi</option>
                                <option value="2">Terbaru</option>
                                <option value="3">Terlaris</option>
                                <option value="4">Harga Rendah ke Tinggi</option>
                                <option value="5">Harga Tinggi ke Rendah</option>
                            </Form.Select>
                        </div>
                        <Row className="gy-5">
                            {images.map((image) => (
                                <Col xs="6" md="4"><ProductItem image={image} /></Col>
                            ))}
                        </Row>
                        <Row>
                            <Pagination className="pt-5 d-flex justify-content-center">
                                {items}
                            </Pagination>
                        </Row>


                    </div>
                </Col>
            </Row>
        </Container>
    );
}