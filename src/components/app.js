angular.module('video-player')
  .component('app', {
  // bindings: {
    
  // }, 
    controller: function (youTube, $scope) {
    
    // $scope.callYouTube = function() {
    //   new youTube();
    // }
      
      this.val = '';
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
    
      this.searchResults = (result) => {
        var context = this;
        new youTube.search(result).then(function(d) {
          $scope.data = d;
          context.videos = $scope.data.data.items;
          context.currentVideo = context.videos[0];
        });
      };
      

    
      // $scope.data = null;
      // dataService.getData(function(dataResponse) {
      //   $scope.data = dataResponse;
      // });
    }, template:
  
  `
  <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search
          on-click= "$ctrl.searchResults"
          result= "$ctrl.result"
        ><h5><em>search</em> component goes here</h5></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player
        video = "$ctrl.currentVideo"
        ></video-player>
      </div>
      <div class="col-md-5">
        <video-list 
          on-click = "$ctrl.selectVideo"
          videos = "$ctrl.videos" 
        ><h5><em>videoList</em> component goes here</h5></video-list>
      </div>
    <div>
  </div>
`
  }); 

// myApp.controller(‘AngularJSCtrl’, function($scope, dataService) {
//     $scope.data = null;
//     dataService.getData(function(dataResponse) {
//         $scope.data = dataResponse;
//     });
// });