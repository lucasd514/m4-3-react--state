import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 33%;
  margin-top: 15%;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  const bookLookup = suggestions.filter((book) => {
    if (value.length >= 2) {
      return book.title.toUpperCase().includes(value.toUpperCase());
    }
  });

  const Suggestion = styled.li`
    border: 1px lightgrey solid;
    text-align: center;
    padding: 2px;

    &:hover {
      background-color: lightyellow;
      border: 1px red dashed;
    }
  `;

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
      <ul>
        {bookLookup.map((books) => {
          return <Suggestion>{books.title}</Suggestion>;
        })}
      </ul>
    </Wrapper>
  );
};

export default Typeahead;
