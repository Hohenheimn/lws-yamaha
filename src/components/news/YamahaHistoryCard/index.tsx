import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

export type YamahaHistoryType = {
    id: number,
    image: string,
    title: string,
    description: string
    externalLink: string
}

type PropsType = YamahaHistoryType & {
    onClick(): void
}

const YamahaHistoryCard = (props: PropsType) => {
    return (
        <figure className='min-w-[300px] max-w-[500px] flex flex-col gap-5'>
            <div className='relative w-full h-[300px] rounded-lg overflow-hidden bg-[#464646]'>
                <Image fill src={props.image} alt={props.title} className='object-cover' />
            </div>
            <figcaption className='flex flex-col gap-3'>
                <p className='text-[#f1f1f1] font-semibold text-2xl line-clamp-2'>{props.title}</p>
                <p className='text-[#A3A3A3] line-clamp-4'>{props.description}</p>
                <div className='flex gap-3 w-fit items-center'>
                    <button className='text-[#f1f1f1] rounded-full bg-[#D52B1E] w-full font-medium text-lg py-2 px-7 mt-3'>Read More</button>
                    <Link href={props.externalLink}><HiOutlineExternalLink className='text-[#f1f1f1] cursor-pointer text-3xl h-fit mt-3' /></Link>
                </div>
            </figcaption>
        </figure>
    )
}

export default YamahaHistoryCard