'use client'

import Image from 'next/image'
import React from 'react'

export type ProductCardType = {
    id: number;
    title: string,
    image: string,
    price: number,
    onClick(): void
}

type PropsType = ProductCardType

const ProductCard = (props: PropsType) => {
    return (
        <figure className='productCard h-fit flex flex-col gap-4 w-[300px] flex-0'>
            <div onClick={props.onClick} className='relative w-full h-[300px] bg-[#323232] rounded-lg cursor-pointer'>
                <Image fill src={props.image} alt={props.title} className='p-7 object-contain object-center' />
            </div>

            <figcaption onClick={props.onClick} className='w-fitcursor-pointer'>
                <p className='productName text-[#f1f1f1] line-clamp-2 text-ellipsis'>{props.title}</p>
                <p className='productPrice font-bold text-[#A3A3A3] line-clamp-1'>
                    {/* &#8369; */}
                    P {props.price.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>
            </figcaption>
        </figure>
    )
}

export default ProductCard