import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

type PropsType = {
  modal: NotificationModalType;
  setModal: Function;
};

export type NotificationModalType = {
  show: boolean;
  type: "success" | "error";
  message: string;
};

const NotificationModal = (props: PropsType) => {
  const { modal, setModal } = props;

  useEffect(() => {
    const intervalPrompt = setInterval(() => {
      setModal({
        ...modal,
        show: false,
      });
    }, 2000);
    return () => clearInterval(intervalPrompt);
  });

  return (
    <>
      {modal?.show && (
        <section className="fixed top-0 left-0 w-full h-full bg-[#00000058] z-50 flex justify-center items-center">
          <aside className="text-white flex justify-center flex-col p-5 items-center bg-secondary w-11/12 max-w-[30rem] min-h-[15rem] rounded-lg shadow-lg">
            {modal.type === "error" && (
              <span className=" text-[5rem] text-red">
                <MdErrorOutline />
              </span>
            )}
            {modal.type === "success" && (
              <span className=" text-[5rem] text-green-400">
                <FaCheck />
              </span>
            )}
            <p className=" font-medium text-lg">{modal.message}</p>
          </aside>
        </section>
      )}
    </>
  );
};

export default NotificationModal;
