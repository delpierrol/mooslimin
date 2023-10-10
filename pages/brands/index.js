import Head from "next/head";
import Layout from "../../components/layout";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import BannerContent from "../../components/content/banner-content";
import ItemBrand from "../../components/brand/item-brand";

const brands = [
    {
        id: 1,
        name: "Brand 1",
        rating: 4.0,
        reviews: []
    },
    {
        id: 2,
        name: "Brand 2",
        rating: 4.0,
        reviews: []
    }
];


export default function Brands() {

    return (
        <Layout outift>
            <Head>
                {/* <title>{siteTitle}</title> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Container>
                <BannerContent title={"Telusuri Brand"} subtitle={"Brand & produk yang InsyaAllah telah terkurasi dengan baik oleh Mooslimin"} />
                <Row>
                    {brands.map((brand) => <Col md="4">
                        <ItemBrand brand={brand} />
                    </Col>)}
                </Row>
            </Container>

        </Layout>
    );
}

