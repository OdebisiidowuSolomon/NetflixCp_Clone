import React from "react";
import Row from "./Row";
import { data } from "./requests";
import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {data.map((data, i) => (
        <Row
          isLargeRow={data.isLargeRow}
          key={i}
          title={data.title}
          fetchUrl={data.fetch}
        />
      ))}
    </div>
  );
}

export default App;
