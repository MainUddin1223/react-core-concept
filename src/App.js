import logo from './logo.svg';
import './App.css';
function App() {
  const nayok = ['reubel', 'Rajjak', 'Bapparaj', 'sakib khan', 'hero alom', 'kuddus']
  return (
    (
      <div className="App">
        {
          nayok.map(nai => <Person name={nai}></Person>)
        }
        {/* <Person name={nayok[0]} address='Dhaka'></Person>
        <Person name={nayok[1]} address='Barisal'></Person>
        <Person name={nayok[2]} address='Kumilla'></Person> */}
        <Friend name="Suzan" job="Jr Engr."></Friend>
        <Friend name="Bipul" job="Banker"></Friend>
        <Friend name="Shahin" job="Driver"></Friend>
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
      <p>profession:{props.job}</p>
    </div>
  )
}
export default App;
