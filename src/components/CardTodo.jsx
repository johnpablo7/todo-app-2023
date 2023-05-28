// import { useState } from "react";
import { CompletedTodoButton } from "./CompletedTodoButton";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
// import { defaultTodos } from "../data/defaultTodos";

export const CardTodo = ({ searchedTodos }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {searchedTodos.map((todo) => (
        <div
          key={todo.text}
          className="bg-[#717EEE] rounded-xl flex flex-col h-auto p-4"
        >
          <div className="flex-grow flex flex-col">
            <DeleteTodoButton />

            <div className="flex-grow flex flex-col justify-between">
              <TodoList>
                <TodoItem text={todo.text} completed={todo.completed} />
              </TodoList>
              <CompletedTodoButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
