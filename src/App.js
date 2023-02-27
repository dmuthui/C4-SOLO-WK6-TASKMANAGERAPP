import './App.css';
import Navbar from './Components/Navbar';
import CreateTasks from './Components/CreateTasks';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  //setting states for the inputs
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [query, setQuery] = useState('');
  const [counter, setCounter] = useState(1);
  const [displayForm, setDisplayForm] = useState(false);
  const [toggleDisplay, setToggleDisplay] = useState('');


  //setting states for the taskList
  const [tasksList, updateList] = useState([]);
  const [temporaryStorage, setTemporaryStorage] = useState([]);
  const todo = { id: counter, task: task, date: date, time: time };

  //adding event listener functions for data entry
  const handleTask = (event) => {
    const affected = event.target;
    affected.id === 'task' ? setTask(affected.value) : affected.id === 'date' ? setDate(affected.value) : setTime(affected.value);
  }

  const handleTaskForm = (event) => {
    setDisplayForm(true);
    setToggleDisplay('d-none')
  };

  const handleQuery = (event) => {
    setQuery(event.target.value);
    updateList(tasksList.filter(task => ((task.task).toLowerCase()).includes(query.toLowerCase())))
   
  }
  const clearQuery = (event)=>{
    event.preventDefault()
    setQuery('')
    updateList(temporaryStorage)
  }



  //adding event listener functions for form submission
  const submitTask = (event) => {
    event.preventDefault()
    const holderList = tasksList;

    holderList.push(todo);
    updateList(holderList);
    setTemporaryStorage(holderList);
    setCounter(counter + 1);
    setTask(''); setDate(''); setTime('');
  }


  return (
    <div className="App">
      <Navbar tasksList={tasksList} updateList={updateList} query={query} handleQuery={handleQuery} clearQuery={clearQuery}></Navbar>
      <CreateTasks task={task} date={date} time={time} handleTask={handleTask} submitTask={submitTask} tasksList={tasksList} updateList={updateList} handleTaskForm={handleTaskForm} displayForm={displayForm} toggleDisplay={toggleDisplay} temporaryStorage={temporaryStorage} setTemporaryStorage={setTemporaryStorage}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
