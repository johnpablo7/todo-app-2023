// import { useState } from "react";
import { CompletedTodoButton } from "./CompletedTodoButton";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { TodoItem } from "./TodoItem";

// import { defaultTodos } from "../data/defaultTodos";

export const CardTodo = ({ searchedTodos, todos, saveTodos }) => {
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <div className="grid grid-cols-4 gap-6">
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
