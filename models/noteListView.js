(function(listViewExport){

  var ListView = function(){

  };


  ListView.prototype.changeToHtml = function(list){
    var listArray = list.view().map(function(note){
      return "<li><div><a href ='#notes/" + note.viewId() + "'>" + note.view().slice(0, 20) + "</a></div></li>";
    });
    return "<ul>" + listArray.join('') + "</ul>";
  };


  listViewExport.ListView = ListView;

})(this);
