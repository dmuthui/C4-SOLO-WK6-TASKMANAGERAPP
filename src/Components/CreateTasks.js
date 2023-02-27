import { useState } from "react";
import Table from "./Table";
import TaskForm from "./TaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateTasks(props) {
   const  {task, date, time, handleTask, submitTask, tasksList, updateList, handleTaskForm, displayForm, toggleDisplay} = props;

    return displayForm ? (
        <div className='container mt-3'>
            <TaskForm task={task} date={date} time={time} handleTask={handleTask} submitTask={submitTask}></TaskForm>
            <Table tasksList={tasksList} updateList={updateList} handleTaskForm={handleTaskForm} toggleDisplay={toggleDisplay}></Table>
        </div>
    ) : (
        <Table tasksList={tasksList} updateList={updateList} handleTaskForm={handleTaskForm}></Table>
    )
}