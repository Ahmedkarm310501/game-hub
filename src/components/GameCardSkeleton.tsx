const GameCardSkeleton = () => {
  return (
    <div className=" animate-pulse ">
      <div className=" rounded-t-lg rounded-b-non bg-gray-500 h-60  "></div>
      <div className="bg-secondary rounded-b-md  p-2 mt-1 flex flex-col items-center">
        <div className="bg-gray-400 rounded-md h-1 my-1 mx-auto"></div>
        <div className="bg-gray-400 rounded-md h-1 my-1 mx-auto"></div>
        <div className="bg-gray-400 rounded-md h-1 my-1 mx-auto"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
