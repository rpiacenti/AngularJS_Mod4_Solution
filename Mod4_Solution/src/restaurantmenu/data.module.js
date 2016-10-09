(function () {
  'use strict';

  angular.module('data',[])
  .controller('categoriesController', categoriesController);
  // .controller('ItemDetailController', ItemDetailController);
//  console.log("data");

  categoriesController.$inject = ['categories'];
  function categoriesController(categories) {
    var mainCategories = this;
    mainCategories.categories = categories;
//    console.log(mainCategories.categories[0].name);
  }

  // ItemDetailController.$inject = ['MenuDataService','$stateParams', 'items'];
  // function ItemDetailController($stateParams, items) {
  //   var itemDetail = this;
  //   itemDetail.items = [];
  //   itemDetail.setSearchTerm = function () {
  //     var promise = MenuDataService.getMatchedMenuItems($stateParams.categoryId);
  //     promise.then(function (foundItems) {
  //       itemDetail.items = foundItems;
  //     });
  //   }
  // }
  })();
