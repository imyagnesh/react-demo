import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Components/Button';
import Checkbox from './Components/Checkbox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = {
      checked: true
    }
    this.onClickButton = this.onClickButton.bind(this);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onClickButton() {
    alert('button is clicked!');
  }
  onCheckboxClick() {
    this.setState({ checked: !this.props.checked });
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
          <Checkbox label="Checkbox Test" value="true" onCheckboxClick={this.onCheckboxClick} checked={this.props.checked} />
        </div>
      </div>
    );
  }
}

export default App;
