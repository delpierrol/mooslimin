import Head from "next/head";
import Layout from "../../components/layout";
import { Breadcrumb, Container, Image } from "react-bootstrap";
import ProductList from "../../components/content/product-list/product-list";
import { Grade, Lens } from "@mui/icons-material";

export default function BrandDetail() {
    return (
        <Layout>
            <Head>

            </Head>
            <Container>
                <Breadcrumb className="py-4">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Produk Detail</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <BrandBanner />
            <BrandProfile />
            <BrandSocmed />
            <BrandDescription />
            <ProductList />
        </Layout>
    )

    function BrandBanner() {
        return (
            <div className="d-wrapper mb-5 text-center" style={{ width: "100%", height: 400 }}>
                <Image src={"https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=740&t=st=1696930839~exp=1696931439~hmac=6af8b4c7ec33e8b5d691d6777f182eb26f47c05a6b9a50864fb9d65a6c755b96"}
                    style={{ width: "100%", height: 400 }}
                />
                <Image src="https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=740&t=st=1696930839~exp=1696931439~hmac=6af8b4c7ec33e8b5d691d6777f182eb26f47c05a6b9a50864fb9d65a6c755b96"
                    roundedCircle
                    style={{
                        position: 'relative',
                        top: -60,
                        width: 112,
                        height: 112,
                        border: "3px solid #fff"
                    }} />
            </div>
        )
    }

    function BrandProfile() {
        return (
            <Container className="mb-3 text-center">
                <h2>Deryansha</h2>
                <div>
                    <div className="d-inline align-items-center">
                        <Grade />
                        <label className="px-2 align-middle" style={{ fontSize: "18px" }}>0.0</label>
                    </div>
                    <Lens />
                    {/* <Circle className="mx-2"  width={5} height={5} color="var(--typography-color-inactive)" /> */}
                    <label className="px-2 align-middle" style={{ fontSize: "18px" }}>0 Ulasan</label>
                </div>
            </Container>
        )
    }
    function BrandSocmed() {
        return (
            <Container className="mb-3 text-center">
                <a href="#"><img style={{ width: 32, height: 32 }} alt="Instagram" src="/images/component/footer/icon/instagram.svg" /></a>
                <a href="#"><img style={{ width: 32, height: 32 }} alt="Tiktok" src="/images/component/footer/icon/tiktok.svg" /></a>
                <a href="#"><img style={{ width: 32, height: 32 }} alt="Facebook" src="/images/component/footer/icon/facebook.svg" /></a>
                <a href="#"><img style={{ width: 32, height: 32 }} alt="Youtube" src="/images/component/footer/icon/youtube.svg" /></a>
            </Container>
        )
    }
    function BrandDescription() {
        return (
            <Container className="mb-3 text-center">
                <text style={{ lineHeight: 1.5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</text>
            </Container>
        )
    }
}