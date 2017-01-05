
function testSingleNoteCanBeViewed(){

  var note = new Note("Favourite drink: seltzer");
  var singleNoteView = new SingleNoteView(note);

  if (singleNoteView.changeToHtml(note) !== "<div>Favourite drink: seltzer</div>"){
    throw new Error("The single note view has not been converted to HTML correctly");
  }
}

testSingleNoteCanBeViewed();
