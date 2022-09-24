import { useState } from "react";
import Button from "./Button";

const Greeting = (props) => {
  const { list } = props;
  const initialList = [list[0]];
  const [newList, setList] = useState(initialList);
  console.log(newList);

  const onClickFunction = (id) => {
    setList(list.filter((item) => item.id === id));
  };

  return (
    <>
      <ul>
        {list.map((language) => (
          <Button
            language={language}
            functions={onClickFunction}
            key={language.id}
          />
        ))}
      </ul>
      <ul>
        {newList.map((i) => (
          <li key={i.id}>
            <img src={i.imageUrl} alt={i.imageAltText} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Greeting;
