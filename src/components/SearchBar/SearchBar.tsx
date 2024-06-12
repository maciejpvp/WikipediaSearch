import InputBox from "./InputBox";
import { motion } from "framer-motion";
import SearchButton from "./SearchButton";
import RandomArticle from "./RandomArticle";

type SearchBarProps = {
  inputBoxValue: string;
  setInputBoxValue: (value: string) => void;
};

const SearchBar = ({ inputBoxValue, setInputBoxValue }: SearchBarProps) => {
  return (
    <motion.div
      className="flex flex-row items-center gap-2 bg-stone-300 text-stone-800 h-12 w-auto rounded px-3 py-1"
      initial={{ scale: 1, y: 0 }}
      animate={
        inputBoxValue
          ? { scale: 0.8, y: -window.innerHeight * 0.43 }
          : { scale: 1.5, y: 0 }
      }
      transition={{ duration: 0.5 }}
    >
      <form className="flex flex-row gap-1">
        <InputBox value={inputBoxValue} setValue={setInputBoxValue} />
        <span className="text-xl flex flex-row gap-2">
          <SearchButton />
          <RandomArticle />
        </span>
      </form>
    </motion.div>
  );
};

export default SearchBar;
