(function () {
'use strict';

angular.module('dataModule')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurantmenu/templates/home.template.html'
  })

  // Premade list page
  // .state('categories', {
  //   url: '/main-list',
  //   templateUrl: 'src/restaurantmenu/templates/main-categories.template.html',
  //   controller: 'MainShoppingListController as mainList',
  //   resolve: {
  //     items: ['ShoppingListService', function (ShoppingListService) {
  //       return ShoppingListService.getItems();
  //     }]
  //   }
  // })

  // Item detail
  // .state('categories.item', {
  //   // url: '/item-detail/{itemId}',
  //   templateUrl: 'src/restaurantmenu/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   params: {
  //     itemId: null
  //   }
  // });

}

})();
