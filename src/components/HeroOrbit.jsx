const HeroOrbit = ({ children, size, rotation }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 animate-spin [animation-duration:60s]`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="inline-flex animate-spin [animation-duration:5s]">
        {children}
      </div>
    </div>
  );
};

export default HeroOrbit;
