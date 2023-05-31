import { CardTodo } from "../components/CardTodo";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
// import { TodosLoadingCounter } from "../components/TodosLoadingCounter";

export const Home = ({
  todos,
  saveTodos,
  completedTodos,
  totalTodos,
  searchedTodos,
  loading,
  error,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-1">
          {/* {loading && <TodosLoadingCounter />} */}
          <TodoCounter
            completed={completedTodos}
            total={totalTodos}
            loading={loading}
          />
          <p className="text-[#6B6D78]">Today is Saturday, 27 May 2023</p>
        </div>
        <CreateTodoButton />
      </div>

      <CardTodo
        searchedTodos={searchedTodos}
        todos={todos}
        saveTodos={saveTodos}
        loading={loading}
        error={error}
      />
    </div>
  );
};
