const SectionHeader = ({ eyeBrow, title, description }) => {
  return (
    <>
      <div className="flex justify-center animate-item">
        <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
          {eyeBrow}
        </span>
      </div>
      <h2 className="animate-item font-[family-name:var(--font-display)] text-3xl max-w-[25ch] mx-auto text-center mt-4 tracking-tight font-bold md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="animate-item text-center text-zinc-400 max-w-[55ch] mx-auto mt-5 md:text-lg">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
