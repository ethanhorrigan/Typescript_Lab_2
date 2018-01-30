

let tasks: Array<string> = []; 

console.log("\n- Add Tasks -\n");

function addTask(task :string): number {
    tasks.push(task);
    console.log(""+task+" has been added");
    let count:number = tasks.length;

    return count;
}

addTask("Ethan");
addTask("Aaron");
addTask("Lewis");

/*(c) Create a listAllTasks function:
i. It iterates over all the tasks in the array.
ii. It prints each array item in the console.*/

console.log("\n- List all Tasks -\n");

function listAllTasks() {
    tasks.forEach(function (value) {
        console.log(value);
      }); 
}

listAllTasks();

/*(d) Create a deleteTask function:
i. It receives a string as a parameter called task.
ii. It removes that string from the array.
iii. It prints in console a message indicating the deletion.
iv. It returns the number of elements in the array after the deletion.*/

console.log("\n- Delete Tasks -\n");

function deleteTask(task :string) {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);  

    console.log(""+task+" has been removed\n");
}

deleteTask("Ethan");

listAllTasks();

