import React from "react";
import Billboard from "../components/Billboard";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Billboard title={props.title} />
      <Content>
        <p>
          Hello my name is Donovan Chavez I am a beginner full stack developer.
        </p>
        <p>My hobbies include taking Hikes, Going to the gym, and Gaming.</p>
        <p>
          I'm from the Kansas City area. I've been here my whole life. I want to
          eventually move to a new city to start a new career.
        </p>
        <p>
          Currently enrolled in KU Coding Boot camp. This course has taught me
          many skills in coding.
        </p>
        <p>
          Some of the languages I learned is React, Javascript, Express JS, Node
          JS, Mongo DB, and MySql
        </p>
        <p>
          Always looking to build on my current skills and become a better coder
        </p>
        <p>You can reach me at my Email: chavezdon17@gmail.com </p>
      </Content>
    </div>
  );
}

export default AboutPage;
