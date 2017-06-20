function createSingleTask(nameTask) {
   
    var createListItem = document.createElement("li");
    createListItem.classList.add("box-inputs-group","row");
    taskUList.appendChild(createListItem);
    
    var createHtml = '<div class="col-lg-12">'+
                '<div class="input-group">'+
                 '<span class="input-group-btn">'+
                    '<button class="btn btn-default btn-check" type="button">'+
                        '<i class="fa fa-check" aria-hidden="true">'+'</i>'+
                    '</button>'+
                  '</span>'+    
                  '<input type="text" class="form-control" value="'+nameTask+'">'+
                  '<span class="input-group-btn">'+
                    '<button class="btn btn-danger btn-delete" type="button">'+
                        '<i class="fa fa-trash-o" aria-hidden="true"></i>'+
                    '</button>'+
                  '</span>'+
                '</div>'+
              '</div>'
    
    
    
    createListItem.innerHTML= createHtml;
    
    var btnCheck =createListItem.querySelector(".btn-check");
    
    btnCheck.addEventListener('click', function(event) {
    this.classList.toggle("btn-success");
    },false);
    
    var btnDelete = createListItem.querySelector(".btn-delete");
    
    btnDelete.addEventListener('click', function(event) {
        
      var liDelete = this.closest('li');
        taskUList.removeChild(liDelete);
        
    },false);
    
    
       
} 