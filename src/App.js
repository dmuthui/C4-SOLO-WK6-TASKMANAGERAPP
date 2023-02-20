//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CreateTasks from './Components/CreateTasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CreateTasks></CreateTasks>
    </div>
  );
}

export default App;
