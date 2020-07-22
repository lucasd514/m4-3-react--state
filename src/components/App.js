import React from "react";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import { categories } from "../data";

const handleSelect = ({ suggestion, setSuggestion }) => {
  return;
};
const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Typeahead
        suggestions={categories.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </>
  );
};

export default App;
