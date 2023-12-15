import Head from "next/head";
import Layout from "../../components/layout";
import { Breadcrumb, Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import ProductList from "../../components/content/product-list/product-list";
import ProductItemOutfit from "../../components/product/product-item-outfit";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

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
            <ScrollMenu>
                <div className="d-flex pb-5">
                    {outfits.map((outfit) => (
                        <div className="px-2" style={{ width: "250px" }}><ProductItemOutfit image={outfit.image} title={outfit.category} /></div>
                    ))}
                </div>
            </ScrollMenu>
        )
        // return (
        //     <Row className="gy-5 pb-5">
        //         {outfits.map((outfit) => (
        //             <ProductItemOutfit image={outfit.image} title={outfit.category} />
        //         ))}
        //     </Row>
        // );
    }
}

