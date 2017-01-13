import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Components/Button';
import Checkbox from './Components/Checkbox';
import RadioButton from './Components/RadioButton';
import TextField from './Components/TextField';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxchecked: true,
      radioChecked: true
    }
    this.onClickButton = this.onClickButton.bind(this);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.onRadioClick = this.onRadioClick.bind(this);
  }

  onClickButton() {
    alert('button is clicked!');
  }
  onCheckboxClick() {
    this.setState({ checkBoxchecked: !this.state.checkBoxchecked });
    alert('Checkbox is clicked!');
  }
  onRadioClick() {
    this.setState({ radioChecked: !this.state.radioChecked });
    alert('Checkbox is clicked!');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Button label="Button" onClickButton={this.onClickButton} />
          <Checkbox label="Checkbox Test" name="testCheckBox" value="true" onCheckboxClick={this.onCheckboxClick} checked={this.state.checkBoxchecked} />
          <RadioButton label="Checkbox Test" name="textRadio" value="true" onRadioClick={this.onRadioClick} checked={this.state.radioChecked} />
          <TextField name="demoText" value="Demo Test" />
        </div>
      </div>
    );
  }
}

export default App;
