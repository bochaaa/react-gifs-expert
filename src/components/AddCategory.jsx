import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");
  const onInputChanged = ({ target }) => {
    setinputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // setCategories([inputValue, ...categories]); el que sigue es la otra opcion
    if (inputValue.trim().length <= 1) return;

    // // setCategories((categories) => {
    //   return [inputValue, ...categories];
    // });
    onNewCategory(inputValue.trim());
    setinputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  );
};
