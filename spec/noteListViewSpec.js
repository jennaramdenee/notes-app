function UnorderedListofNotesCreatedZeroNotes(){

  list = new List();
  listView = new ListView();

  if(listView.changeToHtml(list) !== "<ul></ul>") {
    throw new Error("Bad list view");
  }
};

UnorderedListofNotesCreatedZeroNotes();


function UnorderedListofNotesCreatedTwoNotes(){

  list = new List();
  listView = new ListView();

  list.add("note1");
  list.add("note2");

  if(listView.changeToHtml(list) !== "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>") {
    throw new Error("Bad list view");
  }
};

UnorderedListofNotesCreatedTwoNotes();
