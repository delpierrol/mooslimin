import { getBanner } from '@/lib/moosliminapi/promotions';
import Banner from '@/components/home/banner';
import { getProductLists } from '@/lib/moosliminapi/products';
import ProductNewArrival from '@/components/home/section/product-new-arrival';
import ProductBestSeller from '@/components/home/section/product-best-seller';
import { Suspense } from 'react'
import { Skeleton } from "@mui/material"

export default async function Home() {
    const bannersData = getBanner('main_banner', 10);
    const newArrivalData = getProductLists('updated_at', 'desc');
    const bestSellerData = getProductLists('total_bought', 'desc');

    return (
        <>
            <Suspense fallback={<Skeleton variant="rounded" height={600} />}>
                <Banner promise={bannersData} />
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" height={600}/>}>
                <ProductNewArrival promise={newArrivalData} />
            </Suspense>
            <Suspense fallback={<Skeleton variant="rounded" height={600}/>}>
                <ProductBestSeller promise={bestSellerData} />
            </Suspense>
        </>
    )
}