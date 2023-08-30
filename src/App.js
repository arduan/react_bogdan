import './App.css';
import MyComponent from "./components/MyComponents";
import VitalikCompont from "./components/VitalikCompont";
import Petinfo from "./components/Petinfo";



function App() {
  return (
    <div className="App">
        <Petinfo animals = 'cat' age = '10'/>
      <MyComponent />
        <VitalikCompont/>
      <MyComponent />
        <VitalikCompont/>
      <MyComponent />
        <VitalikCompont/>
      <MyComponent />
    </div>
  );
}

export default App;
