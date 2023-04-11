import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Join from './components/Join/Join';
// import Chat from './components/Chat/Chat';

// const App = () => {
//   return React.createElement(
//     BrowserRouter,
//     null,
//     React.createElement(Route, { path: "/", exact: true, component: Join }),
//     React.createElement(Route, { path: "/chat", component: Chat })
//   );
// }

// module.exports = App;