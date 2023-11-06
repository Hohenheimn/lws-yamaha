
import YamahaHistoryCard from '@/components/news/YamahaHistoryCard'
import newsCardData from '@/data/news/newsCard'
import yamahaHistory from '@/data/yamahaHistory'

const YamahaHistoryCardComponent = () => {
    return (
        <YamahaHistoryCard {...yamahaHistory[0]} onClick={() => console.log(newsCardData)} />
    )
}

export default YamahaHistoryCardComponent