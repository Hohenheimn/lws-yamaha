import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export type BreadcrumpType = {
    id: number,
    name: string,
    link: string,
}

type PropsType = {
    breadcrupms: BreadcrumpType[]
}

const Breadcrumps = (props: PropsType) => {
    const pathname = usePathname()


    return (
        <div className='bg-[#1C1C1C] py-5 px-10 flex flex-wrap gap-2'>
            {props.breadcrupms.map((breadcrump, index) => (
                <Link key={breadcrump.id} href={breadcrump.link} className={`flex gap-2 items-center ${pathname === breadcrump.link ? 'text-[#f1f1f1] font-semibold' : 'text-[#8D8D8D]'}`}>
                    <span>{breadcrump.name}</span>
                    {index + 1 < props.breadcrupms.length && <MdKeyboardArrowRight className="w-5 h-5" />}
                </Link>
            ))}
        </div>
    )
}

export default Breadcrumps