export const CardHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="size-9 text-emerald-300"
        >
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="font-serif text-3xl">{title}</h2>
      </div>
      <p className="text-sm text-white/60 mt-2">{description} </p>
    </div>
  );
};
