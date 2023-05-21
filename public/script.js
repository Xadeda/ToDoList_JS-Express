let taskValue = document.querySelector('#taskValue');
let taskList = []
function app() {
    fetch("/taskList")
            .then((resp) => resp.json())
            .then((resp)=>{
                  taskList = resp;
                  showTasks(taskList)
            });
}
function sendTodos() {
    fetch("/taskList", {
        method: "POST",
        headers :{
            "content-type" : "application/json"
        },
        body : JSON.stringify(taskList)
    })
}
function createTask(){
    
    if (taskValue.value === '') {
        alert("You must write something")
    }else{
   taskList.push({
       id: Date.now(),
       title: taskValue.value,
       done: false,
   })
}
   taskValue.value = '';
   showTasks()
   sendTodos()

}
function doneTask(id ) {
    let taskIndex = taskList.findIndex((task) => task.id === id);
    console.log(taskIndex);
    if (taskIndex !== -1) {
        taskList[taskIndex].done = !taskList[taskIndex].done;
        showTasks(taskList);
        sendTodos();
    }
}
function remove(id) {
    let taskIndex = taskList.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        showTasks(taskList);
        sendTodos();
    }
}
function showTasks(){
    let tasksSection = document.querySelector('.tasks')
    tasksSection.innerHTML = ''
    let checked = ''
    taskList.forEach(task => {
        checked = task.done ? 'done' : ''
        tasksSection.innerHTML += `
            <div class="task ${checked}">
                <p>${task.title}</p>
                <div class="action">
                    <a href="#!" onclick='doneTask(${task.id})'><i class="fa fa-check"></i></a>
                    <a href="#!" onclick='remove(${task.id})'><i class="fa fa-trash-alt"></i></a>
                </div>
            </div>
        `
    })
}
app()
