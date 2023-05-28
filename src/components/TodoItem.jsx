import clsx from "clsx";

export const TodoItem = (props) => {
  return (
    <div
      className={clsx(
        `text-white text-2xl font-semibold mb-6`,
        props.completed ? "line-through decoration-[#FF7782]" : "no-underline"
      )}
    >
      <p>{props.text}</p>
    </div>
  );
};
