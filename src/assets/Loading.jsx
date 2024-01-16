export const Loading = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="w-80 h-[400px] border border-gray-400 mb-5 rounded-md text-center">
        <img src="" width="228px" className="mx-auto mt-10 rounded-md" />
        <h2 className="mt-5 overflow-hidden whitespace-nowrap text-ellipsis inline-block w-56 mx-auto"></h2>
        <h3>$</h3>
        <button className="mt-4 bg-cyan-800 text-white w-48 rounded-md backdrop-blur-2xl"></button>
      </div>
    </div>
  );
};
