angular.module('video-player')
  .component('app', {
      controller: function (youTube) {

      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      }


      youTube.search('cat', this.searchResults)

 

    }, template:
  
  `
  <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search
          string= "$ctrl.val"
          search-results = "$ctrl.searchResults"
          result="$ctrl.searchResults"
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