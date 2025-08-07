const Pill = ({ title, invert }: { title: string; invert?: boolean }) => {
  return (
    <div className={` ${invert ? "bg-white" : "bg-black"}`}>
      <p
        className={`text-xs px-3 py-1 ${
          invert ? "text-black" : "text-white"
        } textFont`}
      >
        {title}
      </p>
    </div>
  );
};

export default Pill;
