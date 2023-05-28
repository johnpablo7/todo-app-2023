import { MdOutlineClose } from "react-icons/md";

export const DeleteTodoButton = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <h3 className="text-3xl font-semibold">ToDo</h3>

        <button
          onClick={props.onDelete}
          className="text-2xl p-1 bg-[#FF7782] rounded-full cursor-pointer hover:bg-[#bc404b] transition-all"
        >
          <MdOutlineClose />
        </button>
      </div>
      <div className="border border-t border-white my-3" />
    </div>
  );
};
