import ListTasks from "./ListTasks";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";

export default function Table({ tasksList, updateList, handleTaskForm, toggleDisplay, temporaryStorage, setTemporaryStorage}) {

       return tasksList.length ? 
       ( <table className="my-3 table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">TASK</th>
                        <th scope="col">DATE</th>
                        <th scope="col">TIME (Hrs)</th>
                        <th scope="col">DONE?</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {tasksList.map((task) => <ListTasks key={task.id} counter={task.id} task={task.task} date={task.date} time={task.time} tasksList={tasksList} updateList={updateList} temporaryStorage={temporaryStorage} setTemporaryStorage={setTemporaryStorage}></ListTasks>)}
                </tbody>
            </table> )
        :
        (    <div className={toggleDisplay}>
                <h1 className="mt-5 pt-5 lead display-1">Welcome to your Tasks App</h1>
                <h2 className="mb-3 pt-3">You currently have no tasks scheduled!</h2>
                <button onClick={()=>{handleTaskForm()}} type="button" className="btn btn-lg btn-secondary mt-3">Add Tasks <FaPlus className="my-2"/></button>
            </div>)
}