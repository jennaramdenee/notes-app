(function(exports){

  var SingleNoteView = function(note) {

    SingleNoteView.prototype.changeToHtml = function(note){
      return "<div>" + note.view() + "</div>"
    };
  }

exports.SingleNoteView = SingleNoteView;

})(this);
