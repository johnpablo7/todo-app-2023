import { useContext, useState } from "react";
import { TodoContext } from "../context";

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const isDescriptionValid = newTodoValue.length >= 1 ? true : false;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isDescriptionValid) return;
    addTodo(newTodoValue.trim());
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <div className="bg-white rounded-md p-8 w-96">
      <form onSubmit={onSubmit}>
        <h3 className="text-center text-[#2A83FF] text-2xl font-semibold mb-6">
          Enter your new task
        </h3>
        <div className="flex flex-col items-center justify-between">
          <textarea
            value={newTodoValue}
            onChange={onChange}
            required
            className="border rounded p-2 w-full focus:outline-none mb-5"
            placeholder="Type here..."
          />
          <div className="flex items-center gap-6 w-full">
            <button
              type="submit"
              className="bg-[#FF7782] text-white font-semibold cursor-pointer hover:bg-[#bc404b] w-40 py-2 px-6 rounded-lg text-lg"
            >
              Create
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-[#FFBB55]  text-white font-semibold cursor-pointer hover:bg-[#d09030] w-40 py-2 px-6 rounded-lg text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
