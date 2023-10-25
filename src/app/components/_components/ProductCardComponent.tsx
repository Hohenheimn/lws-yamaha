import ProductCard from '@/components/partsAndAccessories/ProductCard'
import productsData from '@/data/partsAndAccessories/products'
import React from 'react'

const ProductCardComponent = () => {
    return (
        <ProductCard {...productsData?.[0]} onClick={() => console.log(productsData[0])} />
    )
}

export default ProductCardComponent