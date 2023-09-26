import ProductItem from "../../../product/product-item";
import SectionTitle from "../home-section-title";
import styles from "./../new-arrival/product-new-arrival.module.css";
const ProductNewArrival = () => {
  return (
    <div>
      <SectionTitle title={'New arrivals Produk Baru'} subtitle={'Check out what’s new. Cari tahu yang baru.'} />
      <div className={styles.image33Parent}>
        <ProductItem image={'/images/product/image@2x.png'} />
        <ProductItem image={'/images/product/image@2x.png'} />
        <ProductItem image={'/images/product/image@2x.png'} />
        <ProductItem image={'/images/product/image@2x.png'} />
      </div>
    </div>
  );
};

export default ProductNewArrival;
