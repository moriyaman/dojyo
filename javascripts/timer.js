$(function(){
  $('input#startBtn').click(function(){
    startTimer();
  });
  $('input#stopBtn').click(function(){
    stopTimer();
  });
});

function startTimer(){
  var sec_count = 0;
  var min_count = 0;
  time_counter = setInterval(function(){
    sec_count += 1;
    if (sec_count === 5){
      min_count += 1;
      sec_count = 0;
    }
    $('span.sec').text(sec_count);
    $('span.min').text(min_count);
    if (min_count === 3){
      alert('できあがり！');
      stopTimer(time_counter);
    }
  },1000);
}

function stopTimer(timer){
  clearInterval(timer);
}
