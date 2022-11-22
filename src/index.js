import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.js";
import "./index.css";
import sdata from "./Sdata.js";
import reportWebVitals from "./reportWebVitals";




ReactDOM.render(
  <>
    <h1>Top 5 Technology</h1>

    <Card
      imgsrc={sdata[0].imgsrc}
      title={sdata[0].title}
      sname={sdata[0].sname}
      link={sdata[0].link}
      btn={sdata[0].btn}
    ></Card>
    <Card
      imgsrc={sdata[1].imgsrc}
      title={sdata[1].title}
      sname={sdata[1].sname}
      link={sdata[1].link}
      btn={sdata[1].btn}
    ></Card>
    <Card
      imgsrc={sdata[2].imgsrc}
      title={sdata[2].title}
      sname={sdata[2].sname}
      link={sdata[2].link}
      btn={sdata[2].btn}
    ></Card>
    <Card
      imgsrc={sdata[3].imgsrc}
      title={sdata[3].title}
      sname={sdata[3].sname}
      link={sdata[3].link}
      btn={sdata[3].btn}
    ></Card>
    <Card
      imgsrc={sdata[4].imgsrc}
      title={sdata[4].title}
      sname={sdata[4].sname}
      link={sdata[4].link}
      btn={sdata[4].btn}
></Card>
<Card
      imgsrc={sdata[5].imgsrc}
      title={sdata[5].title}
      sname={sdata[5].sname}
      link={sdata[5].link}
      btn={sdata[5].btn}
></Card>

  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
