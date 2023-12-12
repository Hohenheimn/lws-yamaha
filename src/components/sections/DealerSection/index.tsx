"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import SearchBar from "@/components/shared/SearchBar";

import Select from "@/components/shared/Select";

import { sampleDealer } from "@/data/dealer";

import useAPI from "@/hooks/useAPI";

import config from "@/utils/config";

import validateImageUrl from "@/utils/validateImageUrl";

import SectionContainer from "../SectionContainer";
import { DealerType } from "./type";
import DebouncedInput from "@/components/shared/DebounceInput/DebounceInput";

const DealerSection = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [limit, setLimit] = useState(10);

  const { isLoaded: isMapLoaded } = useLoadScript({
    googleMapsApiKey: `${config.google.mapApiKey}`,
  });

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral>({
    lat: 16.415079,
    lng: 120.586289,
  }); //coordinated long, lat value dito

  const { useGet } = useAPI(
    `/api/dealers?q=${search}&province=${select === "All" ? "" : select}${
      search === "" && select === "All" ? `&limit=${limit}` : ""
    }`
  );
  const { useGet: useGetProvinces } = useAPI(`/api/dealers/provinces`);
  const { data, isLoading: dealerLoading }: any = useGet(
    `dealers-${search}-${select}-${limit}`,
    {
      keepPreviousData: true,
    }
  );
  const { data: provinces }: any = useGetProvinces(`provinces`);
  const dealers: DealerType[] = data?.data;

  return (
    <SectionContainer width="wide" className="space-y-10">
      <ul className=" flex gap-5 md:gap-10 flex-wrap md:flex-nowrap">
        <li className=" w-full md:w-2/3">
          <DebouncedInput
            value={search ?? ""}
            onChange={(value) => setSearch(String(value))}
          />
        </li>
        <li className=" w-full md:w-1/3">
          <Select
            select={select}
            setSelect={setSelect}
            choices={provinces?.data ? provinces?.data : []}
          />
        </li>
      </ul>
      <ul className=" flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 text-white">
        <li className=" w-full order-2 lg:order-1 lg:w-1/2 xl:w-1/3 bg-secondary shadow-secondary shadow-md overflow-auto h-auto max-h-[35rem] md:h-[35rem]">
          {dealers?.map((item, indx) => (
            <article
              className=" space-y-3 hover:bg-white/10 cursor-pointer p-5"
              key={indx}
              onClick={() => {
                setOrigin({
                  lat: Number(item?.latitude),
                  lng: Number(item?.longitude),
                });
              }}
            >
              <p className=" font-medium">{item?.name}</p>
              {item?.completeAddress && (
                <aside className=" flex gap-2">
                  <IoLocationSharp className=" text-2xl" />
                  <p className=" text-[#FFFFFF]">{item?.completeAddress}</p>
                </aside>
              )}
              {item?.emails && (
                <aside className=" flex gap-2">
                  <AiFillMail className=" text-2xl" />
                  <p className=" text-[#FFFFFF] break-words">
                    {item?.emails.join(", ")}
                  </p>
                </aside>
              )}
              {item.serviceContactNumbers && (
                <aside className=" flex gap-2">
                  <BsFillTelephoneFill className=" text-2xl" />
                  <p className=" text-[#FFFFFF] break-words">
                    {item.serviceContactNumbers.join(", ")}
                  </p>
                </aside>
              )}
              {item.facebookPageName && (
                <aside className=" flex gap-2">
                  <FaFacebookF className=" text-2xl" />
                  <p className=" text-[#FFFFFF] break-words">
                    {item.facebookPageName}
                  </p>
                </aside>
              )}
              <p className=" text-[#FFFFFF] mb-">Services Offered:</p>
              <aside>
                <ul className=" flex flex-wrap gap-5 items-center">
                  {item.dealerFacilities?.map((service, indx) => (
                    <li key={indx}>
                      <Image
                        src={validateImageUrl(service.image)}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                    </li>
                  ))}
                </ul>
              </aside>
            </article>
          ))}
          <article className=" flex w-full justify-center py-5">
            <button
              onClick={() => setLimit(limit + 10)}
              className=" px-10 py-2 bg-secondary-2 hover:bg-primary duration-150 rounded-md"
            >
              Load more
            </button>
          </article>
        </li>

        <li className=" w-full order-1 lg:order-2 lg:w-1/2 xl:w-2/3 h-auto aspect-square lg:aspect-auto lg:h-[35rem]">
          {isMapLoaded && (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={origin}
              zoom={13}
            >
              <Marker
                // key={dealer[0].id}
                position={origin}
                icon={"/assets/images/google-map/marker.png"}
                onClick={() => {
                  // setOrigin({
                  //   lat: origin.coordinates.latitude,
                  //   lng: origin.coordinates.longitude,
                  // });
                }}
              />
            </GoogleMap>
          )}
        </li>
      </ul>
    </SectionContainer>
  );
};

export default DealerSection;
