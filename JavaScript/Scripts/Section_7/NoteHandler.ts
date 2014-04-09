declare var $;
$(function () {
    var noteCollection = new ns.NoteCollection();
    $("form button").click(function (event) {
        event.stopImmediatePropagation();
        var note = new ns.Node($("textarea").val());
        noteCollection.addNote(note);

        return false;
    });
    $(".viewNotes").click(function () {
        $(".notes").html(noteCollection.printNotes());
    }); 
});