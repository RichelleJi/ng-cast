angular.module('video-player')
  .service('youTube', function($http) {
    var youTube = {
      async: function(string) {
      // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get( 'https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: window.YOUTUBE_API_KEY, 
            part: 'snippet', type: 'video', 
            q: string, maxResults: 5,
            videoEmbeddable: 'true',
            safeSearch: 'strict'
          } 
        });
        // Return the promise to the controller
        return promise;
      }
    };
    return youTube;

  });


// $http.get( 'https://www.googleapis.com/youtube/v3/search', 
// {key: window.YOUTUBE_API_KEY, 
//   part: 'snippet', type: 'video', 
//   q: 'surfing', maxResults: 5}
//   ).then(function(res) { console.log(res)});
   
//      delete $http.defaults.headers.common[‘X-Requested-With’];
// this.getData = function(callbackFunc) {
//      $http({
//          method: ‘GET’,
//          url: 'https://www.googleapis.com/youtube/v3/search',
//      }).success(function(data){
//          callbackFunc(data);
//      }).error(function(){
//          alert(“error”);
//      });
//   }