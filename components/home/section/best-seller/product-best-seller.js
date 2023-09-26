import styles from "./product-best-seller.module.css";
import SectionTitle from "../home-section-title";
import ProductItem from "../../../product/product-item";
const ProductBestSeller = () => {
  return (
    <div>
      <SectionTitle title={'Mooslimin Best Sellers Yang Laris Manis di Mooslimin'} subtitle={'The outfit everyone is buying. Favorit outfit setiap Mooslimin'} />
      <div className={styles.componentproductTilesParent}>
        <ProductItem image={'/images/product/image7@2x.png'} />
        <ProductItem image={'/images/product/image4@2x.png'} />
        <ProductItem image={'/images/product/image8@2x.png'} />
        <ProductItem image={'/images/product/image9@2x.png'} />
      </div>
    </div>
  );
};

export default ProductBestSeller;
