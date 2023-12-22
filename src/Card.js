import React from "react";


const Card = (props) => {
  const {id} = props;
  const {name} = props;
  const {email} = props;
  return (
    <div className="bg-light-purple dib br3 pa3 ma3 grow bw2  shadow-5 pointer">
      <img src={`https://robohash.org/${id}?set=set3`} alt="robo"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
