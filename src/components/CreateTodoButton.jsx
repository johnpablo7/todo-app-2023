export const CreateTodoButton = () => {
  return (
    <div>
      <button
        onClick={(event) => {
          console.log("Le diste click"),
            console.log(event),
            console.log(event.target);
        }}
        className="bg-[#2A83FF] text-white font-semibold hover:bg-[#144992] w-44 py-2 rounded-lg text-lg"
      >
        Add New ToDo
      </button>
    </div>
  );
};
