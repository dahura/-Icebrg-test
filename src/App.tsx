import { Search } from "./components/Search";

export const App = () => {
  return (
    <div className="text-[#bdc1c6] flex  mt-24 items-center h-screen flex-col space-y-4">
      <h1 className="text-3xl font-bold">ICEBRG SEARCH</h1>
      <Search />
    </div>
  );
};
