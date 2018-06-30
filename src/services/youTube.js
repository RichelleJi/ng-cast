angular.module('video-player')
  .service('youTube', function($http) {
      this.search = (string, callback) => {
        $http.get( 'https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: window.YOUTUBE_API_KEY, 
            part: 'snippet', type: 'video', 
            q: string, maxResults: 5,
            videoEmbeddable: 'true',
            safeSearch: 'strict'
          } 
        }).then(function(data) {
          callback(data.data.items);
        })
      }


    return this;
});