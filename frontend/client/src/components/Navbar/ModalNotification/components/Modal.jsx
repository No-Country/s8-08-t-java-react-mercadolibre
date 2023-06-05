import { BsGear } from "react-icons/bs";

const Modal = ({ setOpen }) => {
  return (
    <div>
      <div className="w-4 h-4 bg-white absolute rotate-45 top-[28px] left-0"></div>
      <div
        className="flex flex-col bg-white w-[25rem] h-[9rem] absolute right-0 z-30 top-9 rounded shadow-lg"
        onMouseLeave={() => setOpen(false)}
      >
        <header className="flex justify-between items-center p-3 mx-2">
          <span className="text-sm font-medium text-[#333]">Notificaciones</span>
          <BsGear color="#333" size={18} />
        </header>
        <main className="flex w-full h-full justify-center items-center bg-gray-100">
          <p className=" text-sm text-gray-400">Por ahora, no hay nada aquí</p>
        </main>
      </div>
    </div>
  );
};

export default Modal;
