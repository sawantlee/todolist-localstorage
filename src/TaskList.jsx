import React from "react";
import TaskListItem from "./TaskListItem";

function TaskList(props){
const {tasks, onTaskDelete} = props;
return(
    <ul className="todo-tasklist">
        {
            tasks.map(task => (
                <TaskListItem taskobj={task} key={task.id} onTaskDelete = {onTaskDelete} />    
        ) )
        }

    </ul>
)
}

export  default TaskList;