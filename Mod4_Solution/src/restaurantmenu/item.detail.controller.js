(function () {
  'use strict';

  angular.module('data')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['$stateParams','items','categories'];
  function ItemDetailController($stateParams,items,categories) {
    var itemDetail = this;
    itemDetail.items = items;
    itemDetail.catogory= categories[$stateParams.catIndex].name;
    console.log(itemDetail.catogory);
  }

})();
