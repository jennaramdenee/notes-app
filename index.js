var noteList = new NoteList();
var controller = new NoteController(noteList);

controller.convertToHTML();

document.getElementById("noteForm").addEventListener("submit", function(evt){
  console.log("inside submit handler")
  evt.preventDefault();
  noteList.addNote(evt.srcElement[0].value);
  controller.convertToHTML();
})

window.addEventListener("hashchange", function(){
  controller.renderSingleNoteHTML();
})
