import React, { useState } from "react";
import Image from "next/image";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import { IoLocationSharp } from "react-icons/io5";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


import SearchBar from "@/components/shared/SearchBar";

import Select from "@/components/shared/Select";

import { sampleDealer } from "@/data/dealer";

import config from "@/utils/config";


import SectionContainer from "../SectionContainer";


const DealerSection = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const { isLoaded: isMapLoaded } = useLoadScript({
    googleMapsApiKey: `${config.google.mapApiKey}`,
  });

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral>({
    lat: 16.415079,
    lng: 120.586289,
  }); //coordinated long, lat value dito

  return (
    <SectionContainer width="wide" className="space-y-10">
      <ul className=" flex gap-5 md:gap-10 flex-wrap md:flex-nowrap">
        <li className=" w-full md:w-2/3">
          <SearchBar
            search={search}
            setSearch={setSearch}
            placeholder="Search Dealer Store Name"
          />
        </li>
        <li className=" w-full md:w-1/3">
          <Select
            select={select}
            setSelect={setSelect}
            choices={["Cavite", "Laguna", "Batangas"]}
          />
        </li>
      </ul>
      <ul className=" flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 text-white">
        <li className=" w-full order-2 lg:order-1 lg:w-1/2 xl:w-1/3 bg-secondary shadow-secondary shadow-md overflow-auto h-auto max-h-[35rem] md:h-[35rem]">
          {sampleDealer.map((item, indx) => (
            <article
              className=" space-y-3 hover:bg-white/10 cursor-pointer p-5"
              key={indx}
              onClick={() => {
                setOrigin({
                  lat: Number(item.coordinates.latitude),
                  lng: Number(item.coordinates.longitude),
                });
              }}
            >
              <p className=" font-medium">{item.title}</p>
              {item.location && (
                <aside className=" flex gap-2">
                  <IoLocationSharp className=" text-2xl" />
                  <p className=" text-[#FFFFFF]">{item.location}</p>
                </aside>
              )}
              {item.email && (
                <aside className=" flex gap-2">
                  <AiFillMail className=" text-2xl" />
                  <p className=" text-[#FFFFFF] break-words"> {item.email}</p>
                </aside>
              )}
              {item.phone_no && (
                <aside className=" flex gap-2">
                  <BsFillTelephoneFill className=" text-2xl" />
                  <p className=" text-[#FFFFFF] break-words">{item.phone_no}</p>
                </aside>
              )}
              <p className=" text-[#FFFFFF] mb-">Services Offered:</p>
              <aside>
                <ul className=" flex flex-wrap gap-5 items-center">
                  {item.services_offered.map((service, indx) => (
                    <li key={indx}>
                      <Image src={service} alt="icon" width={50} height={50} />
                    </li>
                  ))}
                </ul>
              </aside>
            </article>
          ))}
        </li>

        <li className=" w-full order-1 lg:order-2 lg:w-1/2 xl:w-2/3 aspect-[1/1] lg:aspect-[2/1]">
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
              {/* {sampleDealer?.map((dealer) => (
                <Marker
                  key={dealer.id}
                  position={{
                    lat: dealer.coordinates.latitude,
                    lng: dealer.coordinates.longitude,
                  }}
                  icon={"/assets/images/google-map/marker.png"}
                  onClick={() => {
                    setOrigin({
                      lat: dealer.coordinates.latitude,
                      lng: dealer.coordinates.longitude,
                    });
                  }}
                />
              ))} */}
            </GoogleMap>
          )}
        </li>
      </ul>
    </SectionContainer>
  );
};

export default DealerSection;
