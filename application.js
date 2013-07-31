var dicecup = new Array();

dicecup.makeDie = function () {
  var dice = new Die();
  dice.render();
  dicecup.push(dice); // i could just pass new Die(); as the arg but then I would have to refigure the render.
  // If I do it later it will rerender every time I roll the dice which is ineffiecent.
};

dicecup.rolldice = function() {
  $.each(dicecup, function(index, die) {
  die.roll();
  $(".dice div:nth-child(" + (index + 1)  + ")").text(die.value);
  });
};

function Die(){
  this.value = 0;   
};

Die.prototype = {
  art: '<div class="die"></div>',
  roll: function() {
    this.value = Math.floor((Math.random()*6)+1);
  },
  render: function(){
    $('.dice').append(this.art);
  }
};

$(document).ready(function() {

  $('#roller button.add').on('click', dicecup.makeDie);

  $('#roller button.roll').on('click', dicecup.rolldice);
});

