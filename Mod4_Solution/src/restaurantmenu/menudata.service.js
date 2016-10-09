(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiCategoryMenu', "https://davids-restaurant.herokuapp.com/categories.json")
  .constant('ApiItemMenu', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

//  console.log("service");

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
    // service.getItemsForCategory = function (categoryShortName) {
    //   return $http({
    //     method: "GET",
    //     url: (ApiBasePath+categoryShortName)
    //   }).then(function (result) {
    //     // process result and only keep items that match
    //     var foundItems = [];
    //     if(shearchTerm.length == 0){
    //       return foundItems;
    //     }else{
    //       var it;
    //       for(it in result.data.menu_items){ //scan resulta.data objects
    //         var name = result.data.menu_items[it].name;
    //         var shortName = result.data.menu_items[it].short_name;
    //         var description = result.data.menu_items[it].description;
    //         var item = {
    //           name : name,
    //           short_name : shortName,
    //           description : description
    //         };
    //         foundItems.push(item);
    //       }
    //     }
    //     // return processed items
    //     return foundItems;
    //   })
    // }

  }

})();
