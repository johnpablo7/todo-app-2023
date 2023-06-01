import { CardTodo } from "../components/CardTodo";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";

export const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-1">
          <TodoCounter />
          <p className="text-[#6B6D78]">Today is Saturday, 27 May 2023</p>
        </div>
        <CreateTodoButton />
      </div>

      <CardTodo />
    </div>
  );
};
