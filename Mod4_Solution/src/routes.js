(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);
console.log("Router");
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
    controller: 'categoriesController as listCategories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
    })

  //Item detail
  .state('mainCategories.itemDetail', {
    url: '/item-detail/{catIndex}',
    templateUrl: 'src/restaurantmenu/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
     items : ['$stateParams','MenuDataService','categories',
            function ($stateParams,MenuDataService,categories) {
              return MenuDataService.getItemsForCategory($stateParams.catIndex,categories)
            }]
     }
  });

}

})();
