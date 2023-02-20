import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListTasks(props) {
    const { counter, date, task, time, tasksList, updateList } = props;

    const deleteTask =(event)=>{updateList(tasksList.filter(task=> task.id !== counter))}
    return (
        <tr>
            <td>{task}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td><button type="button" className="btn btn-close" onClick={deleteTask}></button></td>
        </tr>
    )
}