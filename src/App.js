import logo from './logo.svg';
import './App.css';
import FunComp from './FunComp';
import ClassComp from './ClassComp';
import Forms from './Forms';
import Dummyfun from './Dummyfun';
import Dummyclass from './Dummyclass';
import Header from './Header';
import Routing from './Routes/Routing';
import Clas_state_props from './Clas_state_props';
import { Fun_state_props } from './Fun_state_props';

function App() {
   
const name = "harsha"
  return (
    <div className="App">
      <Header/>
      <Routing/>
      <ClassComp/>
      <Forms/>
      <Clas_state_props/>
      <Fun_state_props anna={name}/>
    </div>
  );
}

export default App;
