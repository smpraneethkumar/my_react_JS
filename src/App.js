import logo from './logo.svg';
import './App.css';
import FunComp from './FunComp';
import ClassComp from './ClassComp';
import Forms from './Forms';
import Dummyfun from './Dummyfun';
import Dummyclass from './Dummyclass';

function App() {
   
const name = "harsha"
  return (
    <div className="App">
      {/* <h2>Welcom to React</h2> */}
      {/* <ClassComp/>
      <Forms/> */}
      <Dummyfun fullname="praneeth"/>
      <Dummyclass fullname="praneeth"/>



    </div>
  );
}

export default App;
