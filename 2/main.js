(function() {
  $('#submit').on('click', function() {
    var number = $('#form').val(); // ** 入力フォームに入力された文字列
    var answer = 0;

    // ** TODO - 『true』の部分に数字かどうかの判定をする
    if (!isNaN(number)) {
      // ** TODO - 数字だったら、1からnumberまで順番に足し算してく
      for (var i = 1; i <= number; i++) {
        answer += i;
        console.log(answer);
      }
    }

    alert(answer);
  });
}.call(this));
