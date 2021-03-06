import React from "react";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import styled from "styled-components";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export default App;
