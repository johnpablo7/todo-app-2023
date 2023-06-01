import { useContext } from "react";
import { TodoContext } from "../context";
import { CompletedTodoButton } from "./CompletedTodoButton";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { EmptyTodos } from "./EmptyTodos";
import { TodoItem } from "./TodoItem";
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";

export const CardTodo = () => {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);

  return (
    <div className="grid grid-cols-4 gap-6">
      {loading && <TodosLoading cards={16} />}
      {error && <TodosError />}
      {!loading && searchedTodos.length === 0 && <EmptyTodos />}

      {searchedTodos.map((todo) => (
        <div
          key={todo.text}
          className="bg-[#717EEE] rounded-xl flex flex-col h-auto p-4"
        >
          <div className="flex-grow flex flex-col">
            <DeleteTodoButton onDelete={() => deleteTodo(todo.text)} />

            <div className="flex-grow flex flex-col justify-between">
              <TodoItem text={todo.text} completed={todo.completed} />
              <CompletedTodoButton
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
