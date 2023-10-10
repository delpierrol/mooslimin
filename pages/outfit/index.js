import Head from "next/head";
import Layout from "../../components/layout";
import { Breadcrumb, Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import ProductList from "../../components/content/product-list/product-list";
import ProductItemOutfit from "../../components/product/product-item-outfit";

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

export default function Outfit() {
    return (
        <Layout outift>
            <Head>
                {/* <title>{siteTitle}</title> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Container>
                <Breadcrumb className="py-4">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Produk Terbaru</Breadcrumb.Item>
                </Breadcrumb>
                <BannerCategory />
                <ProductList />
            </Container>

        </Layout>
    );

    function BannerCategory() {
        return (
            <Carousel>
                {outfits.map((outfit) => (
                    <CarouselItem className="slide">
                        <ProductItemOutfit image={outfit.image} title={outfit.category} />
                    </CarouselItem>
                ))}
            </Carousel>
        )

        return (
            <Row className="gy-5 pb-5 ">
                {outfits.map((outfit) => (
                    <ProductItemOutfit image={outfit.image} title={outfit.category} />
                ))}
            </Row>
        );
    }
}

