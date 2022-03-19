import logo from './logo.svg';
import './App.css';
function App() {
  return (
    (
      <div className="App">
        <Person name="hello" address='Dhaka'></Person>
        <Person name="gello" address='Barisal'></Person>
        <Person name="mello" address='Kumilla'></Person>
        <Friend name="Suzan"></Friend>
        <Friend name="Bipul"></Friend>
        <Friend name="Shahin"></Friend>
      </div>
    )
  );
}

function Person(props) {
  return <div className="person">
    <h1>{props.name}</h1>
    <p>{props.address}</p>
  </div>
}
function Friend(props) {
  return (
    <div className="friend">
      <h3>Name: {props.name}</h3>
      <p>profession:Singer</p>
    </div>
  )
}
export default App;
