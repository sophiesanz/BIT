// Reference: https://programacion.net/articulo/paso_de_variables_javascript_entre_paginas_i_12
cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");

let welcome = document.getElementById("welcome");
welcome.innerHTML="Bienvenid@ "+ arrVariables[0] + " " + arrVariables[1];


function addTask() {
    const task = document.getElementById("task").value;
    // const registerTasks = document.getElementById("registerTasks").value;
    const pendingTasks = document.getElementById("pendingTasks");
    const newTask = document.createElement("li");
    newTask.textContent=task;
    newTask.style.listStyle="none";
    pendingTasks.appendChild(newTask);  
    newTask.addEventListener("click",()=>{
        pendingTasks.removeChild(newTask); 
    })
};


