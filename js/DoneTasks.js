

function remove() {

    var id = this.getAttribute('id');
    var todos = [];
    var todos1 = [];
    var todos2 = [];

    var todoSto = localStorage.getItem('DoneTaskTitle');
    var todoSto1 = localStorage.getItem('DoneTaskContent');
    var todoSto2 = localStorage.getItem('DoneTaksDate');

    if (todoSto !== null || todoSto1 !== null || todoSto2 !== null) {
        todos = JSON.parse(todoSto);
        todos1 = JSON.parse(todoSto1);
        todos2 = JSON.parse(todoSto2);
    }

    todos.splice(id, 1);
    todos1.splice(id, 1);
    todos2.splice(id, 1);

    localStorage.setItem('DoneTaskTitle', JSON.stringify(todos));
    localStorage.setItem('DoneTaskContent', JSON.stringify(todos1));
    localStorage.setItem('DoneTaksDate', JSON.stringify(todos2));

    M.toast({ html: 'ToDo Removed from List' });
    setTimeout(function () { location.href = 'allTodos.html'; }, 700);
    return false;
}

function show() {
    var todos = [];
    var todos1 = [];
    var todos2 = [];
    var todoSto = localStorage.getItem('DoneTaskTitle');
    var todoSto1 = localStorage.getItem('DoneTaskContent');
    var todoSto2 = localStorage.getItem('DoneTaksDate');

    if (todoSto !== null) {
        todos = JSON.parse(todoSto);
        todos1 = JSON.parse(todoSto1);
        todos2 = JSON.parse(todoSto2);
    }

    if (!todoSto || todoSto == null || todoSto == '') {
        var mainError = document.getElementById('lists');
        var errorDiv = document.createElement('div');

        errorDiv.classList.add('noItems')
        var text = document.createTextNode('You Have No ToDo');
        errorDiv.appendChild(text);
        mainError.appendChild(errorDiv);
    } else {
        var html = '<li>';
        for (var i = 0; i < todos.length; i++) {
            html += '<li><div class="collapsible-header"><i class="material-icons">assignment</i>' + todos[i] + '</div><div class="collapsible-body" style="background:white;color:black;"><i class="material-icons" style="vertical-align: middle;margin: 1px 17px 0 0;">done</i><span><span id="dates"><b>' + todos2[i] + '</b></span> <br><span style="margin-left: 40px;">' + todos1[i] + '</span></span><span style="float:right;"><button class="remove waves-effect waves-light btn" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">clear</i></button></span></div></li>';
        };
        html += '</li>';

        document.getElementById('lists').innerHTML = html;

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
show();