'use client'

import ProductCard from '@/components/partsAndAccessories/ProductCard'
import ProductCardList from '@/components/partsAndAccessories/ProductCardList'
import ProductFilter from '@/components/partsAndAccessories/ProductFilter'
import productsData from '@/data/partsAndAccessories/products'
import productsFilterData from '@/data/partsAndAccessories/productsFilter'
import React, { ReactNode, useMemo } from 'react'

const componentTitles = ["Product Card", "Product Card List", "Product Filter"]

const ComponentsPage = () => {
    const renderComponent = (args: { title: string; component: ReactNode }) => {
        return <fieldset id={args.title} className='border border-solid-[#f1f1f1] p-4 rounded-lg'>
            <legend className='text-[#f1f1f1] font-bold px-4'>{args.title}</legend>
            {args.component}
        </fieldset>
    }

    const renderSideMenu = useMemo(() => {
        return <aside className='bg-[#404040] py-4 px-7  flex flex-col gap-2 rounded-lg m-4 mr-0'>
            {componentTitles.map((title) => (
                <a key={title} href={`/components#${title}`} className='text-[#f1f1f1] font-semibold'>{title}</a>
            ))}
        </aside>
    }, [])

    return (
        <div className='flex'>
            {renderSideMenu}
            <div className='flex flex-col gap-4 p-4 flex-1 h-screen overflow-y-auto scroll-smooth'>
                {/* Product Card */}
                {renderComponent({ title: 'Product Card', component: <ProductCard {...productsData[0]} onClick={() => console.log(productsData[0])} /> })}
                {/* Product Card List */}
                {renderComponent({
                    title: 'Product Card List', component: <div className='flex flex-col gap-16'>
                        <ProductCardList title={'HJC Helmets'} products={productsData.map((product) => ({ ...product, onClick: () => console.log(product) }))} />
                        <ProductCardList title={'Related Products'} products={productsData.map((product) => ({ ...product, onClick: () => console.log(product) }))} />
                    </div>
                })}
                {/* Product Filter */}
                {renderComponent({ title: 'Product Filter', component: <ProductFilter categories={productsFilterData} /> })}
                {/* Use the "renderComponent" when you want to add more components, don't forget to add the same title to the "componentsTitle" */}
            </div>
        </div>
    )
}

export default ComponentsPage
