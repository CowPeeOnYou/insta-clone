function Story({ img, name }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-pink-400 border-2 cursor-pointer object-contain hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{name}</p>
    </div>
  );
}

export default Story;
