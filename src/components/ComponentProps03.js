import React, { Component } from "react";

export default class ComponentProps03 extends Component {
  render() {
    const { name, age } = this.props; //구조분해할당
    console.log(name);
    console.log(age);
    return (
      <div>
        {name},{age}
      </div>
    );
  }
}
