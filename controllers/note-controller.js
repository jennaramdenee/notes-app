

(function(exports) {
  exports.NoteController = {
    showList: function(listHtml) {
      var element = document.getElementById("app");
      element.innerHTML = listHtml;
    }
  }
})(this);
