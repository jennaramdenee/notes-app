(function(exportList){

  'use strict';

  var List = function() {
      this.list = [];
      this.currentNoteId = 0;
  };

  List.prototype.add = function(text) {
    var note = new Note(text, this.currentNoteId);
    this.currentNoteId += 1
    return this.list.push(note);
  };

  List.prototype.view = function() {
    return this.list;
  };

  exportList.List = List;
}) (this);
