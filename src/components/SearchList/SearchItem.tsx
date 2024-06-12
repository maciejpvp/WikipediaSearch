type ItemTypes = {
  pageid: number;
  title: string;
  snippet: string;
};

type SearchItemProps = {
  item: ItemTypes;
};

const Item = ({ item: { pageid, title, snippet } }: SearchItemProps) => {
  const handleClick = () => {
    window.location.href = `https://en.wikipedia.org/?curid=${pageid}`;
  };
  const description = snippet.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <div
      className="bg-stone-200 w-[90vw] max-w-[90rem] h-auto max-h-48 rounded p-5"
      onClick={handleClick}
    >
      <h1 className="font-bold text-lg">{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Item;
