import React, { useEffect, useState } from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdArrowDropDown } from 'react-icons/md'

export type ProductFilterType = {
  id: number,
  name: string,
  subCategories?: {
    id: number,
    name: string,
  }[]
}

type PropsType = {
  activeCategoryId?: number;
  onClickCategory(categoryId: number): void;
  categories: ProductFilterType[],
  onChangeFilter(subCategoryIds: number[]): void
}

const ProductFilter = (props: PropsType) => {
  const [subCategoryIds, setSubCategoryIds] = useState<number[]>([])

  useEffect(() => {
    setSubCategoryIds([])
  }, [props.activeCategoryId])

  useEffect(() => {
    props.onChangeFilter(subCategoryIds)
  }, [subCategoryIds])

  const addSubCategoryId = (subCategoryId: number) => {
    setSubCategoryIds((prevState) => {
      if (subCategoryIds.includes(subCategoryId)) {
        return prevState.filter((id) => id !== subCategoryId)
      }

      return [...prevState, subCategoryId]
    })
  }

  const renderSubCategories = (subCategories: ProductFilterType['subCategories']) => {
    return <div className={`pl-6 flex flex-col gap-3`}>
      {subCategories?.map((subCategory) => (
        <div key={subCategory.id} onClick={() => addSubCategoryId(subCategory.id)} className='flex cursor-pointer gap-3 items-center'>
          {subCategoryIds.includes(subCategory.id) ? <MdOutlineCheckBox className="text-[#f1f1f1] w-5 h-5" /> : <MdOutlineCheckBoxOutlineBlank className="text-[#f1f1f1] w-5 h-5" />}
          <span className='text-[#f1f1f1]'>{subCategory.name}</span>
        </div>
      ))}
    </div>

  }

  return (
    <div className='bg-[#323232] rounded-lg px-4 py-6 flex flex-col gap-4 max-w-sm'>
      {props.categories.map((category) => (
        <div key={category.id} className='flex flex-col gap-3'>
          <div className='flex gap-1 items-center cursor-pointer' onClick={() => props.onClickCategory(category.id)}>
            <MdArrowDropDown className={`text-[#f1f1f1] w-6 h-6 transition-transform ${category.id === props.activeCategoryId && 'rotate-180'}`} />
            <span className='text-[#f1f1f1] text-lg font-semibold'>{category.name}</span>
          </div>
          {props.activeCategoryId === category.id && renderSubCategories(category.subCategories)}
        </div>
      ))}
    </div>
  )
}

export default ProductFilter