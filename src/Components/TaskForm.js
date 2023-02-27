export default function TaskForm(props) {
    const {task, date, time, handleTask, submitTask} = props;
    return (
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
    )
}