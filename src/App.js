import React, { Component, useState, useEffect } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";
import cowinFunctions from './helpers/cowin';

export default function App() {
  // state = {
  //   email: "",
  //   password: ""
  // };
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState({});

  const handleChange = e => {
    console.log('e is: ', e)
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  useEffect(() => {
    cowinFunctions.getStates()
    .then(result => {
      console.log('states: ', states);
    });
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   )
  }, [])
  
  // render() {
    return (
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="password"
          />

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );
  // }
}