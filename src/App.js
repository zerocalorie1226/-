//fetch
//axios
import {useEffect, useState} from 'react'
import axios from 'axios'

const SERVER_URL = 'http://localhost:4000/api/todo'

function App() {
  const [todoList,setTodoList]=useState(null)

  const fetchData=()=>{
    axios.get(SERVER_URL).then((response)=>{
      setTodoList(response.data)
    })
    // fetch('http://localhost:4000/api/todo')
    // .then((response)=>response.json())
    // .then((data)=>setTodoList(data))
  }



  useEffect(()=>{
    fetchData()
  },[])

const onSubmitHandler=(e)=>{
  e.preventDefault();
  const text=e.target.text.value;
  const done = e.target.done.checked
  axios.post(SERVER_URL,{text,done})
  fetchData()
//   fetch('http://localhost:4000/api/todo',{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//   body:JSON.stringify({
//     text,
//     done
//   })
// }).then(()=>
// fetchData()
// )
}


  return (
    <div className="App">
      <h1> Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name='text'></input>
        <input name='done'type='checkbox'></input>
        <button type='submit' value="추가">추가</button>
      </form>
        {todoList?.map((todo)=>(
          <div key={todo.id} style={{display:'flex'}}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? 'Y':'N'}</div>
          </div>
        
        ))}
    </div>
  );
}

export default App;
