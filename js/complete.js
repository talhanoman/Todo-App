

function remove() {

    var id = this.getAttribute('id');
    var todos = new Array;
    var todos1 = new Array;
    var todos2 = new Array;
    var todos3 = new Array;

    var todos_str = localStorage.getItem('CompleteTodo');
    
    if (todos_str !== null ) {
        todos = JSON.parse(todos_str);
        
    }

    todos.splice(id, 1);
  

    localStorage.setItem('CompleteTodo', JSON.stringify(todos));
   

    M.toast({ html: 'ToDo Removed' });
    setTimeout(function () { location.reload(); }, 700);
    return false;
}

function show() {
    var todos = new Array;
    var todos_str = localStorage.getItem('CompleteTodoTitle');
    var todos_str1 = localStorage.getItem('CompleteTodoContent');
    var todos_str2 = localStorage.getItem('CompleteTodoLocations');
    var todos_str3 = localStorage.getItem('CompleteTodoDate');

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
        todos1 = JSON.parse(todos_str1);
        todos2 = JSON.parse(todos_str2);
        todos3 = JSON.parse(todos_str3);
    }

    if (!todos_str || todos_str===null || todos_str==='') {
        var mainError = document.getElementById('result');
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('noItems')
        var text = document.createTextNode('No Complete ToDo');
        errorDiv.appendChild(text);
        mainError.appendChild(errorDiv);
    } else {
        var html = '<div>';
        for (var i = 0; i < todos.length; i++) {
            html += '<div class="todo-main"><div class="todo-body"><i>'+ todos3[i]+'</i><br><i data-position="top" data-tooltip="Click to Complete ToDo" class="tooltipped detailBtn material-icons" id="' + i + '"  style="cursor:pointer;">check_box_outline_blank</i><div class="todo-text" id="' + i + '"><span class="todo-title" style="font-weight:740;">' + todos[i] +'</span><br> '+ todos1[i]+'</div><div class="todo-btnContainer" id="' + i + '"><span class="todo-btn"><button class="editBtn" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">edit</i></button><button class="remove" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">clear</i></button></span></div></div></div>';
        };
        html += '</div>';

        document.getElementById('result').innerHTML = html;

        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove);
        };
        
    }


}



function clearStorage() {
    localStorage.clear();
    setTimeout(function () { location.reload(); }, 1000);

}
show(); document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });
