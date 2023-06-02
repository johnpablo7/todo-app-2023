import { useContext } from "react";
import { TodoContext } from "../context";
import { CardTodo } from "../components/CardTodo";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { Modal } from "../modal";
import { TodoForm } from "../components/TodoForm";

export const Home = () => {
  const { openModal } = useContext(TodoContext);

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-1">
          <TodoCounter />
          <p className="text-[#6B6D78]">Today is Saturday, 27 May 2023</p>
        </div>
        <CreateTodoButton />
      </div>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CardTodo />
    </div>
  );
};
