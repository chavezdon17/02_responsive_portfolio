import React from "react";
import Billboard from "../components/Billboard.js";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return(
    <div>
  <Billboard title={props.title} subTitle={props.subTitle}/>
  <Carousel />
  </div>
  );
}

export default HomePage;
