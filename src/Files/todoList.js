import React, { useState } from 'react';

function TodoList() {
  const [text , setText] = useState('');
  const [todo , setTodo] = useState([]);


  const formSubmit =  (e) =>{
    e.preventDefault();
    
    setTodo([...todo , text]);
    setText("");

  }
  const dblclick = {

  }
  // console.log(x);
  return (<>
  <h1>ToDo list</h1>
  <div className="container">
    
    <br/>
    <form  onSubmit={formSubmit}>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <br />
    <button>+</button>
    </form>
    </div>
    {
      todo.map((nElem) =>{
        return(
          <div className="box"><li key={nElem.id} onDblClick ={() =>{setTodo([])}}>{nElem}</li></div>
        )
      })
    }
    </>);
}
export default TodoList;
