var taskUList = document.getElementById("box-content-list");

document.addEventListener("DOMContentLoaded", function() {
    
    var btnAdd = document.getElementById("btn-add-task");
    var inputAdd = document.getElementById("add-input");
    
    
    var form = document.querySelector("#form");
   
    

    form.addEventListener('submit', function(event) {
    event.preventDefault();  
    
    if(inputAdd.value) {
        createSingleTask(inputAdd.value);
    }
        
    }, false);
    
    
    
    
}, false);