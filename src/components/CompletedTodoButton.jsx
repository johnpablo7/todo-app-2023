import clsx from "clsx";

export const CompletedTodoButton = (props) => {
  return (
    <button
      onClick={props.onComplete}
      className={clsx(
        `flex items-center justify-center gap-2 text-white font-semibold w-full py-2 rounded-lg text-lg`,
        props.completed
          ? "bg-[#FF7782] cursor-auto"
          : "bg-[#FFBB55] hover:bg-[#d09030] cursor-pointer"
      )}
    >
      <p>Completed ToDo</p>
    </button>
  );
};
