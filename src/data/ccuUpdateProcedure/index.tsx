import Image from "next/image";

export const ccuUpdateProcedure = [
  <p key={1}>
    A PC with internet connection and USB memory stick with enough space to hold
    the update software is required for internet software update.
  </p>,
  <p key={2}>
    Delete all data / format the USB memory device.{" "}
    <span className=" font-medium">
      {"*Format the USB in “FAT 32” by acceptable PC."}
    </span>
  </p>,
  <p key={3}>
    {
      "Download the update software(*006-B3195-00.update) from https://www.yamaha-motor-ccufirm.com/firmware/006-B3195-00.update to your PC\n\nThen copy the file to the USB device. The file name must remain as “006-B3195-00.update”. If the file name is changed, the CCU will not recognize the file."
    }
  </p>,
  <p key={4}>Turn on main switch of your vehicle.</p>,
  <aside key={5} className=" space-y-5">
    <p>Insert the USB device into the vehicle&apos;s USB jack.</p>
    <Image
      src="/assets/images/samples/sample-usb.png"
      alt="image"
      width={250}
      height={250}
    />
  </aside>,
  <p key={6}>
    {`In the vehicle's menu system, navigate to "> Applications > Settings > System > System information"`}
  </p>,
  <aside key={7} className=" space-y-5">
    <p>Select “Software update”</p>
    <Image
      src="/assets/images/placeholder.png"
      alt="image"
      width={250}
      height={250}
    />
  </aside>,
  <aside key={8} className=" space-y-5">
    <p>Select “Software update”</p>
    <Image
      src="/assets/images/placeholder.png"
      alt="image"
      width={250}
      height={250}
    />
    <Image
      src="/assets/images/placeholder.png"
      alt="image"
      width={250}
      height={250}
    />
  </aside>,
];
