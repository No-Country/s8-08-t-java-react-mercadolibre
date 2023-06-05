import { useState } from "react";
import { VscBell } from "react-icons/vsc";
import Modal from "./components/Modal";

const ModalNotification = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" bg-transparent relative">
      <div className="w-6">
        <VscBell
          className="h-5 opacity-60 cursor-pointer"
          onClick={() => setOpenModal(!openModal)}
          onMouseOver={() => setOpenModal(true)}
        />
      </div>
      {openModal && <Modal setOpen={setOpenModal} />}
    </div>
  );
};

export default ModalNotification;
