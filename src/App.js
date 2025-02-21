import logo from './logo.svg';
import './App.css';
import FunComp from './FunComp';
import ClassComp from './ClassComp';
import Forms from './Forms';
import Dummyfun from './Dummyfun';
import Dummyclass from './Dummyclass';
import Header from './Header';
import Routing from './Routes/Routing';

function App() {
   
const name = "harsha"
  return (
    <div className="App">
      <Header/>
      <Routing/>
      <ClassComp/>
      <Forms/>
    </div>
  );
}

export default App;
