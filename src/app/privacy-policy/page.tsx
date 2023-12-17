import React from "react";

import PrivacyPolicySection from "@/components/sections/PrivacyPolicySection";
import { createMetadata } from "@/utils/helpers";

export const generateMetadata = () => {
  return createMetadata({
    title: "Privacy Policy",
    description: "",
  });
};

const PrivacyPolicyPage = () => {
  return (
    <PrivacyPolicySection
      title={"Yamaha Privacy Policy"}
      content={[
        {
          title: "Privacy Notice",
          paragraph: `By accessing, browsing or using the Yamaha website or providing us with Personal Data, as defined below, you signify that you agree to the terms of our current Privacy Notice as posted in this page of the website. If you do not agree with any term in this Privacy Notice, please do not access, browse or use the site or provide us with Personal Data.\n\nThe Yamaha website you have entered is operated by or on behalf of Yamaha Motor Philippines, Inc. We comply with the laws and regulations regarding personal data protection, and place great importance on protecting your privacy. This Privacy Notice prescribes the type of information that we collect, and how we use and manage such information.`,
        },
        {
          title: "Personal Data",
          paragraph: `“Personal Data”, as referenced in this Privacy Notice, means personal identifiable information including, without limitation, your name, address, birthdate, gender, contact number, and e-mail address.\n\nWhen you are visiting our site, you may be asked for Personal Data to allow you to participate in Yamaha Safe Riding Science (YSRS), sales promotion services or prize competitions, answer our questionnaires or inquiries by e-mail or through the website, monitor Yamaha products, or e-mail news services concerning the Yamaha product lines, etc.\n\n We will not collect any Personal Data unless and until you provide such information to use voluntarily. When you provide us with Personal Data, you authorize us to process, use and store such information in accordance with the terms of this Privacy Notice.\n\nIf you do not agree with any term in this Privacy Notice, please do not provide us with your Personal Data. Certain services may be conditioned on the provision of your Personal Data.\n\n Yamaha employs encryption procedures in secure areas to ensure that communication between your browser and our system, for example, cannot be read by others on the internet. All data is stored exclusively on our servers and accorded a level of protection that is adequate and at least equivalent to that under the Data Privacy Act of 2012 (DPA).`,
        },
        {
          title: "Disclosure of Personal Data",
          paragraph: `Disclosure of Personal Data Personal information may be shared by Yamaha on an international basis with its parent entity, subsidiaries and affiliates, and such information may be further shared between internal product groups in order to enhance the Yamaha customer experience and offer additional products and/or services that may be of interest to you. We may also share your personal information with third parties either at your express direction, such as when you request that we have a dealer contact you or you authorize sharing of your personal information with a third party business partner. Yamaha is not responsible for the handling of such information by these third parties who are responsible for their own privacy policies that would govern such collection, use and handling of this information. Yamaha may also appoint third party agents in connection with its marketing and survey efforts, subject to a confidentiality agreement concerning the information. In any case, Yamaha will not, without your consent, disclose any such personal information for use in connection with an unrelated third party's marketing efforts.`,
        },
        {
          title: "Security of Personal Data",
          paragraph: `We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of Personal Data. These measures include reviews of our information collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store Personal Data. We restrict access to Personal Data to Yamaha employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations.`,
        },
        {
          title: "Rights to Personal Data",
          paragraph: `We will amend, cease from using or delete your Personal Data within reasonable time of our receipt of your written request to do so. `,
        },
        {
          title: "Links",
          paragraph: `Our website may contain links to other websites.  However, we are not responsible for the content of these websites or for the data protection practices of these other businesses.  We encourage users to be aware when you leave our website and to read the privacy statements of such other websites.  This Privacy Notice applies solely to the information collected thru this website.`,
        },
        {
          title: "Cookies",
          paragraph: `Cookies are files or pieces of information that may be stored in your computer’s hard disk drive when you visit a website.  We use cookies as a tool to allow us to customize your experience to better match your interests and preferences, or to simply facilitate your signing in to use the services.  Most browsers are initially set to accept cookies.  If you do not wish to accept cookies, you can set your computer to refuse cookies or to alert you when cookies are being stored.  If you refuse to use cookies, our ability to provide you with personalized services would be limited.`,
        },
        {
          title: "Modification",
          paragraph: `We reserve the right to alter this Privacy Notice at any time in compliance with the applicable data protection laws in the Philippines, including the “Data Protection Act of 2012”.  When you use our services after the alteration of this Privacy Notice, you signify that you agree to the alteration of this Privacy Notice.`,
        },
        {
          title: "Questions and Comments",
          paragraph: `If you have any questions or recommendations about this Privacy Notice, please contact us at the following:`,
        },
      ]}
      address={`YAMAHA MOTOR PHILIPPINES, INC.\nLots 1 & 2, Block 17, Phase 1,\nLima Technology Center,\nMalvar, Batangas`}
      contact={"(043)455-1900"}
      email={"ymph_dpo@yamaha-motor.com.ph"}
    />
  );
};

export default PrivacyPolicyPage;
