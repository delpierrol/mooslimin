import Layout from '../../components/layout';
import Head from 'next/head';
import { Breadcrumb, Container, Row, Col, Image, Button, Form, ButtonGroup, ToggleButton, Accordion } from "react-bootstrap";
import styles from './product-detail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '../../components/product/product-item';

const images = ["/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png"];

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
  }
];

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        {/* <title>{postData.title}</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Breadcrumb className="py-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Produk Detail</Breadcrumb.Item>
        </Breadcrumb>
        <Row className='pb-5 g-5'>
          <Col lg="6" sm="8">
            <div className='d-flex align-items-center'>
              <div>
                {
                  images?.map((image) =>
                    <div className='py-1'>
                      <a href='#'>
                        <Image alt='' width={"64px"} height={"96px"} src={image} />
                      </a>
                    </div>
                  )
                }
              </div>
              <div className='px-3'>
                <Image alt='' width={"400px"} height={"550px"} src={"/images/product/image@2x.png"} />
              </div>
            </div>
          </Col>
          <Col lg="6" sm="4">
            <div>
              <div className='pb-2'>Brand Name</div>
              <h2 className={styles.productName}>Product Name</h2>
              <h3 className={styles.price}>IDR 10000</h3>
              <div className={styles.description}>Description</div>
              <div className='mb-2'>
                <div className='mb-2'>Pilih Ukuran: </div>
                <Container>
                  <div className='inline row gap-3'>
                    <label className='text-center py-2' style={{ cursor: "pointer", border: "1px solid var(--typography-color-active)", borderRadius: "50px", width: "100px", color: "var(--typography-color-body)" }}>
                      <input type="radio" name="s" value="s" hidden />
                      S</label>
                    <label className='text-center py-2' style={{ cursor: "pointer", border: "1px solid var(--typography-color-mute)", borderRadius: "50px", width: "100px", color: "var(--typography-color-body)" }}>
                      <input type="radio" name="m" value="m" hidden />
                      M</label>
                  </div>
                </Container>
              </div>
              <hr />
              <div className='mb-2'>
                <div className='mb-2'>Pilih Warna: </div>
                <Container>
                  <div className='inline row gap-3'>
                    <div className={styles.round} style={{ border: "1px solid #000" }}>
                      <label for="radio" style={{ backgroundColor: "red" }}></label>
                      <input type="radio" />
                    </div>
                    <div className={styles.round} style={{ border: "" }}>
                      <label for="radio" style={{ backgroundColor: "blue" }}></label>
                      <input type="radio" />
                    </div>
                  </div>
                </Container>
              </div>
              <hr />
              <div>
                <Row>
                  <Col md="6">
                    <div>Pilih kuantitas:</div>
                  </Col>
                  <Col md="6">
                    <div className='d-flex align-items-center'>
                      <div className='pe-3'>Stock: {"0"}</div>
                      <div className={styles.containerQty}>
                        <Button className={styles.btnQty}>-</Button>
                        <Form.Control type="text" placeholder="0" className={styles.formControl} />
                        <Button className={styles.btnQty}>+</Button>
                      </div></div>
                  </Col>
                </Row>
              </div>
              <hr />
              <Button className='btn-primary w-100 my-2' size="lg">MASUKKAN KERANJANG +</Button>
              <div className='text-center mb-5'>
                <a type='button'>
                  <div style={{ padding: "16px" }}><FontAwesomeIcon icon={faShareNodes} /></div>
                  <span>Sebarkan</span>
                </a>
              </div>
              <Accordion defaultActiveKey="detail">
                <Accordion.Item>
                  <Accordion.Header>Detail</Accordion.Header>
                  <Accordion.Body className="p-0 align-items-center">
                    <div className='my-3'>
                      <div className='mb-3'>Material</div>
                      <div className='mb-2'>- Nama Bahan</div>
                      <div className='mb-2'>- Jenis Bahan</div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
        <div className='py-5'>
          <h2 className='pb-3 text-center'>Pasangkan dengan</h2>
          <Row>
            {products.map((item) => (
              <Col xs="6" md="3"><ProductItem product={item} /></Col>
            ))}
          </Row>
        </div>
        <div className='py-5'>
          <h2 className='pb-3 text-center'>Sahabat mungkin tertarik</h2>
          <Row>
            {products.map((item) => (
              <Col xs="6" md="3"><ProductItem product={item} /></Col>
            ))}
          </Row>
        </div>
      </Container>
    </Layout>
  );
}