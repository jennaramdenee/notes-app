function testListOfNotes() {

  var list = new List();

  list.add("Hello");
  if(list.view()[0].text !== "Hello") {
    throw new Error('The note was not accessible in the list');
  }

}

testListOfNotes();
