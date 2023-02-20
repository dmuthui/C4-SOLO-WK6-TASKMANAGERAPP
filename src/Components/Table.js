import ListTasks from "./ListTasks";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table({tasksList,updateList}) {
    
    return (
        <table className="my-3 table table-secondary table-striped table-hover">
            <thead>
                <tr>
                    
                    <th scope="col">TASK</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TIME (Hrs)</th>
                    <th scope="col">DONE?</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {tasksList.map((task) => <ListTasks key={task.id} counter={task.id} task={task.Task} date={task.Date} time={task.Time} tasksList={tasksList} updateList={updateList}></ListTasks>)}
            </tbody>
        </table>
    )
}