import React from "react";
import Card from "./Card";

const CardList = ({Robots}) => {
  return (
    <div className="tc ma-auto w-100">
      {Robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
