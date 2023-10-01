import styles from "./product-outfit.module.css";
import SectionTitle from "../home-section-title";
import ProductItemOutfit from "../../../product/product-item-outfit";
import { Col, Container, Row } from "react-bootstrap";
const ProductOutfit = () => {
  const images = ["/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png", "/images/product/image@2x.png"];
  const outfits = [
    {
      category: 'Stelan Ibadah',
      image: '/images/product/image3@2x.png'
    },
    {
      category: 'Safar',
      image: '/images/product/image3@2x.png'
    },
    {
      category: 'Stelan Ngantor Formal',
      image: '/images/product/image3@2x.png'
    },
    {
      category: 'Stelan Harian',
      image: '/images/product/image3@2x.png'
    }
  ]
  return (
    <div>
      <SectionTitle
        title={'Men’s outfit Outfit/Fesyen Pria'}
        subtitle={'Explore based on outfit. Cari tahu berdasarkan outfit/fesyen.'}
        onClick={{}}
      />
      <Container className="pb-5">
        <Row>
          {outfits.map((outfit) => (
            <Col xs="6" md="3">
              <ProductItemOutfit image={outfit.image} title={outfit.category} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <div className={styles.componentproductTilesParent}>
        <ProductItemOutfit image={'/images/product/image3@2x.png'} title={'Daily wear Baju Sehari-hari'} />
        <ProductItemOutfit image={'/images/product/image4@2x.png'} title={'Work wear Baju Kerja'} />
        <ProductItemOutfit image={'/images/product/image5@2x.png'} title={'Sports wear Baju Olah Raga'} />
        <ProductItemOutfit image={'/images/product/image6@2x.png'} title={'Baju Kajian'} />
      </div> */}
    </div>
  );
};

export default ProductOutfit;
