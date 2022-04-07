import React from "react";

function TaskListItem({taskobj, onTaskDelete}){
    
    const {id,taskLabel,isCompleted} = taskobj;

    const handleDeleteBtnClick = () =>{
        onTaskDelete(id);
    }
    
    return(<li>
        <input type="checkbox" checked={isCompleted}></input>
        <span className="tasknm">{taskLabel}</span>
        <button onClick={handleDeleteBtnClick}>Delete</button>
    </li>)


}

export default TaskListItem;