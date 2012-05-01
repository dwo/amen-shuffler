var drumSamples = function() {
  var sampleNames = ['01_kick', '02_kick', '03_snare', '04_hat', '05_hat',
                     '06_doublekick', '07_snare', '08_hat',
                     '11_kick', '12_kick', '13_snare', '14_hat', '15_hat',
                     '16_kick', '17_hat', '18_snare',
                     '21_hat', '22_doublekick', '23_snare', '24_hat', '25_hat',
                     '26_crash', '27_crash', '28_snare'],
      injectTags = function() {
        var i = sampleNames.length
        while (i--) {
          var drumSample = document.createElement('audio');
          drumSample.setAttribute('src', '/samples/' + sampleNames[i] + '.ogg');
          drumSample.setAttribute('type', 'audio/ogg')
          drumSample.setAttribute('preload', 'auto')
          drumSample.setAttribute('class', 'drum-sample')
          drumSample.load();

          tagContainer = document.getElementById('samples')
          $(tagContainer).append(drumSample);
        }
      },
      getAudioTags = function() {
        return document.getElementsByClassName('drum-sample');
      }
  return {
    queue : [],

    populateQueue : function() {
      var audioTags = getAudioTags();
      if(audioTags.length == 0) {
        injectTags();
        audioTags = getAudioTags();
      }
      i = audioTags.length;
      while(i--) {
        this.queue.push(audioTags[i]);
      }
    }

  }
}();
