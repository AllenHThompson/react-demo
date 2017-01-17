import React from 'react';

class App_lesson_8 extends React.Component {
  render() {
    return <Button>React</Button>
  }
}

const Button = function(props) {
  return <button>{props.children}</button>
}

export default App_lesson_8
