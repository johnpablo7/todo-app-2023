import { CardTodo } from "../components/CardTodo";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import { defaultTodos } from "../data/defaultTodos";

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

export const Home = ({ searchValue }) => {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-1">
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <p className="text-[#6B6D78]">Today is Saturday, 27 May 2023</p>
        </div>
        <CreateTodoButton />
      </div>

      <CardTodo
        searchedTodos={searchedTodos}
        todos={todos}
        saveTodos={saveTodos}
      />
    </div>
  );
};
