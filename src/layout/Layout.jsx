import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Home } from "../pages/Home";
import { SidebarMenu } from "../components/SidebarMenu";
// import { defaultTodos } from "../data/defaultTodos";

// localStorage.removeItem("TODOS_V1");
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

export const Layout = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  // console.log("searchValue:", searchValue);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <div className="w-full min-h-screen grid grid-cols-5 gap-3">
      <div className="bg-white h-full p-8">
        <SidebarMenu
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <main className="bg-[#F7FAFB] col-span-4 h-full p-8">
        <Home
          searchValue={searchValue}
          todos={todos}
          saveTodos={saveTodos}
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
};
