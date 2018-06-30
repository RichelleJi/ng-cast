angular.module('video-player')

  .component('search', {
    bindings: {
      onClick: '<',
      result: '<'  
    },
    
    template: `
  <div class="search-bar form-inline">
  <input class="form-control" type="text" ng-model='$ctrl.result' />
    <button class="btn" ng-click="$ctrl.onClick($ctrl.result)" >
      <span class="glyphicon glyphicon-search"></span>
    </button>
  </div>
  `
  });
