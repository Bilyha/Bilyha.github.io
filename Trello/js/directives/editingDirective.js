angular.module('app').directive('editingDirective', function () {
  const keys = {
    escape: 27    //code escape key
  }

  return {
    scope: {
      isEditing: '=' //for two ways data binding
    },

    link: function (scope, element, attrs) {

      element.on('keyup', function (e) {
          if (_.isEqual(e.keyCode, keys.escape)) {
            scope.isEditing = false;
            
            scope.$apply();
          }
      })
    }
  }
});
