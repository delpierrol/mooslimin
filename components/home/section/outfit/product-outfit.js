import styles from "./product-outfit.module.css";
import SectionTitle from "../home-section-title";
import ProductItemOutfit from "../../../product/product-item-outfit";
const ProductOutfit = () => {
  return (
    <div>
      <SectionTitle title={'Men’s outfit Outfit/Fesyen Pria'} subtitle={'Explore based on outfit. Cari tahu berdasarkan outfit/fesyen.'} />
      <div className={styles.componentproductTilesParent}>
        <ProductItemOutfit image={'/images/product/image3@2x.png'} title={'Daily wear Baju Sehari-hari'} />
        <ProductItemOutfit image={'/images/product/image4@2x.png'} title={'Work wear Baju Kerja'} />
        <ProductItemOutfit image={'/images/product/image5@2x.png'} title={'Sports wear Baju Olah Raga'} />
        <ProductItemOutfit image={'/images/product/image6@2x.png'} title={'Baju Kajian'} />
      </div>
    </div>
  );
};

export default ProductOutfit;
