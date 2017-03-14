angular.module('app').controller('listCtrl', function(listFactory, cardFactory) {
  this.removeList = (list) => listFactory.removeList(list);

  this.getCards =  (list) => cardFactory.getCards(list);

  this.createCard = (list) => {
    cardFactory.createCard(list, this.cardDescription);
    this.cardDescription = '';
  };
});
