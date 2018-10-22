function update() {
    var sID = + localStorage.getItem('editId');
    var title = JSON.parse(localStorage.getItem("title"));
    var description = JSON.parse(localStorage.getItem('content'));
    var date = JSON.parse(localStorage.getItem('date'));
    var titleUpdate = title.slice(sID, sID + 1);

    var updatedescription = description.slice(sID, sID + 1);
    var updatedate = date.slice(sID, sID + 1);
    document.getElementById('title').value = titleUpdate;
    document.getElementById('content').value = updatedescription;
    document.getElementById('date').value = updatedate;
}

function updatee() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("content").value;
    var date = document.getElementById("date").value;


    // document.getElementById("message").innerHTML = "Task Updated Succesfully";
    var sID = localStorage.getItem('editId');
    var gettitle = JSON.parse(localStorage.getItem("title"));
    var getdescription = JSON.parse(localStorage.getItem('content'));
    var getdate = JSON.parse(localStorage.getItem('date'));
    gettitle.splice(sID, 1, title);
    getdescription.splice(sID, 1, description);
    getdate.splice(sID, 1, date);
    localStorage.setItem('title', JSON.stringify(gettitle))
    localStorage.setItem('content', JSON.stringify(getdescription))
    localStorage.setItem('date', JSON.stringify(getdate))
    return true;

} document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});

 $(document).ready(function() {
    M.updateTextFields();
});