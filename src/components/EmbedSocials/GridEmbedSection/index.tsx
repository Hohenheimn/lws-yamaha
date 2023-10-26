import Script from "next/script"

type PropsType = {
    embedId: string
}

const GridEmbedSection = (props: PropsType) => {
    return (
        <>
            <Script
                id={props.embedId}
                src="https://embedsocial.com/cdn/ht.js"
                dangerouslySetInnerHTML={{
                    __html: `(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"))`,
                }}
            />
            <div className="embed-container">
                <div className="embedsocial-hashtag custom-embed" data-ref={props.embedId} />
            </div>
        </>
    )
}

export default GridEmbedSection