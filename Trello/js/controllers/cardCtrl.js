angular.module('app').controller('cardCtrl', function (cardFactory) {
  this.deleteCard = function (card) {
    cardFactory.deleteCard(card);
  }

  this.editFlag = false;
  this.editingCard = null;

  this.editCard = function (card) {
    this.editFlag = true;
    this.editingCard = angular.copy(card);
  }

  this.updateCard = function (card) {
    cardFactory.updateCard(this.editingCard);
    this.editingCard = null;
    this.editFlag = false;
  };
});
