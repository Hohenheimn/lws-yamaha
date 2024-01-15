import React from "react";

import ContactForm from "./_components/ContactForm";
import { createMetadata } from "@/utils/helpers";
import { Metadata } from "next";
import config from "@/utils/config";

export const metadata: Metadata = createMetadata({
  title: "Contact and Inquiry",
  description:
    "Wherever you are in the Philippines– our Customer Service will help you with any questions or requests relating to Yamaha Products.​",
  alternates: {
    canonical: `${config.apiNextBaseUrl}/contact-&-inquiry`,
  },
});

const ContactAndInquiryPage = () => {
  return <ContactForm />;
};

export default ContactAndInquiryPage;
