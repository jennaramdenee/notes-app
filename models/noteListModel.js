(function(exportList){

  'use strict';

  var List = function() {
      this.list = [];
  };

  List.prototype.add = function(text) {
    var note = new Note(text);
    return this.list.push(note);
  };

  List.prototype.view = function() {
    return this.list;
  };

  exportList.List = List;
}) (this);
