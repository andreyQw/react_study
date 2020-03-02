import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2015 },
      { name: "BMW", year: 2020 },
      { name: "Mazda", year: 1968 }
    ],
    pageTitle: "React components",
    showCars: false
  };

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    });
  };

  handleInput = event => {
    this.setState({
      pageTitle: event.target.value
    });
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  };

  deleteHandler(index) {
    console.log(index);

    const cars = this.state.cars.concat();

    cars.splice(index, 1);

    this.setState({ cars });
  }

  render() {
    const divStyle = {
      textAlign: "center"
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
            // onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput}></input>

        <button onClick={this.changeTitleHandler.bind(this, "Changed!")}>
          Change title
        </button>
        <br />
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        <br />

        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "20px"
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
