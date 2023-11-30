import React from "react";

import ContactForm from "./_components/ContactForm";

export const generateMetadata = () => {
  return {
    title: "Contact and Inquiry",
    description: "",
  };
};

const ContactAndInquiryPage = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default ContactAndInquiryPage;
