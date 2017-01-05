function testNoteIsCreated() {

  note = new Note("Hello");

  if (note.text !== "Hello") {
    throw new Error("Incorrect note created")
  };

  if (note.view() !== note.text) {
    throw new Error("Note.view did not display the note correctly")
  }


    if (note.viewId() !== note.id) {
      throw new Error("Note.id did not display the note ID correctly")
    }
};

testNoteIsCreated();
