import React, { useRef, useState } from "react";


function TaskListItem({taskobj, onTaskDelete,onTaskEditName}){
    
    let {id,taskLabel,isCompleted} = taskobj;

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
    const updatedNameRef = useRef();
    
    const handleUpdateNameBtnClick = (event) =>{ 
        //let newUpdatedTaskName = inputupdatedTaskNameRef.current.value; 
        
        //console.log('ref value', updatedNameRef.current.value)
        //let  newUpdatedTaskName = event.target.value;        
        //console.log(newUpdatedTaskName);
        //taskLabel = newUpdatedTaskName
        let  newUpdatedTaskName = updatedNameRef.current.value;
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
        <input type='text'  ref={updatedNameRef}></input>
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