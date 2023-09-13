import { Input } from "@shadcn/components/ui/input";
import { SearchList } from "./SearchList";
import { useSearch } from "../hooks/useSearch";

export const Search = () => {
  const { search, suggestedList } = useSearch();
  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) =>
    search(event.target.value);
  return (
    <div className="flex flex-col min-w-[50%] relative">
      <Input
        type="text"
        className="px-6 py-8 rounded-[24px] text-2xl  "
        onChange={handleChnage}
      />

      <SearchList suggestedList={suggestedList} />
    </div>
  );
};
