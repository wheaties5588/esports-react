import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Content from "./Content";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Content>1</Content>
        <Content>2</Content>
        <Content>3</Content>
        <Content>4</Content>
        <Content>5</Content>
        <Content>6</Content>
        <Content>7</Content>
        <Content>8</Content>
      </Carousel>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
