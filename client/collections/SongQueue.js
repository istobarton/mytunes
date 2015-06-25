// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    model: SongModel
  },

  playFirst: function(song){
    this.at(0).play();

  }


});
