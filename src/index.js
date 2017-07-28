import React from 'react';
import { render } from 'react-dom';
import { Home, Mine, Search } from './screens';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/search":
      return <Search />;
    case "/mine":
      return <Mine />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});
