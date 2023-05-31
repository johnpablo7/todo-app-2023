// import clsx from "clsx";

import { TodosLoadingCounter } from "./TodosLoadingCounter";

export const TodoCounter = ({ total, completed, loading }) => {
  return (
    <div className="flex items-center gap-1 font-semibold text-[#2B2F3E]">
      <h1 className="text-3xl">Hello,</h1>

      {loading ? (
        <TodosLoadingCounter />
      ) : (
        <div className="text-2xl mt-1 text-[#2A83FF]">
          {total === completed ? (
            <h2>Congratulations, you completed all the tasks</h2>
          ) : (
            <h2>
              You have completed {completed} of {total} All
            </h2>
          )}
        </div>
      )}
    </div>
  );
};
