function add() {
    
    var todoTitle = document.getElementById('TodoTitle').value;
    var todoContent = document.getElementById('TodoContent').value;
    var todoDate = document.getElementById('TodoDate').value;

    if(todoTitle =='' || todoContent==''|| todoDate==''){
        M.toast({ html: 'Fields are Required' });
        return false;
    }else{
        var todos = new Array;
    var todos1 = new Array;
    var todos2 = new Array;
    var todos3 = new Array;

    var todos_str = localStorage.getItem('title');
    var todos_str1 = localStorage.getItem('content');
    var todos_str2 = localStorage.getItem('date');

    if (todos_str !== null || todos_str1 !== null || todos_str2 !== null) {
        todos = JSON.parse(todos_str);
        todos1 = JSON.parse(todos_str1);
        todos2 = JSON.parse(todos_str2);
    }
    todos.push(todoTitle);
    todos1.push(todoContent);
    todos2.push(todoDate);

    localStorage.setItem('title', JSON.stringify(todos));
    localStorage.setItem('content', JSON.stringify(todos1));
    localStorage.setItem('date', JSON.stringify(todos2));
    M.toast({ html: 'New Todo Added' });
    setTimeout(function () { location.href='allTodos.html'; }, 1000);

    return false;
    }
}
document.getElementById('add').addEventListener('click', add);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });