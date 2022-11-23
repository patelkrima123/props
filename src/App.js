import React from "react";
import Card from "./Card";
import sdata from "./Sdata";

const App = () => {
  <>
    <h1>Top 5 Technology</h1>
   
  </>;
  
  {sdata.map((data) =>{
   
    return (
      <Card
        imgsrc={data.imgsrc}
        title={data.title}
        sname={data.sname}
        link={data.link}
        btn={data.btn}
      />
    );
  })};
  
 
};

export default App;
