import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';
import App from './App.js';

let Form=()=>{
  let [name,setname]=useState('')
  let[list,setlist]=useState([])
  let Handlechange=(e)=>{
    setname(e.target.value)
  }
  let Addname=(e)=>{
    e.preventDefault()
    setlist([...list, name])
    setname('')
   }
   return <form onSubmit={Addname}>
   <h1> Contact Manager</h1>
   <input type='text' onChange={Handlechange} value={name}></input>
   <input type='submit' value=' Add Contact'></input>
   <List list={list}/> 
   </form>
}

let List=(props)=>{
  let list = props.list
  let ListItems = list.map((val, ind)=>{
    return <li key={ind}>{val}</li>
  })
  return <ul>
    {ListItems}
  </ul>
 }


 let Form2=()=>{
  let [name, setName] = useState('')
  let [list, setList] = useState([])
  
  
  let HandleChange2 = (e)=>{
    setName(e.target.value)
  }
  let Addnameofbook2=(e)=>{
    e.preventDefault()
    setList([...list, name])
    setName('')

  }
  return <form onSubmit={Addnameofbook2}>
  <h1>   Manage a List of English Books</h1>
  <input type='text' onChange={HandleChange2} value={name}></input>
  <input type='submit' value=' Add An English Book'></input>
  <List2 list={list}/>
  </form>
}
 let List2=(props)=>{
  let list = props.list
  let ListItems = list.map((val, ind)=>{
    return <li key={ind}>{val}</li>
  })
  return <ul>
    {ListItems}
  </ul>
 }


 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <App/>

</>);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
