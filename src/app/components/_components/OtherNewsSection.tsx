import NewsSection from '@/components/sections/NewsSection'
import newsCardData from '@/data/news/newsCard'
import React from 'react'

const OtherNewsSection = () => {
    const news = Array(3).fill('').map((_, index) => ({ ...newsCardData, id: index + 1, onClick: () => console.log(`News Card ${index + 1}`) }))


    return (
        <NewsSection title='Other News' news={news} />
    )
}

export default OtherNewsSection