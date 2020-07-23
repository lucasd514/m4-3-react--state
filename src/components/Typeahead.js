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
      let foundBooks = book.title.toUpperCase().includes(value.toUpperCase());

      return foundBooks;
    }
  });

  const Suggestion = styled.li`
    border: 1px lightgrey solid;
    text-align: center;
    padding: 2px;

    &:hover {
      background-color: lightyellow;
      border: 1px rgb(240, 188, 66) dashed;
    }
  `;

  const StyledCategory = styled.span`
    color: rgb(134, 38, 51);
  `;

  const displayList = bookLookup.map((books) => {
    let bookTitle = books.title;
    let bookGenre = books.categoryId;
    let startPosition = bookTitle.toUpperCase().search(value.toUpperCase());
    let finalPostion = startPosition + value.length;
    let firstHalf = bookTitle.slice(0, finalPostion);
    let secondHalf = bookTitle.slice(finalPostion);
    return (
      <Suggestion>
        {firstHalf}
        <b>{secondHalf}</b>{" "}
        <i>
          in <StyledCategory>{bookGenre}</StyledCategory>
        </i>
      </Suggestion>
    );
  });

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
      <ul>{displayList}</ul>
    </Wrapper>
  );
};

export default Typeahead;
