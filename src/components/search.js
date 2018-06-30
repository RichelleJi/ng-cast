angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      searchResults: '<'
    },
    
    controller: function(youTube) {
      this.service = youTube;
      this.val = 'cat';

      this.search = (string) => {
        youTube.search(string, this.result)
        }
      }
    , 
    
    template: `
  <div class="search-bar form-inline">
  <input class="form-control" type="text" ng-model='$ctrl.val' />
    <button class="btn" ng-click="$ctrl.search($ctrl.val)" >
      <span class="glyphicon glyphicon-search"></span>
    </button>
  </div>
  `
  });
