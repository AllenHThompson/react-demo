//CD to project direcorty and type 'npm start' to start react server
//<project directory> npm install --save-dev eslint-config-rallycoding
//include .eslintrc { "extends": "rallycoding"}
import React from 'react';

class App extends React.Component {
  render() {
    return <Button>I <Heart />React</Button>;
  }
}

const Button = (props) => <button>{props.children}</button>;

// eslint-disable-next-line
class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>;
  }
}

export default App;
