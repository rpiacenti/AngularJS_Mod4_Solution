(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/restaurantmenu/templates/item-datail.template.html',
  bindings: {
    items: '<'
  }
});

})();
