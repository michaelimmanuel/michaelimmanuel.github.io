let counter = 0;

$('button').on('click',function() {
    counter++;
    $(this).css({
      top: (Math.random()*80)+'%',
      left: (Math.random()*80)+'%' 
    });
    if(counter == 10) {
        alert('cupu');
    }
  });