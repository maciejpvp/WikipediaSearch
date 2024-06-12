import axios from "axios";

type validateIDProps = {
  pageID: number;
};

export const validateID = async ({ pageID }: validateIDProps) => {
  const response = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/?curid=${pageID}`,
  );
  console.log(response?.status);
};
