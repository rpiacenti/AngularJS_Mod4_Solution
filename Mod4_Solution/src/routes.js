(function () {
'use strict';

angular.module('MenuApp')
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

//  List categories
  .state('mainCategories', {
    url: '/main-categories',
    templateUrl: 'src/restaurantmenu/templates/main-categories.template.html',
    controller: 'categoriesController as mainCategories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
    })

  //Item detail
  // .state('categories.item', {
  //   templateUrl: 'src/restaurantmenu/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   params: {
  //     categoryId: null
  //   }
  // });
console.log("Router");
}

})();
