import React from "react";

import ContactForm from "./_components/ContactForm";
import { createMetadata } from "@/utils/helpers";

export const generateMetadata = () => {
  return createMetadata({
    title: "Contact and Inquiry",
    description:
      "Wherever you are in the Philippines– our Customer Service will help you with any questions or requests relating to Yamaha Products.​",
  });
};

const ContactAndInquiryPage = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default ContactAndInquiryPage;
