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
    
      render(){
    
        return(
        <>
          <TaskForm  onAddButtonClick = {this.createTaskList}/>
          <TaskList tasks = {this.state.tasks} onTaskDelete = {this.handleTaskDelete} />
        </>
        );
    
      }
}

export default ToDoList;