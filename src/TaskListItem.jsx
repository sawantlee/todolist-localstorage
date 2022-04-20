import React, { useState } from "react";

function TaskListItem({taskobj, onTaskDelete,onTaskEditName}){
    
    const {id,taskLabel,isCompleted} = taskobj;

    const [isEditing, setEditing] = useState(false);

    const handleDeleteBtnClick = () =>{
        onTaskDelete(id);
    }

    
    const handleEditBtnClick = () => {
        setEditing(true);
        
    }

    const handleCancleUpdateBtnClick = () => {
        setEditing(false);
    }

    const handleUpdateNameBtnClick = (event) =>{ 
        //let newUpdatedTaskName = inputupdatedTaskNameRef.current.value; 
        let newUpdatedTaskName = event.target.value;
        //console.log(newUpdatedTaskName);
         onTaskEditName(id,newUpdatedTaskName);     
    }
     
    const viewTemplate = (
        <>
        <input type="checkbox" checked={isCompleted}></input>
        <span className="tasknm">{taskLabel}</span>
        <button onClick={handleDeleteBtnClick}>Delete</button>
        <button onClick={handleEditBtnClick} >Edit</button>
        </>
    )

    const editTemplate = (
        <>
        <input type='text' onChange={handleUpdateNameBtnClick}></input>
        <span className="tasknm">{taskLabel}</span>
        <button onClick={handleUpdateNameBtnClick} >Update</button>
        <button onClick={handleCancleUpdateBtnClick}>Cancle</button>
        </>
    )


    // return(<li>
    //     <input type="checkbox" checked={isCompleted}></input>
    //     <span className="tasknm">{taskLabel}</span>
    //     {/* <input type='text' name="" value={taskLabel}>{taskLabel }</input> */}
    //     <button onClick={handleDeleteBtnClick}>Delete</button>
    //     <button onClick={handleEditBtnClick} >Edit</button>
        
    // </li>)

    return(<li> {isEditing ? editTemplate : viewTemplate} </li>)


}

export default TaskListItem;