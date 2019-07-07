import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './bootstrap'; 
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponents'

function App() {
  return (
    <div className="App">
    <ParentComponent />

    {/* <EventBind /> */}
    {/*<FunctionClick />
        <ClassClick /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
     {/* <Hello /> */}
      {/* <Counter />
            <Greet name="Diana" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
