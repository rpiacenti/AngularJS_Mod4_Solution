(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiCategoryMenu', "https://davids-restaurant.herokuapp.com/categories.json")
  .constant('ApiItemMenu', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

//  getItemsForCategory()

  MenuDataService.$inject = ['$q','$http', 'ApiCategoryMenu','ApiItemMenu']
  function MenuDataService($q,$http, ApiCategoryMenu, ApiItemMenu) {
    var service = this;

    service.getAllCategories = function () {
      var deferred = $q.defer();
      $http({
        method: "GET",
        url: (ApiCategoryMenu)
      }).then(function(result) {
	  	    deferred.resolve(result.data);
	    });
      return deferred.promise;
      //});
    }

    service.getItemsForCategory = function (catIndex,categories) {
        var deferred = $q.defer();
      //  var categories = service.getAllCategories();
        var category = categories[catIndex];
        console.log(category.short_name);
        var vUrl = ApiItemMenu+category.short_name;
        $http({
          method: "GET",
          url: (vUrl)
        }).then(function(result) {
            deferred.resolve(result.data.menu_items);
        });
        return deferred.promise;
      };


  }

})();
