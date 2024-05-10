var Send_btn = document.querySelector('#Send_btn >button');
var Message = document.getElementById('Message');

Send_btn.addEventListener('click',()=> {
    if(Message.value.length > 5) {
        var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/contact/shopMessage.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                              console.log(data);
                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("message="+Message.value); 
    }
})