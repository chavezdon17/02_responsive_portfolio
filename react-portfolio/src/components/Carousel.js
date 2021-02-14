import React from "react";

import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import project1 from "../Assets/Images/project-1.png";
import project2 from "../Assets/Images/project-2.png";
import PasswordGenerator from "../Assets/Images/password-generator.png";
import DayPlanner from "../Assets/Images/dayPlanner.png";
import WeatherTracker from "../Assets/Images/weather-tracker.png";
import ProgressiveBudget from "../Assets/Images/progressive-budget.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Project 1",
          subTitle: "First group project",
          imgSrc: project1,
          link: "https://github.com/Vicki20Rous/Project1.git",
          selected: false,
        },

        {
          id: 1,
          title: "Easy Serve",
          subTitle: "second group project",
          imgSrc: project2,
          link: "https://github.com/biakaworks/Easy-Serve.git",
          selected: false,
        },

        {
          id: 2,
          title: "Password Generator",
          subTitle: "Website that creates random password",
          imgSrc: PasswordGenerator,
          link: "https://github.com/chavezdon17/-03_Password_Generator.git",
          selected: false,
        },

        {
          id: 3,
          title: "Day Planner",
          subTitle: "Plan out your day with this planner",
          imgSrc: DayPlanner,
          link: "https://github.com/chavezdon17/05-third-party-api.git",
          selected: false,
        },

        {
          id: 4,
          title: "Weather Tracker",
          subTitle: "Get current weather info for any city",
          imgSrc: WeatherTracker,
          link: "https://github.com/chavezdon17/06-Sever-Side-API.git",
          selected: false,
        },

        {
          id: 5,
          title: "Progressive Budget",
          subTitle: "Offline Budget tracker",
          imgSrc: ProgressiveBudget,
          link: "https://github.com/chavezdon17/18-progressive-budget.git",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
