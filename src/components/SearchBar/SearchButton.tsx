import { VscGoToSearch } from "react-icons/vsc";

const SearchButton = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <button onClick={handleSubmit}>
      <VscGoToSearch />
    </button>
  );
};

export default SearchButton;
