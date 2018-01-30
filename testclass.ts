import {testInterface} from "./TasksInterface"

class myClass implements testInterface {
    constructor(){}
    tasks: Array<string> = [];

    addTask(task :string): number {
        this.tasks.push(task);
        console.log(""+task+" has been added");
        let count:number = tasks.length;
        return count;
    }
    
    listAllTasks() {
        this.tasks.forEach(function (value) {
            console.log(value);
          }); 
    }
    
    
    deleteTask(task :string): number {
        let index = tasks.indexOf(task);
        this.tasks.splice(index, 1); 
        console.log(""+task+" has been removed\n");
        return index;
    }

}