(function(exports) {

  var Note = function(text, id){
    this.text = text;
    this.id = id;
  };

  Note.prototype.view = function() {
    return this.text;
  };

  Note.prototype.viewId = function() {
    return this.id;
  }

  exports.Note = Note;

})(this);
