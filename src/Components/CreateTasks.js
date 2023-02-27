import { useState } from "react";
import Table from "./Table";
import TaskForm from "./TaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateTasks() {

    //setting states for the inputs
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [counter, setCounter] = useState(1);
    const [displayForm, setDisplayForm] = useState(false);
    const [toggleDisplay, setToggle] = useState('d-none');


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

    return displayForm ? (
        <div className='container mt-3'>
            <TaskForm task={task} date={date} time={time} handleTask={handleTask} submitTask={submitTask}></TaskForm>
            <Table tasksList={tasksList} updateList={updateList} handleTaskForm={handleTaskForm} toggleDisplay={toggleDisplay}></Table>
        </div>
    ) : (
        <Table tasksList={tasksList} updateList={updateList} handleTaskForm={handleTaskForm}></Table>
    )
}