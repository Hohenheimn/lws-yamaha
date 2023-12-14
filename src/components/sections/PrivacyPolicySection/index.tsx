import React from "react";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title: string;
  content: {
    title: string;
    paragraph: string;
  }[];
  address: string;
  contact: string;
  email: string;
};

const PrivacyPolicySection = (props: PropsType) => {
  const { title, content, address, contact, email } = props;
  return (
    <SectionContainer width={"wide"} className=" space-y-10">
      <article className=" space-y-5 text-[#FFFFFF] flex flex-col gap-10 lg:gap-20">
        <Heading type="h2" className=" font-medium text-center">
          {title}
        </Heading>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 flex flex-col gap-16">
            {content?.slice(0, content.length / 2).map((item, indx) => (
              <article key={indx} className="flex flex-col gap-5">
                <p className="font-medium">{item?.title}</p>
                <p className="whitespace-pre-wrap text-textGray">
                  {item?.paragraph}
                </p>
              </article>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-16">
            {content?.slice(content.length / 2).map((item, indx) => (
              <article key={indx} className="flex flex-col gap-5">
                <p className="font-medium">{item?.title}</p>
                <p className="whitespace-pre-wrap text-textGray">
                  {item?.paragraph}
                </p>
              </article>
            ))}
            <article>
              <p className=" font-medium mb-5">Data Protection Office</p>
              <p className=" font-medium whitespace-pre-wrap">{address}</p>
              <p className=" font-medium whitespace-pre-wrap">{contact}</p>
              <p className=" font-medium whitespace-pre-wrap">{email}</p>
            </article>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
};

export default PrivacyPolicySection;
