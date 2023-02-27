import { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import CreateTasks from './Components/CreateTasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //setting states for the inputs
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [counter, setCounter] = useState(1);
  const [displayForm, setDisplayForm] = useState(false);
  const [toggleDisplay] = useState('d-none');


  //setting states for the taskList
  const [tasksList, updateList] = useState([]);

  const todo = { id: counter, task: task, date: date, time: time };

  //adding event listener functions for data entry
  const handleTask = (event) => {
    const affected = event.target;
    affected.id === 'task' ? setTask(affected.value) : affected.id === 'date' ? setDate(affected.value) : setTime(affected.value);
  }

  const handleTaskForm = (event) => {
    setDisplayForm(true);

  };

  //adding event listener functions for form submission
  const submitTask = (event) => {
    event.preventDefault()
    const holderList = tasksList;

    holderList.push(todo);
    updateList(holderList);
    setCounter(counter + 1);
    setTask(''); setDate(''); setTime('');

  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <CreateTasks task={task} date={date} time={time} handleTask={handleTask} submitTask={submitTask} tasksList={tasksList} updateList={updateList} handleTaskForm={handleTaskForm} displayForm={displayForm} toggleDisplay={toggleDisplay}/>
    </div>
  );
}

export default App;
