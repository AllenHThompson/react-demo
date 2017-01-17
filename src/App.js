// //<project directory> npm install --save-dev eslint-config-rallycoding
// //include .eslintrc { "extends": "rallycoding"}
//
// import React from 'react';
//
// //'class component' can have state
// class App extends React.Component {
//   constructor() {
//     //SUPER GIVES 'THIS' THE CONTEXT W/IN THE COMPONENT INSTEAD OF PARENT CLASS
//     super();
//     this.state = {
//       txt: 'this is the state text',
//       cat: 0
//     };
//   }
//
//   update(e) {
//     this.setState({txt: e.target.value})
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//
//       </div>
//     );
//   }
// }
// //'stateless function component' can't have state
// // const App = () => <h1>Hello Stateless</h1>
//
// // App.propTypes = {
// //   txt: React.PropTypes.string,
// //   cat: React.PropTypes.number.isRequired
// // };
// //
// // App.defaultProps = {
// //   txt: 'this is the default text'
// // };
//
// const Widget = (props) =>
//   <input type="text" onChange={props.update}/>
// export default App;
