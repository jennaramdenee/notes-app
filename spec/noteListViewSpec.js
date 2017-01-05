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

  if(listView.changeToHtml(list) !== "<ul><li><div><a href ='#notes/0'>note1</a></div></li><li><div><a href ='#notes/1'>note2</a></div></li></ul>") {
    throw new Error("Bad list view");
  }
};

UnorderedListofNotesCreatedTwoNotes();

function showTwentyCharacters(){

  list = new List();
  listView = new ListView();

  list.add("This is a really really really long note");

  if(listView.changeToHtml(list) !== "<ul><li><div><a href ='#notes/0'>This is a really rea</a></div></li></ul>"){
    throw new Error("More than 20 characters are being shown");
  }
};

showTwentyCharacters();

function showNoteNumberInNoteLink(){

  list = new List();
  listView = new ListView();

  list.add("This has an a note number included");

  if(listView.changeToHtml(list).includes('#notes/0') !== true) {
    throw new Error("There isn't a note id shown in the link")
  };
};
