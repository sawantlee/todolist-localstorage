import React, { useRef } from "react";

function TaskForm(props){
    const inputTaskRef = useRef();

    const {onAddButtonClick} = props;

    const handleAddTask = () => {
        let taskName = inputTaskRef.current.value;

        if (!taskName){
            alert("Please add Task");
        }
        
        console.log(inputTaskRef.current.value)
        onAddButtonClick(taskName);

    }

    return(
        <>
        <input type='text' ref={inputTaskRef}></input>
        <button type="submit" onClick={handleAddTask}>Add Task</button>

        </>
    );

}

export default TaskForm;