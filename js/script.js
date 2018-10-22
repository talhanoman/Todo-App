

function remove() {

    var id = this.getAttribute('id');
    var todos = [];
    var todoA = [];
    var todoB = [];
    var todoC = [];

    var todoSto = localStorage.getItem('title');
    var todoStoB = localStorage.getItem('content');
    var todoStoC = localStorage.getItem('locations');
    var todoStoD = localStorage.getItem('date');

    if (todoSto !== null || todoStoB !== null || todoStoC !== null || todoStoD !== null) {
        todos = JSON.parse(todoSto);
        todoA = JSON.parse(todoStoB);
        todoB = JSON.parse(todoStoC);
        todoC = JSON.parse(todoStoD);
    }

    todos.splice(id, 1);
    todoA.splice(id, 1);
    todoB.splice(id, 1);
    todoC.splice(id, 1);

    localStorage.setItem('title', JSON.stringify(todos));
    localStorage.setItem('content', JSON.stringify(todoA));
    localStorage.setItem('locations', JSON.stringify(todoB));
    localStorage.setItem('date', JSON.stringify(todoC));

    M.toast({ html: 'ToDo Removed from List' });
    setTimeout(function () { location.href = 'allTodos.html'; }, 700);
    return false;
}

function show() {
    var todos = [];
    var todoA = [];
    var todoX = [];
    var todoC = [];
    var todoSto = localStorage.getItem('title');
    var todoStoB = localStorage.getItem('content');
    var todoStoC = localStorage.getItem('locations');
    var todoStoD = localStorage.getItem('date');
    if (todoSto !== null) {
        todos = JSON.parse(todoSto);
        todoA = JSON.parse(todoStoB);
       todoX = JSON.parse(todoStoC);
        todoC = JSON.parse(todoStoD);
    }

    if (!todoSto || todoSto == null || todoSto == '') {
        var mainError = document.getElementById('lists');
        var errorDiv = document.createElement('div');

        errorDiv.classList.add('noItems')
        var text = document.createTextNode('No Todo in Storage');
        errorDiv.appendChild(text);
        mainError.appendChild(errorDiv);
    } else {
        var html = '<li>';
        for (var i = 0; i < todos.length; i++) {
            html += '<li><div class="collapsible-header"><i class="material-icons">assignment</i>'+todos[i]+'</div><div class="collapsible-body" style="background:white;color:black;"><i class="taskDone material-icons"id="' + i + '" style="cursor:pointer;vertical-align: middle;margin: 1px 17px 0 0;">check_box_outline_blank</i><span><span id="dates"><b>'+ todoC[i]+'</b></span> <br><span style="margin-left: 40px;">'+todoA[i]+'</span></span><span style="float:right;"><button class="editBtn waves-effect waves-light btn" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">edit</i></button><button class="remove waves-effect waves-light btn" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">clear</i></button></span></div></li>';
        };
        html += '</li>';

        document.getElementById('lists').innerHTML = html;

        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove);
        };
        var editBtn = document.getElementsByClassName('editBtn');
        for (var i = 0; i < editBtn.length; i++) {
            editBtn[i].addEventListener('click', up);
        };
        var ComplBtn = document.getElementsByClassName('taskDone');
        for (var i = 0; i < ComplBtn.length; i++) {
            ComplBtn[i].addEventListener('click', taskDone);
        };

        function up() {
            var sum = this.getAttribute('id');
            localStorage.setItem('editId', sum);
            location.href = "editTodo.html";
        }
        function taskDone() {
            var sum = this.getAttribute('id');
            localStorage.setItem('editId', sum);
            location.href = "todoDetails.html";
        }
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


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});