'use client'

import Link from 'next/link'
import React, { ReactNode, useMemo } from 'react'
import ProductFilterComponent from './_components/ProductFilterComponent'
import ProductCardComponent from './_components/ProductCardComponent'
import ProductListsComponent from './_components/ProductListsComponent'
import BreadcrumpsComponent from './_components/BreadcrumpsComponent'
import EmbedSocialSection from './_components/EmbedSocialSection'

const componentTitles = ["Product Card", "Product Card List", "Product Filter", 'Breadcrumps', 'Embed Socials']

const ComponentsPage = () => {
    const renderComponent = (args: { title: string; note?: string; component: ReactNode }) => {
        return <fieldset id={args.title} className='flex flex-col gap-4 border border-solid-[#f1f1f1] p-4 rounded-lg'>
            <legend className='text-[#f1f1f1] font-bold px-4'>{args.title}</legend>
            {args.note && <p className='text-[#ff6060] italic font-semibold px-4'>{args.note}</p>}
            {args.component}
        </fieldset>
    }

    const renderSideMenu = useMemo(() => {
        return <aside className='bg-[#373737] py-5 px-7 hidden md:flex flex-col gap-2 rounded-lg m-4 mr-0'>
            {componentTitles.map((title) => (
                <Link key={title} href={`/components#${title}`} className='text-[#f1f1f1] font-semibold'>{title}</Link>
            ))}
        </aside>
    }, [])

    return (
        <div className='flex'>
            {renderSideMenu}
            <div className='flex flex-col gap-4 p-4 flex-1 h-screen overflow-y-auto scroll-smooth scroll-pt-4 scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full'>
                {/* Product Card */}
                {renderComponent({ title: 'Product Card', component: <ProductCardComponent /> })}
                {/* Product Card List */}
                {renderComponent({ title: 'Product Card List', component: <ProductListsComponent /> })}
                {/* Product Filter */}
                {renderComponent({ title: 'Product Filter', component: <ProductFilterComponent /> })}
                {/* Product Filter */}
                {renderComponent({ title: "Breadcrumps", component: <BreadcrumpsComponent /> })}
                {/* Embed Social */}
                {renderComponent({ title: "Embed Socials", component: <EmbedSocialSection />, note: "Embed social card height depends on its contents" })}
                {/* Use the "renderComponent" when you want to add more components, don't forget to add the same title to the "title" property, add note if there's needed to expound the component */}

            </div>
        </div>
    )
}

export default ComponentsPage
