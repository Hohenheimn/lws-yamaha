import ProductFilter from '@/components/partsAndAccessories/ProductFilter'
import productsFilterData from '@/data/partsAndAccessories/productsFilter'
import React, { useState } from 'react'

const ProductFilterComponent = () => {
    const [categoryActiveId, setCategoryActiveId] = useState<number>()

    const handleOnClickCategory = (categoryId: number) => {
        setCategoryActiveId(categoryId)
    }

    const handleOnChangeFilter = (subCategoryIds: number[]) => {
        console.log(subCategoryIds)
    }

    return (
        <ProductFilter
            activeCategoryId={categoryActiveId}
            onClickCategory={handleOnClickCategory}
            categories={productsFilterData}
            onChangeFilter={handleOnChangeFilter}
        />
    )
}

export default ProductFilterComponent