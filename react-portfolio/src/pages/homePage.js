import React from "react";
import Billboard from "../components/Billboard.js";

function HomePage(props) {
  return(
  <Billboard title={props.title} subTitle={props.subTitle}/>
  );
}

export default HomePage;
