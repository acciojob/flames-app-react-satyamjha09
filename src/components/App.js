import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  calculateFLAMES = () => {
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let str1 = name1.split("");
    let str2 = name2.split("");

    // Remove common characters
    for (let char of [...name1]) {
      if (str2.includes(char)) {
        str1.splice(str1.indexOf(char), 1);
        str2.splice(str2.indexOf(char), 1);
      }
    }

    const remainingLength = str1.length + str2.length;
    const flamesResult = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    this.setState({ result: flamesResult[remainingLength % 6] });
  };

  clearFields = () => {
    this.setState({ name1: "", name2: "", result: "" });
  };

  render() {
    return (
      <div id="main">
        <input
          type="text"
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={this.handleChange}
        />
        <input
          type="text"
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={this.handleChange}
        />
        <button data-testid="calculate_relationship" name="calculate_relationship" onClick={this.calculateFLAMES}>
          Calculate Relationship
        </button>
        <button data-testid="clear" name="clear" onClick={this.clearFields}>
          Clear
        </button>
        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
