import NewsCard, { NewsCardType } from '../NewsCard'

type PropsType = {
    noWrap?: boolean,
    news: NewsCardType[]
}
const NewsCardList = (props: PropsType) => {
    return (
        <div className={`flex gap-5 ${!props.noWrap && 'flex-wrap'}`}>
            {props.news.map((news) => (
                <NewsCard key={news.id} {...news} />
            ))}
        </div>
    )
}

export default NewsCardList