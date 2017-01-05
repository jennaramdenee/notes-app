(function(exports) {

  var Note = function(text, id){
    this.text = text;
    this.id = id;
  };

  Note.prototype.view = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
