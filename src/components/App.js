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

  calculateFLAMES = () => {
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let str1 = name1.split("");
    let str2 = name2.split("");

    // Remove common letters
    str1.forEach((char) => {
      const index = str2.indexOf(char);
      if (index !== -1) {
        str2.splice(index, 1);
      }
    });

    const remainingLength = str1.length + str2.length;
    const flamesResult = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    this.setState({ result: flamesResult[remainingLength % 6] });
  };

  clearFields = () => {
    this.setState({ name1: "", name2: "", result: "" });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <h1>FLAMES Relationship Calculator</h1>

        <input
          type="text"
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={this.handleInputChange}
          placeholder="Enter first name"
        />

        <input
          type="text"
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={this.handleInputChange}
          placeholder="Enter second name"
        />

        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.calculateFLAMES}
        >
          Calculate Relationship
        </button>

        <button
          data-testid="clear"
          name="clear"
          onClick={this.clearFields}
        >
          Clear
        </button>

        {/* Ensure h3 always exists for Cypress tests */}
        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
