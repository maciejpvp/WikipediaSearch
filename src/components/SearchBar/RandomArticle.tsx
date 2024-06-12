import { VscQuestion } from "react-icons/vsc";
//999999
const min = 1;
const max = 999999;
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
const RandomArticle = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const randomArticle = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );
    window.location.href = `https://en.wikipedia.org/?curid=${randomArticle}`;
  };
  return (
    <button title="Show random article" onClick={handleClick}>
      <VscQuestion />
    </button>
  );
};

export default RandomArticle;
