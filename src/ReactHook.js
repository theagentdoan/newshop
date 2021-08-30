import React from 'react';
import ReactDOM from 'react-dom';

class Example1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  var count = 0;
function Example2()
{
    return(
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => {count++; alert(count)}}>
            Click me
          </button>
        </div>
      );
    
}

reactDom.render(
    <>
    <Example1/>
    <Example2 />
    </>,
    document.getElementById('root')
)
