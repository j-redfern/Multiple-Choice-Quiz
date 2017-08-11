var totalScores = 0;

$(document).ready(function(){
  $('#Q1 input').click(function(){
    if($(this).val() === 'Purple'){
      totalScores++;
    }

  })

  $('#Q2 input').click(function(){
    if($(this).val() === 'Green'){
      totalScores++;
    }
  })

  $('#Q3 input').click(function(){
    if($(this).val() === 'Pink'){
      totalScores++;
    }
  })

  $('#Q4 input').click(function(){
    if($(this).val() === 'Grey'){
      totalScores++;
    }
  $("#Total").html('Total Score: ' + totalScores);
  })


})
