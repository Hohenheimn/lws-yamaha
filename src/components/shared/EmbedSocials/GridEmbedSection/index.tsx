"use client";

import Script from "next/script";

type PropsType = {
  key?: string;
  embedId: string;
};

const GridEmbedSection = (props: PropsType) => {
  return (
    <div className="w-full" key={props?.embedId}>
      <Script
        id={props?.embedId}
        src="https://embedsocial.com/cdn/ht.js"
        dangerouslySetInnerHTML={{
          __html: `(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"))`,
        }}
        strategy="beforeInteractive"
      />
      <div
        className="embedsocial-hashtag custom-embed"
        data-ref={props?.embedId}
      />
    </div>
  );
};

export default GridEmbedSection;
