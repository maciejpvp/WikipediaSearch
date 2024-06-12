import { SearchResult } from "../../types";
import SearchItem from "./SearchItem";

type SearchListProps = {
  data: SearchResult[];
};

const List = ({ data }: SearchListProps) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <SearchItem item={item} />
      ))}
    </div>
  );
};

export default List;
