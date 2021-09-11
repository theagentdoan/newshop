import React, { useEffect, useState } from 'react'

function HookComp (props) {
    const [count, setCount] = useState(props.init);
    //const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    //alert(todos[0].text);

   useEffect(() => {
    document.title = `you clicked ${count} times`;
    //tuong duong componentDidMount va componentWillUpdate trong class
    //console.log(count);
    return function willUnmount(){
    //tuong duong componentWillUnmount trong class
    }
    })

        return (
            <div>
                
                <p>You clicked {count} times</p>
          <button onClick={() => {setCount(count+1)} }>
            Click me
          </button>
            </div>
        )
    }

export default HookComp