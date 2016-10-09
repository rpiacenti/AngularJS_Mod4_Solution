(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainMeuAppController', MainMeuAppController);


  MainMeuAppController.$inject = ['MenuDataService', 'items','Categories'];
  function MainShoppingListController(ShoppingListService, items) {
    var mainMenu = this;
    mainMenu.items = items;
    mainMenu.categories;
  }

})();
