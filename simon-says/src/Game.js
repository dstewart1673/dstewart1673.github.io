import React, { Component } from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.changeStrict = this.changeStrict.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  start() {
    this.props.start;
  }

  changeStrict() {
    this.props.changeStrict;
  }

  handleClick(x) {
    this.props.clickButton(x);
  }

  render() {
    return (
      <div>
        <div className="red" style="background-color:{this.props.color[0]}" onClick={() => this.handleClick(0)}>
        </div>
        <div className="blue" style="background-color:{this.props.color[1]}" onclick={() => this.handleClick(1)}>
        </div>
        <div className="green" style="background-color:{this.props.color[2]}" onClick={() => this.handleClick(2)}>
        </div>
        <div className="yellow" style="background-color:{this.props.color[3]}" onClick={() => this.handleClick(3)}>
        </div>
        <div className="info">
          <button className="btn strictToggle" onClick={() => this.changeStrict}>{(this.props.strict === true ? "Strict" : "Not Strict")}</button>
          <button className="btn-start" onClick={() => this.start}>Start!</button>
          <h3 className="step">{this.props.step}</h3>
        </div>

    )
  }

}
