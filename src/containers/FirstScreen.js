import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";

class FirstScreen extends React.PureComponent {
  state = {
    data: [
      {
        title: "Wheat(Alicia)",
        load: "3",
        weight: "24,37"
      },
      {
        title: "Wheat(Loomi)",
        load: "3",
        weight: "24,37"
      },
      {
        title: "Wheat(Zebra)",
        load: "3",
        weight: "24,37"
      }
    ]
  };
  render() {
    return (
      <div>
        <Header title="Harvesting loads" />
        {this.renderCards()}
      </div>
    );
  }

  renderCards = () => {
    const { data } = this.state;
    return data.map((item, i) => {
      console.log(item);
      const key = `${item.title}_${i}`;
      return (
        <Card
          title={item.title}
          load={item.load}
          weight={item.weight}
          key={key}
        />
      );
    });
  };
}

export default FirstScreen;
