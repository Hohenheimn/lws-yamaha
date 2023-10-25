import React, { useState } from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdArrowDropDown } from 'react-icons/md'

type ProductCategoryType = {
  id: number,
  name: string,
  subCategories?: ProductSubCategoryType[]
}

type ProductSubCategoryType = {
  id: number,
  name: string,
}

type FilterType = {
  categoryId: number,
  subCategoryIds: number[]
}

export type ProductFilterType = {
  categories: ProductCategoryType[]
}


const ProductFilter = (props: ProductFilterType) => {
  const [activeCategoryIds, setActiveCategoryIds] = useState<number[]>([])
  const [filter, setFilter] = useState<FilterType[]>([])

  const addCategoryId = (id: number) => {
    if (activeCategoryIds.includes(id)) {
      const ids = activeCategoryIds.filter((categoryId) => categoryId !== id)

      return setActiveCategoryIds(ids)
    }

    return setActiveCategoryIds([...activeCategoryIds, id])
  }

  const addFilter = (args: { categoryId: number, subCategoryId: number }) => {
    // setFilter((prevState) => ))
  }


  const renderSubCategory = (args: { categoryId: number, subCategory: ProductSubCategoryType }) => {
    return <div key={args.subCategory.id} className='flex gap-3 items-center'>
      <MdOutlineCheckBox className="text-[#f1f1f1] w-5 h-5" onClick={() => addFilter({ categoryId: args.categoryId, subCategoryId: args.subCategory.id })} />
      <span className='text-[#f1f1f1]'>{args.subCategory.name}</span>
    </div>
  }

  const renderCategory = (category: ProductCategoryType) => {
    return <div key={category.id} className='flex flex-col gap-3'>
      <div className='flex gap-1 items-center cursor-pointer' onClick={() => addCategoryId(category.id)}>
        <MdArrowDropDown className="text-[#f1f1f1] w-6 h-6" />
        <span className='text-[#f1f1f1] text-lg font-semibold'>{category.name}</span>
      </div>
      <div className={`pl-6 flex flex-col gap-3 ${!activeCategoryIds.includes(category.id) && 'hidden'}`}>
        {category.subCategories?.map((subCategory) => renderSubCategory({ categoryId: category.id, subCategory }))}
      </div>
    </div>
  }

  return (
    <div className='bg-[#323232] rounded-lg px-4 py-6 flex flex-col gap-4 max-w-sm'>
      {props.categories.map(renderCategory)}
    </div>
  )
}

export default ProductFilter