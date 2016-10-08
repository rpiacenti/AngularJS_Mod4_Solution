(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  .constant('ApiCategoryMenu', "https://davids-restaurant.herokuapp.com/categories.json");
  .constant('ApiItemMenu', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");


  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getItemsForCategory(categoryShortName) = function (categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiCategoryMenu)
      }).then(function (result) {
        // process result and only keep items that match
        var foundCategories = [];
        if(shearchTerm.length == 0){
          return foundCategories;
        }else{
          var it;
          for(it in result.data){ //scan resulta.data objects
            var name = result.data[it].name;
            var shortName = result.data[it].short_name;
            var instructions = result.data[it].special_instructions;
            var url = result.data[it].url;
            var category = {
              name : name,
              short_name : shortName,
              instructions : instructions
              url : url
            };
            foundCategories.push(item);
          }
        }
        // return processed items
        return foundCategories;
      })

      service.getItemsForCategory = function (categoryShortName) {
        return $http({
          method: "GET",
          url: (ApiBasePath+categoryShortName)
        }).then(function (result) {
          // process result and only keep items that match
          var foundItems = [];
          if(shearchTerm.length == 0){
            return foundItems;
          }else{
            var it;
            for(it in result.data.menu_items){ //scan resulta.data objects
              var name = result.data.menu_items[it].name;
              var shortName = result.data.menu_items[it].short_name;
              var description = result.data.menu_items[it].description;
              var item = {
                name : name,
                short_name : shortName,
                description : description
              };
              foundItems.push(item);
            }
          }
          // return processed items
          return foundItems;
        })
      }
    }
  })();
