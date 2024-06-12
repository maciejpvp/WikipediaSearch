import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchList from "./components/SearchList/SearchList";

import { useWikipediaSearch } from "./hooks/useWikipediaSearch";

const App = () => {
  const [inputBoxValue, setInputBoxValue] = useState<string>("");
  const { data, error, isLoading } = useWikipediaSearch({
    query: inputBoxValue,
  });

  return (
    <div className="h-svh bg-stone-800 flex flex-col justify-center items-center">
      <div className="absolute">
        <SearchBar
          inputBoxValue={inputBoxValue}
          setInputBoxValue={setInputBoxValue}
        />
      </div>
      <div className="overflow-auto mt-32">
        {isLoading && !data && (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-stone-200"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] ">
              Loading...
            </span>
          </div>
        )}
        {error && <p>{error.message}</p>}
        {inputBoxValue && data && <SearchList data={data} />}
      </div>
    </div>
  );
};

export default App;
