import { useContext } from "react";
import { TodoContext } from "../context";

export const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="z-50 bg-[#2A83FF] text-white font-semibold hover:bg-[#144992] w-44 py-2 rounded-lg text-lg"
      onClick={() => setOpenModal((state) => !state)}
      // onClick={(event) => {
      //   console.log("Le diste click"),
      //     console.log(event),
      //     console.log(event.target);
      // }}
    >
      Add New ToDo
    </button>
  );
};
