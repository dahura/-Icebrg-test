import { FC } from "react";
import { SearchResponse } from "../hooks/types";
import { Separator } from "@shadcn/components/ui/separator";

interface Props {
  suggestedList: SearchResponse;
}
export const SearchList: FC<Props> = ({
  suggestedList: { continents, countries, languages },
}) => {
  return (
    <ul className="px-6 py-8 rounded-b-[24px] text-base  shadow-slate-800 space-y-6 absolute top-20 w-[100%]">
      {!!continents && (
        <li>
          <div className="text-green-400">Continents</div>
          <Separator className="mt-2" />
          <ul className="mt-2 space-y-2">
            {continents.map(({ code, name }) => (
              <li key={code}>
                <div className="text-base ">{name}</div>
              </li>
            ))}
          </ul>
        </li>
      )}
      {!!countries && (
        <li>
          <div className="text-green-400">Countries</div>
          <Separator className="mt-2" />
          <ul className="mt-2 space-y-2">
            {countries.map(
              ({
                code,
                name,
                capital,
                languages,
                phone,
                currency,
                native,
                continent,
              }) => (
                <li key={code}>
                  <div className="text-base flex justify-between">
                    <div>{name}</div> <div>{continent}</div>
                  </div>
                  <div className="text-sm text-slate-500"> {native}</div>
                  <div className="flex justify-between text-xs">
                    <div className="text-green-700 flex flex-col  font-bold">
                      {capital}
                      <div className="text-green-900 font-medium">
                        {languages.split(",").join(" ")}
                      </div>
                    </div>
                    <div className="text-green-700">
                      + {phone} <div className="text-green-300">{currency}</div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </li>
      )}
      {!!languages && (
        <li>
          <div className="text-green-400">Languages</div>
          <Separator className="mt-2" />
          <ul className="mt-2 space-y-2">
            {languages.map(({ code, name, native }) => (
              <li key={code}>
                <div>{name}</div>
                <div className="text-xs text-yellow-400">{native}</div>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
};
