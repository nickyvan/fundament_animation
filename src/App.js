import React, { Component } from 'react';
import dirToMouse from './animation/dirToMouse';
import chaser from './animation/chaser';
import bug from './animation/bugs';
import drawSine from './animation/drawSine';
import moveWithSine from './animation/moveWithSine';
import SpaceShip from './animation/space_ship';
class App extends Component {
  componentDidMount() {
    // new dirToMouse();
    // new chaser();
    // new bug();
    // new drawSine();
    // new moveWithSine();
    new SpaceShip();
  }

  render() {
    return (
      <div className="App">
        <canvas className="mycanvas" />
      </div>
    );
  }
}

export default App;
