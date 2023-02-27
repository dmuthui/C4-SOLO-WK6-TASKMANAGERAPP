import ListTasks from "./ListTasks";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";

export default function Table({ tasksList, updateList, handleTaskForm, toggleDisplay }) {

    return (
        tasksList.length ? <table className="my-3 table table-secondary table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">TASK</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TIME (Hrs)</th>
                    <th scope="col">DONE?</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {tasksList.map((task) => <ListTasks key={task.id} counter={task.id} task={task.task} date={task.date} time={task.time} tasksList={tasksList} updateList={updateList}></ListTasks>)}
            </tbody>
        </table> 
        :
        <div className={toggleDisplay}>
            <h1 className="my-5 lead display-1">You currently have <br/>no tasks <br/>scheduled!</h1>
            <button onClick={()=>{handleTaskForm()}} type="button" className="btn btn-lg btn-dark">Add Tasks <FaPlus className="my-2"/></button>
        </div>
    )
}