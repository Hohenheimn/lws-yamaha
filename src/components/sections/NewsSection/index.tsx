import { NewsCardType } from '@/components/news/NewsCard'
import NewsCardList from '@/components/news/NewsCardList'
import ArrowTitle from '@/components/shared/ArrowTitle';

type PropsType = {
    title: string;
    news: NewsCardType[]
}

const NewsSection = (props: PropsType) => {


    return (
        <div className='flex flex-col gap-10'>
            <ArrowTitle title={props.title} />
            <NewsCardList news={props.news} />
        </div>

    )
}

export default NewsSection