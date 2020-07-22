import React from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />

      <button onClick={() => setValue("")}>Clear</button>
    </>
  );
};

export default Typeahead;
