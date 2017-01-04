function testNoteControllerExsist(){
    if( typeof(NoteController) !== "object" ){
      throw new Error('NoteController is not accessible.');
    }
}

function testNoteControllerHasShowList(){
  if( !NoteController.showList ){
    throw new Error('function showList is not available.');
  }
}

function testNoteControllerShowList(){
  var listHtml = "<ul><li><div>Favourite food: pesto</div></li></ul>"
  NoteController.showList(listHtml);
  var element = document.getElementById("app");
  if( element.innerHTML !== listHtml ){
    throw new Error('function showList is not displaying a correct list.');
  }
}

testNoteControllerExsist();
testNoteControllerHasShowList();
testNoteControllerShowList();
