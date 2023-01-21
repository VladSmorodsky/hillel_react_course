import './App.css';
import Person from "./components/Person/Person";

function App() {
  const person = {
    name: 'Mykola',
    age: 30
  };

  return (
    <div className="App">
      <Person person={person} />
    </div>
  );
}

export default App;
