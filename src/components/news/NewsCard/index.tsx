import Image from 'next/image'

export type NewsCardType = {
    id: number,
    image: string,
    date: string,
    title: string,
    description: string,
    onClick(): void
}

type PropsType = NewsCardType

const NewsCard = (props: PropsType) => {
    return (
        <figure className='bg-[#323232] min-w-[300px] max-w-[500px] rounded-lg overflow-hidden'>
            <div className='relative w-full h-[300px] bg-[#464646]'>
                <Image fill src={props.image} alt={props.title} />
            </div>
            <figcaption className='p-5 flex flex-col gap-2'>
                <p className='text-[#f1f1f1]'>{props.date}</p>
                <p className='text-[#f1f1f1] font-semibold text-2xl line-clamp-2'>{props.title}</p>
                <p className='text-[#A3A3A3] line-clamp-4'>{props.description}</p>
                <button className='text-[#f1f1f1] rounded-lg bg-[#D52B1E] w-full font-semibold text-xl p-2 mt-3'>Read More</button>
            </figcaption>
        </figure>
    )
}

export default NewsCard