//CD to project direcorty and type 'npm start' to start react server
//<project directory> npm install --save-dev eslint-config-rallycoding
//include .eslintrc { "extends": "rallycoding"}
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 });
  }

  componentWillMount() {
    console.log('componetWillMount');
    this.setState({ m: 2 });
  }

  render() {
    console.log('render');
    return (<button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;
