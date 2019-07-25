(function() {
  $('#submit').on('click', function() {
    var number = $('#form').val(); // ** 入力フォームに入力された文字列

    // ** TODO - 『true』の部分に数字かどうかの判定をする
    if (!isNaN(number)) {
      // ** TODO - 数字だったら、numberに+3する
      number = parseInt(number) + 3;
    }

    alert(number);
  });
}.call(this));
