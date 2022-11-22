import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <Card
      imgsrc="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
      title="React"
      sname="React Course"
      link="https://reactjs.org/docs/getting-started.html"
      btn="Leran React"
    ></Card>
    <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneediAY_e4GKj9rUraLJw60N_2gF1Ousrnw&usqp=CAU"
      title="Angular"
      sname="Angular Course"
      link="https://angular.io/start"
      btn="Leran Angular"
    ></Card>
    <Card
      imgsrc="https://c4.wallpaperflare.com/wallpaper/544/77/284/programming-programming-language-python-programming-logo-hd-wallpaper-preview.jpg"
      title="Node Js"
      sname="Node Js Course"
      link="https://nodejs.dev/en/learn/introduction-to-nodejs"
      btn="Learn Node"
    ></Card>
    <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdwAM18yfOfofSYBy62r3o-rBHQKfoEVVvWjd5yE1obXbsTXSp_eUUviKqr0LhH3X1Yc&usqp=CAU"
      title="Python"
      sname="Python Course"
      link="https://www.python.org/about/gettingstarted"
    ></Card>
    <Card
      imgsrc="https://www.edureka.co/blog/wp-content/uploads/2018/12/brochure-flyer-paper-poster-logo-trademark-text-building-office-buildi-455x300.jpg"
      title="Php"
      sname="Php Course"
      link="https://www.w3schools.com/php"
      btn="Learn Php"
    ></Card>
    <Card
      imgsrc="https://mir-s3-cdn-cf.behance.net/projects/404/d79839139012263.Y3JvcCw4MTAsNjMzLDAsMA.png"
      title=".Net"
      sname=".Net Course"
      link="https://www.javatpoint.com/net-framework"
      btn="Learn .net"
    ></Card>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
