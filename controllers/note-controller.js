

(function(exports) {
  exports.noteController = {
    showList: function(something) {
      var listHtml = document.getElementById("app");
      console.log(listHtml);
      listHtml.innerHTML = something;
    }
  }
})(this);
