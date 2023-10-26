import React from 'react'
import { FacebookEmbed } from 'react-social-media-embed'

type PropsType = {
    facebookUrl: string
}

const FacebookEmbedCard = (props: PropsType) => {
    return (
        <div className='bg-white p-1 rounded-lg h-fit overflow-hidden w-[350px]'>
            <FacebookEmbed
                width='100%'
                height='100%'
                url={props.facebookUrl}
            />
        </div>
    )
}

export default FacebookEmbedCard