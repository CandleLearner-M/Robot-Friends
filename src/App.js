import React, { Component } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import Scroll from "./Scroll.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [], 
      searchField: ' '
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(Response => Response.json())
    .then(users => this.setState({Robots : users}))
  }

  onChangeSearch = (event) => {
    this.setState({ searchField : event.target.value})
  }
  
  render() {
    const filteredRobots = this.state.Robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className=" f1 fw6 lh-solid">Robo Friends</h1>
        <SearchBar searching={this.onChangeSearch}/>
        <Scroll>
        <CardList Robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}



export default App;
