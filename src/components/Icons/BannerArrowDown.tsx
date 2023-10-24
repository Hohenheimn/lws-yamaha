import React from "react";
import Link from "next/link";

import { iconsPropType } from "./SocialIcons/Instagram";

function BannerArrowDown({ width, height, color, link }: iconsPropType) {
  return (
    <Link href={link}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 84 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_801_27)">
          <path
            d="M44.9069 69.7518L77.0745 43.0699C77.6252 42.6093 78.0831 42.0399 78.4218 41.3944C78.7605 40.7489 78.9733 40.0401 79.048 39.3087C79.1228 38.5773 79.0579 37.8377 78.8573 37.1325C78.6566 36.4273 78.324 35.7703 77.8787 35.1993C77.4362 34.6259 76.8893 34.1492 76.2694 33.7966C75.6494 33.4439 74.9686 33.2223 74.2662 33.1445C73.5637 33.0667 72.8534 33.1342 72.176 33.3432C71.4987 33.5521 70.8677 33.8984 70.3193 34.362L41.5293 58.1971L12.7394 33.1898C12.1973 32.7205 11.5718 32.367 10.8985 32.1495C10.2252 31.9319 9.5173 31.8546 8.81529 31.922C8.11329 31.9894 7.43092 32.2002 6.80717 32.5422C6.18342 32.8842 5.63049 33.3509 5.18 33.9155C4.40002 34.9274 3.98296 36.1906 4.00053 37.488C3.99925 38.308 4.17153 39.1183 4.50511 39.8612C4.83869 40.604 5.32539 41.2612 5.93059 41.7861L38.0981 69.6959C39.0512 70.5248 40.2511 70.9836 41.4929 70.9937C42.7347 71.0039 43.9414 70.5649 44.9069 69.7518Z"
            fill={color}
          />
        </g>
        <g filter="url(#filter1_d_801_27)">
          <path
            d="M44.0983 30.9108L68.5456 9.70217C68.9642 9.33602 69.3121 8.8834 69.5695 8.37033C69.827 7.85725 69.9887 7.29384 70.0455 6.71247C70.1023 6.1311 70.053 5.54325 69.9005 4.98268C69.748 4.42212 69.4952 3.89991 69.1568 3.44607C68.8205 2.99027 68.4049 2.61133 67.9337 2.33103C67.4625 2.05073 66.9451 1.8746 66.4113 1.81275C65.8774 1.75091 65.3375 1.80457 64.8228 1.97065C64.308 2.13673 63.8284 2.41196 63.4116 2.78052L41.5313 21.7263L19.6509 1.84876C19.239 1.47571 18.7635 1.19471 18.2518 1.0218C17.7401 0.848887 17.2021 0.787459 16.6686 0.841024C16.1351 0.894588 15.6165 1.0621 15.1424 1.33398C14.6684 1.60586 14.2482 1.97678 13.9058 2.42556C13.313 3.2299 12.996 4.23399 13.0094 5.26522C13.0084 5.91705 13.1393 6.56112 13.3929 7.1516C13.6464 7.74209 14.0163 8.2645 14.4762 8.68167L38.9236 30.8664C39.6479 31.5253 40.5598 31.8899 41.5036 31.898C42.4474 31.9061 43.3645 31.5572 44.0983 30.9108Z"
            fill={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_801_27"
            x="0"
            y="31.8984"
            width="83.0781"
            height="47.0955"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_801_27"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_801_27"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_801_27"
            x="9.00977"
            y="0.822266"
            width="65.0586"
            height="39.0759"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_801_27"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_801_27"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Link>
  );
}

export default BannerArrowDown;
