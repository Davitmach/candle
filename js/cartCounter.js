var Cart_counter = document.getElementById('Cart_counter');


setInterval(() => {
    var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://candle.ua/product/cartCounter.php', true);
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response;
Cart_counter.innerText = `( ${data} )`

                }
            }
        };

  

        xhr.send();

    
}, 200);