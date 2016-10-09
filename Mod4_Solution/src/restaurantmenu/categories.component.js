(function () {
'use strict';
//console.log("Passei em Categories");
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/restaurantmenu/templates/main-categories.template.html',
  bindings: {
    categories : '<'
  }
});

})();
