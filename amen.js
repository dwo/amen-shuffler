drumSampleSort = function(a, b) {
  if(a > b) {
    return -1
  } else {
    return 1
  }
}

$(document).ready(function(){
  var wait = 190;

  strike = function() {
    if(drumSamples.queue.length == 0) {
      return;
    }

    nextSample = drumSamples.queue.shift();
    if(nextSample.src.match(/kick/)) {
      $('#kick').animate({marginLeft: '+=10'}, 95);
    } else if(nextSample.src.match(/snare/)) {
      $('#snare').animate({marginTop: '+=10'}, 95);
    }
    nextSample.play();
    if(nextSample.src.match(/kick/)) {
      $('#kick').animate({marginLeft: '0'}, 95)
    } else if(nextSample.src.match(/snare/)) {
      $('#snare').animate({marginTop: '0'}, 95)
    }

    chance = Math.floor(Math.random() * 10);
    switch(chance)
    {
    case 0:
      drumSamples.queue.splice(4, 0, nextSample);
      break;
    case 1:
      drumSamples.queue.splice(6, 0, nextSample);
      break;
    case 2:
      drumSamples.queue.reverse();
      drumSamples.queue.push(nextSample);
      break;
    case 3:
      drumSamples.queue.sort(drumSampleSort);
      drumSamples.queue.push(nextSample);
      break;
    default:
      drumSamples.queue.push(nextSample);
      break;
    }
    //$('#debug').text('');
    //$.each(drumSamples, function() {
    //  $('#debug').append(this.src + '<br />');
    //});

    setTimeout(strike, wait);
  }

  $('#stop').click(function() {
    drumSamples.queue = []
  });

  $('#start').click(function() {
    drumSamples.populateQueue();
    sample = drumSamples.queue.shift();
    sample.play();
    setTimeout(strike, wait);
  });
});

