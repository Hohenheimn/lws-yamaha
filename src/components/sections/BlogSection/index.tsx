import React from 'react'
import Image from 'next/image'

export type BlogType = {
    id: number,
    backgroundImage: string,
    title: string,
    description: string
}

type PropsType = {
    blog: BlogType
}

const BlogSection = (props: PropsType) => {
    return (
        <div className='relative w-full'>
            <Image fill src={props.blog.backgroundImage} alt={props.blog.title} className='object-cover' />
            <div className='relative flex flex-col gap-4 p-5 md:p-10 whitespace-pre-wrap bg-gradient-to-r from-black to-transparent text-[#f1f1f1]'>
                <h2 className='text-xl font-semibold'>{props.blog.title}</h2>
                <p className='lg:w-[70%]'>{props.blog.description}</p>
            </div>
        </div>
    )
}

export default BlogSection