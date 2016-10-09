(function () {
  'use strict';

  angular.module('data')
  .controller('categoriesController', categoriesController);

  categoriesController.$inject = ['categories'];
  function categoriesController(categories) {
    var listCategories = this;
    listCategories.categories = [];
    console.log(categories.length);
    listCategories.categories = categories;
  }

})();
