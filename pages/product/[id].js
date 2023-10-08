import Layout from '../../components/layout';
import Head from 'next/head';
import { Breadcrumb, Container, Row, Col, Image, Button, Form } from "react-bootstrap";
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
        <Row className='pb-5'>
          <Col md="6" className='px-5'>
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
          <Col md="6">
            <div>
              <div className='pb-2'>Brand Name</div>
              <h2 className={styles.productName}>Product Name</h2>
              <h3 className={styles.price}>IDR 10000</h3>
              <div className={styles.description}>Description</div>
              {/* <div>
                <div>Pilih Ukuran: </div>
                <div className={styles.roundSize} style={{ border: "1px solid #000" }}>
                  <label for="radio">S</label>
                  <input type="radio" />
                </div>
              </div> */}
              <div>
                <div>Pilih Warna: </div>
                <div className={styles.round} style={{ border: "1px solid #000" }}>
                  <label for="radio" style={{ backgroundColor: "red" }}></label>
                  <input type="radio" />
                </div>
              </div>
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
                        <Form.Control type="text" placeholder="0" />
                        <Button className={styles.btnQty}>+</Button>
                      </div></div>
                  </Col>
                </Row>
              </div>
              <Button className='btn-primary w-100 my-5' size="lg">MASUKKAN KERANJANG +</Button>
              <div className='text-center'>
                <a type='button'>
                  <div style={{ padding: "16px" }}><FontAwesomeIcon icon={faShareNodes} /></div>
                  <span>Sebarkan</span>
                </a>
              </div>
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