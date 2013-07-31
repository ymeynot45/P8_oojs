$(document).ready(function() {
  var dicecup = new Array();

  $('#roller button.add').on('click', function() {
    var dice = new Die();
    $('.dice').append(dice.home);
    dicecup.push(dice);
  });


  $('#roller button.roll').on('click', function() {
    $.each(dicecup, function(index, die) {
      return die.value;
    });
  });

  function Die(){
    this.value = 0;   
  };

  Die.prototype = {
    home: '<div class="die"><script>this.value</script></div>',
    value: this.roll,
    roll: function() {
      return Math.floor((Math.random()*6)+1);
    }
  };
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
