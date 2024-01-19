"use client";

import React, { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SectionContainer from "@/components/sections/SectionContainer";
import ControllerField from "@/components/shared/ControllerField";
import Heading from "@/components/shared/Heading";
import NotificationModal, {
  NotificationModalType,
} from "@/components/shared/NotificationModal";
import ReCaptcha from "@/components/shared/Recaptcha";
import useAPI from "@/hooks/useAPI";
import Link from "next/link";

type FormType = {
  name: string;
  email: string;
  type: string;
  message: string;
  recaptchaKey: string;
  isAgreeToPrivacyPolicy: boolean;
};

const ContactForm = () => {
  const [showModal, setShowModal] = React.useState<NotificationModalType>({
    type: "success",
    message: "Inquiry successfully sent",
    show: false,
  });
  const [isAgreeToPrivacyPolicy, setIsAgreeToPrivacyPolicy] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
      type: "Sales",
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

  const { usePost } = useAPI(`/api/contacts`);

  const { mutate, isLoading: mutateLoading } = usePost;

  const SubmitHandler = (data: FormType) => {
    console.log(data);
    if (!isAgreeToPrivacyPolicy) return;

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
              <li className=" col-span-2 md:col-span-1">
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
              <li className=" col-span-2 md:col-span-1">
                <ControllerField
                  control={control}
                  errors={errors}
                  name={"contactNo"}
                  label={"Contact Number"}
                  type={"tel"}
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
                    "Others",
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
              <li className="col-span-2  flex gap-2 items-center font-semibold">
                <input
                  type="checkbox"
                  className="p-5"
                  {...register("isAgreeToPrivacyPolicy", {
                    required: true,
                  })}
                  onChange={(e) => setIsAgreeToPrivacyPolicy(e.target.checked)}
                />
                <p className="text-white">
                  I agree to{" "}
                  <Link href="/privacy-policy" className="underline">
                    Yamaha Privacy Policy
                  </Link>
                </p>
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

                <button
                  className={`bg-tertiary mt-5 w-full py-3 hover:bg-hover-tertiary whitespace-nowrap inline-block duration-150 text-white rounded-lg font-medium disabled:opacity-50`}
                  disabled={!isAgreeToPrivacyPolicy}
                >
                  {mutateLoading ? "Sending..." : "Submit"}
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
