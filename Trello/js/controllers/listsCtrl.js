angular.module('app').controller('listsCtrl', function (listFactory) {
  this.lists = listFactory.getLists();

  this.addList = () => {
      listFactory.addList(this.listName);
      this.listName = '';
  };
});
