function testListOfNotes() {

  var list = new List();

  list.add("Hello");
  if(list.view()[0].text !== "Hello") {
    throw new Error('The note was not accessible in the list');
  }
}

testListOfNotes();

function testIdCurrentNoteId(){

  var list = new List();

  list.add("Listing")
  if(list.currentNoteId !== 1){
    throw new Error('Current Note ID has not increased')
  }
}

testIdCurrentNoteId();
