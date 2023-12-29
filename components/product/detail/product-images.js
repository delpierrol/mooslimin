'use client'
import Image from "next/image";
import React, { useState } from 'react';

export default function ProductGalleries({ product, images }) {
    
  const [image, setImage] = useState(images[0].media_path);
  return (
    <div className='d-flex justify-content-center'>
        <div className="img-galleries px-3 d-flex flex-column justify-content-around">
            {
                images?.map((image,index) =>
                    <div className='img-gallery' key={image.id}>
                        <a href={`#img-gallery-${image.id}`} onClick={() => {setImage(image.media_path); return false;}}>
                            <Image alt={`${product.item_name} ${index}`} width={80} height={120} src={image.media_path} />
                        </a>
                    </div>
                )
            }
        </div>
        <div className='px-3'>
            <Image alt={product.item_name} width={400} height={600} src={image} />
        </div>
    </div>
  )
}
