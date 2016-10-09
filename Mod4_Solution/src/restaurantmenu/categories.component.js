(function () {
'use strict';
//console.log("Passei em Categories");
angular.module('data')
.component('categories', {
  templateUrl: 'src/restaurantmenu/templates/main-categories.template.html',
  bindings: {
    categories : '<'
  }
});

})();
