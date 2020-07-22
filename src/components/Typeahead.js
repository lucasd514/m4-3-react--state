import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 33%;
  margin-top: 15%;
`;
const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Typeahead;
