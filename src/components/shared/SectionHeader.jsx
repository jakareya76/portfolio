const SectionHeader = ({ eyeBrow, title, description }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyeBrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl max-w-[25ch] mx-auto text-center mt-6 tracking-wider md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 max-w-[60ch] mx-auto mt-5 md:text-lg">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
