import { Input } from "@shadcn/components/ui/input";
import { SearchList } from "./SearchList";
import { useSearch } from "../hooks/useSearch";
import { Skeleton } from "@shadcn/components/ui/skeleton";
import { Separator } from "../@shadcn/components/ui/separator";

export const Search = () => {
  const { search, suggestedList, loading } = useSearch();
  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) =>
    search(event.target.value);
  return (
    <div className="flex flex-col min-w-[50%] relative">
      <Input
        type="text"
        className="px-6 py-8 rounded-[24px] text-2xl  "
        onChange={handleChnage}
      />

      {loading ? (
        <>
          <div className="px-6 py-8 rounded-b-[24px] text-base  shadow-slate-800  space-y-6 absolute top-20 w-[100%]">
            <div className="space-y-2">
              <Skeleton className="h-12 w-full" />
              <Separator className="mt-2" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full " />
              <div className="mt-12 space-y-4">
                <Skeleton className="h-12 w-full " />
                <Separator className="mt-2" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <SearchList suggestedList={suggestedList} />
      )}
    </div>
  );
};
