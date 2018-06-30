angular.module('video-player')

  .component('search', {
    bindings: {
      onClick: '<',
      val: '<'  
    },
    
    template: `
  <div class="search-bar form-inline">
  <input class="form-control" type="text" ng-model='$ctrl.val' />
    <button class="btn" ng-click="$ctrl.onClick($ctrl.val)" >
      <span class="glyphicon glyphicon-search"></span>
    </button>
  </div>
  `
  });
