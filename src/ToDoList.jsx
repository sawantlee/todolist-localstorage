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


       let localStoragetasks;
       if (localStorage.getItem('localStoragetasks')=== null){
        localStoragetasks = [];
       }
       else{
         localStoragetasks = JSON.parse(localStorage.getItem('localStoragetasks'));
       }
       localStoragetasks.push(newTask);
       localStorage.setItem('localStoragetasks', JSON.stringify(localStoragetasks));
      //  const taskJSON = JSON.stringify(updatedTask);
      //  localStorage.setItem('tasks', taskJSON);

      
    
       }

       //let getLocalstorageTasks = JSON.parse(localStorage.getItem('tasks')

       handleTaskDelete = (taskId) => {
           const updatedTasks = this.state.tasks.filter(task=> task.id !== taskId);
           this.setState({
               ...this.state,
               tasks:updatedTasks
           })

          // if (taskId === JSON.parse(localStorage.getItem('tasks.id')) {
          //     localStorage.removeItem('');
          // }
          let updatedTasksLocalStorage = JSON.parse(localStorage.getItem('localStoragetasks'));  
          let taskTobeDeleted = updatedTasksLocalStorage.findIndex(task=> task.id === taskId);
          updatedTasksLocalStorage.splice(taskTobeDeleted, 1);
          localStorage.setItem('localStoragetasks', JSON.stringify(updatedTasksLocalStorage));
          JSON.parse(localStorage.getItem('localStorage'));

       }


       handleTaskupdateName = (taskId, newName) => {
          console.log('new name',newName,taskId);
          const editedTaskList = this.state.tasks.map(task => {
           if (task.id === taskId ) {
             return {...task,taskLabel:newName}
           }
           return task;
          
          })
          this.setState({
            ...this.state, tasks: editedTaskList
          })
       }

       
      


       
    
      render(){
    
        return(
        <>
          <TaskForm  onAddButtonClick = {this.createTaskList}/>
          {/* <TaskList tasks = {this.state.tasks} onTaskDelete = {this.handleTaskDelete} onTaskEditName = {this.handleTaskupdateName} /> */}
          <TaskList tasks = {JSON.parse(localStorage.getItem('localStoragetasks'))} onTaskDelete = {this.handleTaskDelete} onTaskEditName = {this.handleTaskupdateName} />

        </>
        );
    
      }
}

export default ToDoList;