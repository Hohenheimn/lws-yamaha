"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import { FaLocationDot } from "react-icons/fa6";

import SectionContainer from "@/components/sections/SectionContainer";
import Button from "@/components/shared/Button";
import ControllerField from "@/components/shared/ControllerField";
import Heading from "@/components/shared/Heading";
import NotificationModal, {
  NotificationModalType,
} from "@/components/shared/NotificationModal";
import ReCaptcha from "@/components/shared/Recaptcha";
import useAPI from "@/hooks/useAPI";

type FormType = {
  name: string;
  email: string;
  type: string;
  message: string;
  recaptchaKey: string;
};

const ContactForm = () => {
  const [showModal, setShowModal] = React.useState<NotificationModalType>({
    type: "success",
    message: "Inquiry successfully sent",
    show: false,
  });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
      type: "",
      message: "",
      recaptchaKey: "",
    },
  });

  const { useGet: useGetSettings } = useAPI("/api/settings");
  const { data: contactInformation, isLoading: settingsLoading }: any =
    useGetSettings("settings-contact");

  const StringToHtmlComponent = ({ htmlString }: { htmlString: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  const { usePost } = useAPI(`/api/contact`);

  const { mutate, isLoading: mutateLoading } = usePost;

  const SubmitHandler = (data: FormType) => {
    mutate(
      { data },
      {
        onSuccess: () => {
          setShowModal({
            type: "success",
            message: "Inquiry successfully sent",
            show: true,
          });
        },
        onError: () => {
          setShowModal({
            type: "error",
            message: "Something went wrong",
            show: true,
          });
        },
      }
    );
  };

  return (
    <>
      <SectionContainer
        width={"wide"}
        className="flex flex-wrap lg:flex-nowrap items-start gap-10"
      >
        {settingsLoading ? (
          <article className=" py-10 px-10 bg-secondary space-y-10 w-full lg:w-2/4 min-h-[20rem] animate-pulse"></article>
        ) : (
          <div className="w-full lg:w-2/4">
            <StringToHtmlComponent
              htmlString={contactInformation?.data[0]?.contactInformation}
            />
          </div>
        )}

        {/* <article className=" py-10 px-10 bg-secondary space-y-10 w-full lg:w-2/4">
        <aside className=" space-y-2">
          <Heading type="h5" className=" font-medium text-white">
            Yamaha Motor Philippines is ready to serve you
          </Heading>
          <p className=" text-textGray">
            {
              "Wherever you are in the Philippines– our Customer Service will help you with any questions or requests relating to Yamaha Products.​"
            }
          </p>
        </aside>
        <aside className=" space-y-2 pb-5 border-b border-textGray">
          <p className=" text-white font-medium">Head Office</p>
          <aside className=" flex items-center gap-3">
            <FaLocationDot className=" text-white text-xl" />
            <p className=" text-textGray">
              Lots 1&2, Block 17, Phase I, LIMA Technology Center, Malvar,
              Batangas
            </p>
          </aside>
        </aside>

        <div className=" space-y-5">
          <aside className=" space-y-2">
            <Heading type="h5" className=" font-medium text-white">
              Sales Office
            </Heading>
          </aside>
          <aside className=" space-y-2 pb-5 border-b border-textGray">
            <p className=" text-white font-medium">Manila Sales Office</p>
            <aside className=" flex items-center gap-3">
              <FaLocationDot className=" text-white text-xl" />
              <p className=" text-textGray">
                Twin Oaks Place One Greenfield District,Mandaluyong City
              </p>
            </aside>
          </aside>
          <aside className=" space-y-2 pb-5 border-b border-textGray">
            <p className=" text-white font-medium">Cebu Sales Office</p>
            <aside className=" flex items-center gap-3">
              <FaLocationDot className=" text-white text-xl" />
              <p className=" text-textGray">
                8th floor FPN Epic Ctr., AS Fortuna Street, Barangay Bakilid,
                Mandaue City
              </p>
            </aside>
          </aside>
          <aside className=" space-y-2 pb-5 border-b border-textGray">
            <p className=" text-white font-medium">Davao Sales Office</p>
            <aside className=" flex items-center gap-3">
              <FaLocationDot className=" text-white text-xl" />
              <p className=" text-textGray">
                Unit 4, 5 & 6 Bagsai Complex, Sta. Ana Ave.,Davao City
              </p>
            </aside>
          </aside>
        </div>
      </article> */}

        <article className="w-full lg:w-2/4">
          <aside className=" mb-5">
            <Heading type="h5" className=" font-medium text-white">
              Contact Us
            </Heading>
            <p className=" text-textGray">
              Ask anything to us. We will get back to you as soon as we can
            </p>
          </aside>
          <form onSubmit={handleSubmit(SubmitHandler)} className=" space-y-2">
            <ul className=" grid grid-cols-2 gap-y-5 gap-x-3">
              <li className=" col-span-2">
                <ControllerField
                  control={control}
                  errors={errors}
                  name={"name"}
                  label={"Full Name"}
                  type={"text"}
                  rules={{
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  }}
                />
              </li>
              <li>
                <ControllerField
                  control={control}
                  errors={errors}
                  name={"email"}
                  label={"Email Address"}
                  type={"text"}
                  rules={{
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  }}
                />
              </li>
              <li>
                <ControllerField
                  control={control}
                  errors={errors}
                  name={"contactNo"}
                  label={"Contact Number"}
                  type={"number"}
                  rules={{
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  }}
                />
              </li>
              <li className=" col-span-2">
                <ControllerField
                  control={control}
                  errors={errors}
                  name={"type"}
                  label={"Inquiry"}
                  type={"select"}
                  selectOptions={[
                    "Sales",
                    "Part & Accessories",
                    "Service",
                    "Yamaha Riding Academy",
                  ]}
                  rules={{
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  }}
                />
              </li>
              <li className=" col-span-2">
                <ControllerField
                  control={control}
                  errors={errors}
                  name={"message"}
                  label={"Your Message"}
                  type={"textarea"}
                  rules={{
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  }}
                />
              </li>
              <li className=" col-span-2">
                <Controller
                  name={"recaptchaKey"}
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <ReCaptcha
                        onChange={(data) => {
                          console.log(data);
                          field.onChange(data);
                        }}
                      />
                      {errors?.recaptchaKey?.message && (
                        <span className=" text-[.9rem] text-[#dd0000]">
                          {errors?.recaptchaKey?.message}
                        </span>
                      )}
                    </>
                  )}
                />

                <button className="bg-tertiary mt-5 w-full py-3 hover:bg-hover-tertiary whitespace-nowrap inline-block duration-150 text-white rounded-lg font-medium">
                  {mutateLoading ? " Sending..." : "Submit"}
                </button>
              </li>
            </ul>
          </form>
        </article>
      </SectionContainer>
      <NotificationModal modal={showModal} setModal={setShowModal} />
    </>
  );
};

export default ContactForm;
