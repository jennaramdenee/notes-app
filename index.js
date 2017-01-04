var list = new List();
var listView = new ListView();
list.add("Favourite drink: seltzer");
var listHtml = listView.changeToHtml(list);
NoteController.showList(listHtml);
