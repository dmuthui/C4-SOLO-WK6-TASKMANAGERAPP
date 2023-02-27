import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from "react-icons/fa";

export default function ListTasks(props) {
    const { counter, date, task, time, tasksList, updateList } = props;

    const deleteTask =(event)=>{updateList(tasksList.filter(task=> task.id !== counter))}
    return (
        <tr>
            <td>{task}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td><button type="button" className="btn m-0 pt-0" onClick={deleteTask}> <FaTrash className='mt-0'/></button></td>
        </tr>
    )
}