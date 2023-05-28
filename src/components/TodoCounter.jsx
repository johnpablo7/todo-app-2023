export const TodoCounter = ({ total, completed }) => {
  return (
    <div className="flex items-center gap-1 font-semibold text-[#2B2F3E]">
      <h1 className="text-3xl">Hello,</h1>
      <h2 className="text-2xl mt-1 text-[#2A83FF] ">
        You have completed {completed} of {total} All
      </h2>
    </div>
  );
};
