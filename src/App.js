import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [persons, setPersons] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>setPersons(data))
    // .then(data =>setPersons(data.splice(0,5))) <==for taking 5 users only
  },[])
  return (
    <div className="App">
      {
        persons.map(person => <Person key={person.id} fullName={person.name} Nickname={person.username} email={person.email}></Person>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Person(props){
  const personStyle={
    width:'300px',
    height:'300px',
    border:'2px solid lightblue',
    borderRadius:'20px',
    backgroundColor:'lightgray',
    margin:'10px',
    display:'inline-block'
  }
  return (
    <div style={personStyle}>
      <h4>Full-Name: {props.fullName}</h4>
      <h3>Nick-Name: {props.Nickname}</h3>
      <h5>Email-Address: {props.email}</h5>
    </div>
  )
}

export default App;
