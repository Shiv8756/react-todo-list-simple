import React, { useState } from 'react';

function TodoList() {
  const [text , setText] = useState('');
  const [todo , setTodo] = useState([]);


  const formSubmit =  (e) =>{
    e.preventDefault();
    
    setTodo([...todo , text]);
    setText("");

  }
  // console.log(x);
  return (<>
  <div className="container">
    <form  onSubmit={formSubmit}>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button>+</button>
    </form>
    </div>
    {
      todo.map((nElem) =>{
        return(
          <div>{nElem}</div>
        )
      })
    }
    </>);
}
export default TodoList;
