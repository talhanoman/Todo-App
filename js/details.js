function taskDetails() {
    var EleId = + localStorage.getItem('editId');

    var title = JSON.parse(localStorage.getItem("title"));
    var description = JSON.parse(localStorage.getItem('content'));
    var date = JSON.parse(localStorage.getItem('date'));

    var DoneTaskTitle = title.slice(EleId, EleId + 1);
    var DoneTaskContent = description.slice(EleId, EleId + 1);
    var DoneTaks = date.slice(EleId, EleId + 1);

    document.getElementById('title').innerHTML = DoneTaskTitle;
    document.getElementById('content').innerHTML = DoneTaskContent;
    document.getElementById('date').innerHTML = DoneTaks;
}

done.onclick = function () {
    var EleId = + localStorage.getItem('editId');

    // task done
    var title = JSON.parse(localStorage.getItem("title"));
    var content = JSON.parse(localStorage.getItem('content'));
    var date = JSON.parse(localStorage.getItem('date'));

    var DoneTaskTitle = title.splice(EleId, 1);
    var DoneTaskContent = content.splice(EleId, 1);
    var DoneTaks = date.splice(EleId, 1);

    var CompleteTitle = DoneTaskTitle[0];
    var CompleteContent = DoneTaskContent[0];
    var CompleteDate = DoneTaks[0];

    localStorage.setItem('title', JSON.stringify(title));
    localStorage.setItem('content', JSON.stringify(content));
    localStorage.setItem('date', JSON.stringify(date));

    // creating new localstorage values
    var completeTitle = localStorage.getItem('DoneTaskTitle');
    var completeContent = localStorage.getItem('DoneTaskContent');
    var completeDate = localStorage.getItem('DoneTaksDate');

    // storing title in localstorage
    if (completeTitle == null || completeContent == null || completeDate == null ) {
        CompleTodoTitle = [];
        CompleTodoContent = [];
        CompleTodoDate = [];
    }
    else {
        CompleTodoTitle = JSON.parse(completeTitle);
        CompleTodoContent = JSON.parse(completeContent);
        CompleTodoDate = JSON.parse(completeDate);
    }
    CompleTodoTitle.push(CompleteTitle);
    CompleTodoContent.push(CompleteContent);
    CompleTodoDate.push(CompleteDate);

    localStorage.setItem('DoneTaskTitle', JSON.stringify(CompleTodoTitle));
    localStorage.setItem('DoneTaskContent', JSON.stringify(CompleTodoContent));
    localStorage.setItem('DoneTaksDate', JSON.stringify(CompleTodoDate));

    window.location.href = "DoneTasks.html";
}
