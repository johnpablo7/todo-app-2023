export const TodoSearch = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-md border border-black w-80 py-2 px-4 focus:outline-none"
        // onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
    </div>
  );
};
