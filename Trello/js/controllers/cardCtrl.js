angular.module('app').controller('cardCtrl', function (cardFactory) {
  this.deleteCard = (card) => cardFactory.deleteCard(card);

  this.editFlag = false;
  this.editingCard = null;

  this.editCard = (card) => {
    this.editFlag = true;
    this.editingCard = angular.copy(card);
  };

  this.updateCard = () => {
    cardFactory.updateCard(this.editingCard);
      this.editingCard = null;
      this.editFlag = false;
  };

});
