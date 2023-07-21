const GenreSkeleton = () => {
  return (
    <li className="flex px-2 py-1 items-center">
      <div className="w-8 h-8 rounded-lg bg-gray-300 animate-pulse"></div>
      <div className="ml-2 w-20 h-2 rounded-lg bg-gray-300 animate-pulse"></div>
    </li>
  );
};

export default GenreSkeleton;
