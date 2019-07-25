(function() {
  $('#submit').on('click', function() {
    var str = '';
    $('#comment').empty();

    for (var i = 0; i < 5; i++) {
      var random = Math.round(Math.random() * 1);

      if (random == 0) {
        str += 'ズン';
      } else if ((random = 1)) {
        str += 'ドコ';
      }
      console.log(random);
    }

    $('#comment').append(str);

    if (str == 'ズンズンズンズンドコ') {
      alert('キヨシ');
    }
  });
}.call(this));
