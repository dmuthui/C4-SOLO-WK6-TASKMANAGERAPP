import { useState } from "react";
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateTasks() {

    //setting states for the inputs
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    //setting states for the taskList
    const [tasksList, updateList] = useState([]);
    const [counter, setCounter] = useState(1);

    let todo = { id: counter, Task: task, Date: date, Time: time };

    //adding event listener functions for data entry
    const handleTask = (event) => {
        let affected = event.target;
        affected.id === 'task' ? setTask(affected.value) : affected.id === 'date' ? setDate(affected.value) : setTime(affected.value);

    }

    //adding event listener functions for form submission
    const submitTask = (event) => {
        event.preventDefault()
        let holderList = tasksList;

        holderList.push(todo);
        updateList(holderList);
        setCounter(counter + 1);
        setTask(''); setDate(''); setTime('');

    }

    return (
        <div className='container mt-3'>
            <form onSubmit={submitTask}>
                <div className='row g-2'>

                    <div className='input-group'>
                        <span className="input-group-text border-dark" id='Date'>Date</span>
                        <input className="form-control border-dark me-1" type='date' id='date' required placeholder="Date" onChange={handleTask} value={date}></input>

                        <span className="input-group-text border-dark" id='time'>Time</span>
                        <input className="form-control border-dark" type='time' id='time' required placeholder="Time" onChange={handleTask} value={time}></input>
                    </div>

                    <div className='input-group col-md-4 col-sm-12'>
                        <input className="form-control border-dark" type='text' id='task' required placeholder="Enter task" onChange={handleTask} value={task}></input>
                        <button type="submit" className="btn btn-dark col-md-2">SUBMIT</button>
                    </div>

                </div>
            </form>

            <Table tasksList={tasksList} updateList={updateList}></Table>
        </div>
    )
}