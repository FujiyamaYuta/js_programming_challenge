(function() {
  $('#submit').on('click', function() {
    // 初期化
    $('#comment').empty();

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      'content-type': 'application/json'
    })
      .done(function(data) {
        for (var i = 0; i <= data.length; i++) {
          $('#comment').append(
            `
          <div class="ui comments">
            <div class="comment">
              <div class="content">
                <a class="author">` +
              data[i].id +
              `</a>
                <div class="text">
                  ` +
              data[i].title +
              `
                </div>
                <div class="actions">
                  <a class="reply">` +
              data[i].body +
              `</a>
                </div>
              </div>
            </div>
          </div>
            `
          );
        }
      })
      .fail(function(hoge, status) {
        console.error(status);
      });
  });
}.call(this));
