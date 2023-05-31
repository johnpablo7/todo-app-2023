export const TodosLoading = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div
        key={i}
        className="border border-slate-100 shadow rounded-xl flex flex-col h-auto p-4"
      >
        <div className="animate-pulse flex-grow flex flex-col">
          <div className="flex items-center justify-between text-white mb-2">
            <div className="h-6 bg-slate-200 rounded w-20"></div>
            <div className="bg-slate-200 h-9 w-9 rounded-full"></div>
          </div>

          <div className="bg-slate-200 h-1 w-full rounded-full mb-4"></div>

          <div className="flex-grow flex flex-col justify-between">
            <div className="h-4 bg-slate-200 rounded mb-6"></div>
            <div className="bg-slate-200 h-12 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    ));
};
