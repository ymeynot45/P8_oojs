var dicecup = new Array();

dicecup.makeDie = function () {
  var dice = new Die();
  $('.dice').append(dice.home);
  dicecup.push(dice);
};

dicecup.prepdice = function() {
  $.each(dicecup, function(index, die) {
  die.roll();
  $(".dice div:nth-child(" + (index + 1)  + ")").text(die.value);
  });
};

function Die(){
  this.value = 0;   
};

Die.prototype = {
  home: '<div class="die"></div>',
  roll: function() {
    this.value = Math.floor((Math.random()*6)+1);
  }
};

$(document).ready(function() {

  $('#roller button.add').on('click', dicecup.makeDie);


  $('#roller button.roll').on('click', function() {
    $.each(dicecup, function(index, die) {
      die.roll();
      $(".dice div:nth-child(" + (index + 1)  + ")").text(die.value);
    });
  });
});
// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });
