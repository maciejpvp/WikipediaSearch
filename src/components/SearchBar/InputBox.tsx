type inputBoxProps = {
  value: string;
  setValue: (value: string) => void;
};

const InputBox = ({ value, setValue }: inputBoxProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <input
      className="text-stone-800 bg-stone-300 rounded h-full border-0 focus:outline-none"
      placeholder="Search"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputBox;
