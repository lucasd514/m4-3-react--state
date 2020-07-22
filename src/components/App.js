import React from "react";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import data from "../data";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Typeahead
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </>
  );
};

export default App;
