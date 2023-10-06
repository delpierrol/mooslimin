import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Banner from '../components/home/banner';
import ProductNewArrival from '../components/home/section/new-arrival/product-new-arrival';
import ProductOutfit from '../components/home/section/outfit/product-outfit';
import BlogContent from '../components/home/section/blog/blog-content';
import ProductBestSeller from '../components/home/section/best-seller/product-best-seller';
import Brand from '../components/home/section/brand/brand';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <ProductNewArrival />
      <ProductBestSeller />
      <ProductOutfit />
      <Brand />
      <BlogContent />
    </Layout>
  );
}