import React from "react";
import TaskForm from "./TaskForm";
import TaskList from './TaskList';

class ToDoList extends React.Component{
    constructor(){
        super();
        this.state = {
          tasks:[]
        }
      }
    
      createTask = (taskName) =>{
        return{
          id:Math.random().toString(36).substr(2, 9),
          taskLabel:taskName,
          isCompleted:false
    
        };
      }
     
       createTaskList = (taskName) => {
       const newTask  = this.createTask(taskName);
    
       const updatedTask = [
         ...this.state.tasks,
         newTask
       ]
    
       this.setState({
        ...this.state.tasks, 
        tasks: updatedTask
       });
    
       }


       handleTaskDelete = (taskId) => {
           const updatedTasks = this.state.tasks.filter(task=> task.id !== taskId);
           this.setState({
               ...this.state,
               tasks:updatedTasks
           })

       }


       handleTaskupdateName = (taskId, newName) => {
          console.log(newName,taskId);
        //  const editedTaskList = this.state.tasks.map(task => {
        //    if (task.id === taskId ) {
        //      return console.log(newName);
        //       //  this.setState({
        //       //    ...this.state, taskLabel:newName
                 
        //       //  })
              
             
        //    }
        //    return task; 
          
        //   })

       }
    
      render(){
    
        return(
        <>
          <TaskForm  onAddButtonClick = {this.createTaskList}/>
          <TaskList tasks = {this.state.tasks} onTaskDelete = {this.handleTaskDelete} onTaskEditName = {this.handleTaskupdateName} />
        </>
        );
    
      }
}

export default ToDoList;