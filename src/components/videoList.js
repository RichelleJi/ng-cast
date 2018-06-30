angular.module('video-player')
  .component('videoList', {
    bindings: {
      onClick: '<',
      videos: '<',
    },
  
    template: `
    <ul class="video-list">
      <video-list-entry
      on-click = "$ctrl.onClick"
      video = "video" 
      ng-repeat = "video in $ctrl.videos track by $index"
      ></video-list-entry>
    </ul>  
  `
  });
