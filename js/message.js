var Form = document.getElementById('Form_message');
var Submit_btn = document.getElementById('Send_btn');
var Error_box = document.querySelector('#Error_box >p');

Submit_btn.addEventListener("click", function (event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/contact/message.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (data == 'success') {
                    Error_box.classList.remove('False')
                    Error_box.classList.add('True')
                    Error_box.innerHTML = 'You success outcoming message';
                }
                else {
                    Error_box.classList.remove('True')
                    Error_box.classList.add('False')
                    Error_box.innerHTML = data;
                }

            }
        }
    };

    let formData = new FormData(Form);

    xhr.send(formData);
});





