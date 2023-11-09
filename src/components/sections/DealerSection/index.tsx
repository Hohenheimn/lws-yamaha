import React, { useState } from "react";
import Image from "next/image";
import { AiFillMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import SearchBar from "@/components/shared/SearchBar";
import Select from "@/components/shared/Select";

import { sampleDealer } from "@/data/dealer";

import SectionContainer from "../SectionContainer";

const DealerSection = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  // const { isLoaded: isMapLoaded } = useLoadScript({
  //   googleMapsApiKey: config.GMAP_API_KEY,
  // });

  const [origin, setOrigin] = useState(); //coordinated long, lat value dito

  return (
    <SectionContainer width="wide" className="space-y-10">
      <ul className=" flex gap-10">
        <li className=" w-2/3">
          <SearchBar
            search={search}
            setSearch={setSearch}
            placeholder="Search Dealer Store Name"
          />
        </li>
        <li className=" w-1/3">
          <Select
            select={select}
            setSelect={setSelect}
            choices={["Cavite", "Laguna", "Batangas"]}
          />
        </li>
      </ul>
      <ul className=" flex gap-10 text-white">
        <li className=" w-1/3 bg-secondary shadow-secondary shadow-md p-5 overflow-auto h-[35rem] space-y-10">
          {sampleDealer.map((item, indx) => (
            <article className=" space-y-3" key={indx}>
              <p className=" font-medium">{item.title}</p>
              <aside className=" flex gap-2">
                <IoLocationSharp className=" text-2xl" />
                <p className=" text-[#FFFFFF]">{item.location}</p>
              </aside>
              <aside className=" flex gap-2">
                <AiFillMail className=" text-2xl" />
                <p className=" text-[#FFFFFF]"> {item.email}</p>
              </aside>
              <p className=" text-[#FFFFFF] mb-">Services Offered:</p>
              <aside>
                <ul className=" flex flex-wrap gap-5 items-center">
                  {item.services_offered.map((service, indx) => (
                    <li key={indx}>
                      <Image
                        src={service}
                        alt="icon"
                        width={50}
                        height={50}
                        layout="responsive"
                      />
                    </li>
                  ))}
                </ul>
              </aside>
            </article>
          ))}
        </li>
        <li className=" w-2/3 aspect-[2/1] border">
          {/* {isMapLoaded && (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={origin}
              zoom={13}
            >
              {dealers?.map((dealer) => (
                <Marker
                  key={dealer.id}
                  position={{
                    lat: dealer.latitude,
                    lng: dealer.longitude,
                  }}
                  icon={"/images/find_dealer/icons/map/motorcycle.png"} //eto yung mark sa map, png to maliit lang dapat
                  onClick={() =>
                    console.log(
                      "dito mo gawin yung dapat gawin once na click yung map"
                    )
                  }
                />
              ))}
            </GoogleMap>
          )} */}
        </li>
      </ul>
    </SectionContainer>
  );
};

export default DealerSection;
