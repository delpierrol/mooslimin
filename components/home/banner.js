'use client';
import Carousel from 'react-bootstrap/Carousel';

export default async function Banner({promise}) {
	const banners = await promise
	
	return (
		<Carousel className='pb-5'>
			{banners.data.promotions.map(banner => {
				const transformedArray = banner.metas.reduce((result, item) => {
					result[item.meta_key] = item.meta_value;
					return result;
				}, {});
				const metas = transformedArray;
				const image = JSON.parse(metas.image);
				return (<Carousel.Item key={banner.id}>
					<img
						className="d-block w-100"
						src={image.media_path}
						alt="First slide"
					/>
				</Carousel.Item>)
			})}
		</Carousel>
	);
}