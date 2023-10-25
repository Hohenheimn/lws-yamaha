import ProductCardList from '@/components/partsAndAccessories/ProductCardList'
import productsData from '@/data/partsAndAccessories/products'
import React from 'react'

const ProductListsComponent = () => {
    return (
        <div className='flex flex-col gap-16'>
            <ProductCardList title={'HJC Helmets'} products={productsData.map((product) => ({ ...product, onClick: () => console.log(product) }))} />
            <ProductCardList title={'Related Products'} products={productsData.map((product) => ({ ...product, onClick: () => console.log(product) }))} />
        </div>
    )
}

export default ProductListsComponent