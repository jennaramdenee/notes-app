(function(exports){

  exports.NoteController = {

    initialize: function(noteList, noteListView){
      this.noteList = noteList;
      this.noteList.addNote("Instatiated Note");
      this.noteListView = new NoteListView(noteList)
    },

    // convertToHTML: function(){
    //   var element = document.getElementById("app");
    //   element.innerHTML = this.noteListView.convert();
    // },
    //
    // showSingleNoteHTML: function(){
    //   window.addEventListener("hashchange", renderSingleNoteHTML)
    // },
    //
    // renderSingleNoteHTML: function()){
    //   changeSingleNoteHTML(getSingleNoteHTML())
    // },
    //
    // findNoteURL: function(location){
    //   return location.hash.split("#notes/")[1]
    // },
    //
    // findNoteById: function(id){
    //   return this.noteList.list[parseInt(id)]
    // },
    //
    // getSingleNoteHTML: function() {
    //   return new SingleNoteView(findNoteById(findNoteURL(window.location))).convert()
    // },
    //
    // changeSingleNoteHTML: function(text){
    //   document.getElementById("app").innerHTML = text
    // },

  };
  //

  // showSingleNoteHTML();
  //
  // function showSingleNoteHTML(){
  //   window.addEventListener("hashchange", renderSingleNoteHTML)
  // }
  //
  // function renderSingleNoteHTML(){
  //   changeSingleNoteHTML(getSingleNoteHTML())
  // }
  //
  // function findNoteURL(location){
  //   return location.hash.split("#notes/")[1]
  // }
  //
  // function findNoteById(id){
  //   return this.noteList.list[parseInt(id)]
  // }
  //
  // function getSingleNoteHTML() {
  //   return new SingleNoteView(findNoteById(findNoteURL(window.location))).convert()
  // }
  //
  // function changeSingleNoteHTML(text){
  //   document.getElementById("app").innerHTML = text
  // }



})(this);
