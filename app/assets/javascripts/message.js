$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html = 
       `<div class="chat-message">
          <div class="message__upper-info">
            <p class="message__upper-info__talker">
              ${message.user_name}
            </p>
            <p class="message__upper-info__data">
              ${message.created_at}
            </p>
          </div>
          <div class="lower-message__image">
            <p class="message__text">
              ${message.content}
            </p>
            <img src=${message.image} >
           </div>
        </div>
      </div>`
     return html;
   } else {
     var html = 
        `<div class="chat-message">
          <div class="message__upper-info">
            <p class="message__upper-info__talker">
              ${message.user_name}
            </p>
            <p class="message__upper-info__data">
              ${message.created_at}
            </p>
          </div>
          <div class="lower-message__image">
            <p class="message__text">
            ${message.content}
            </p>
          </div>
        </div>
      </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__messages').append(html);
    $('form')[0].reset();
    $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
    $('.submit-btn').attr('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
})
});