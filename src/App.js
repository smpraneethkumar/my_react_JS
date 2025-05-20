
import './App.css';
import ClassComp from './Components/ClassComp';
import ContactUs from './Components/ContactUs';
import FunComp from './Components/FunComp';
import Header from './Components/Header';
import ListAndKeys from './Components/ListAndKeys';


function App() {
  const course1 = 'reactjs' 
  const course2 = 'nodeJS' 

  return (
    <div className="App">
      
      <Header/>
      <ContactUs/>
    
      {/* <ClassComp  courseName= {course2} durations='3month'/> */}
      {/* <FunComp courseName={course1} durations='3month' /> */}
      {/* <ListAndKeys/> */}
     
    </div>
  );
}

export default App;
