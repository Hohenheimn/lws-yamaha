import Image from "next/image";

import { instructions } from "@/components/sections/CcuUpdatingProcedureSection";

export const ccuUpdateProcedure: instructions = [
  {
    content: [
      {
        type: "text",
        value:
          "A PC with internet connection and USB memory stick with enough space to holdthe update software is required for internet software update.",
      },
    ],
  },
  {
    content: [
      {
        type: "text",
        value: "Delete all data / format the USB memory device.",
      },
      {
        type: "highlight",
        value: "*Format the USB in “FAT 32” by acceptable PC.",
      },
    ],
  },
  {
    content: [
      {
        type: "text",
        value:
          "Download the update software(*006-B3195-00.update) from https://www.yamaha-motor-ccufirm.com/firmware/006-B3195-00.update to your PC",
      },
      {
        type: "text",
        value:
          "Then copy the file to the USB device. The file name must remain as “006-B3195-00.update”. If the file name is changed, the CCU will not recognize the file.",
      },
    ],
  },
  {
    content: [
      {
        type: "text",
        value: "Turn on main switch of your vehicle.",
      },
    ],
  },
  {
    content: [
      {
        type: "text",
        value: "Insert the USB device into the vehicle&apos;s USB jack.",
      },
      {
        type: "image",
        value: "/assets/images/ccu-updating-procedure/usb.png",
      },
    ],
  },
  {
    content: [
      {
        type: "text",
        value: `In the vehicle's menu system, navigate to "> Applications > Settings > System > System information"`,
      },
    ],
  },

  {
    content: [
      {
        type: "text",
        value: `Select “Software update”`,
      },
      {
        type: "image",
        value: `/assets/images/ccu-updating-procedure/step-7.png`,
      },
    ],
  },
  {
    content: [
      {
        type: "text",
        value: `Select "Yes". The system will begin updating`,
      },
      {
        type: "image",
        value: `/assets/images/ccu-updating-procedure/step-8-1.png`,
      },
      {
        type: "image",
        value: `/assets/images/ccu-updating-procedure/step-8-2.png`,
      },
    ],
  },
];
