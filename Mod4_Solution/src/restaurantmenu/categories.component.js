(function () {
'use strict';
//console.log("Passei em Categories");
angular.module('data')
.component('categories', {
  templateUrl: 'src/restaurantmenu/templates/categories.template.html',
  bindings: {
    categories : '<'
  }
});



})();
