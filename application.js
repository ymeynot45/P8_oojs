$(document).ready(function() {
  var dicecup = new Array();

  $('#roller button.add').on('click', function() {
    var dice = new Die();
    dicecup.push(dice);
  });


  $('#roller button.roll').on('click', function() {
    $.each(dicecup, function(index, die) {
      die.value.append(die.location);
    });
  });

  function Die(){
    this.value = 0;   
  };

  Die.prototype = {
    location: '<div class="die">0</div>',
    value: this.roll,
    roll: function() {
      return Math.floor((Math.random()*6)+1);
    }
  };
});

  // $('#roller button.add').on('click', function() {
  //   $('.dice').append('<div class="die">0</div>');
  // });

  // $('#roller button.roll').on('click', function() {
  //   $('.die').each(function(k, die) {
  //     $(die).roll();
  //     $(die).text(value);
    // });
  // });
