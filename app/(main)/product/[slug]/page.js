import Image from "next/image";
import { getProductDetail } from '@/lib/moosliminapi/products';
import PageBreadcrumb from '@/components/page-breadcrumb';
import ProductGalleries from '@/components/product/detail/product-images';
import ProductInfo from '@/components/product/detail/product-info';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default async function pageDetail({ params }) {
    const productData = await getProductDetail(params.slug);
    const product = productData.data.product;
    // console.log('productDetail', product);
    const transformedArray = product.metas.reduce((result, item) => {
        result[item.meta_key] = item.meta_value;
        return result;
    }, {});
    const metas = transformedArray;
    const imgGalleries = JSON.parse(metas.image_gallery);

    const breadcrumbs = [];
    const categories = [];
    product.category.map((category) => {
        if (category.parent_id !== null) categories.push(category);
    });
    if (categories.length) {
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];

        breadcrumbs.push({
            'title': randomCategory.category_name,
            'slug': `outfit/${randomCategory.slug}`
        });
    }

    breadcrumbs.push({
        'title': product.item_name,
        'slug': product.slug
    });

    return (
        <Container>
            <PageBreadcrumb datas={breadcrumbs} />
            <Row className='pb-5 g-5'>
                <Col sm="7 pe-0">
                    <ProductGalleries product={product} images={imgGalleries} />
                </Col>
                <Col sm="5 ps-0">
                    <ProductInfo product={product} />
                </Col>
            </Row>
        </Container>
    );
}