var Like_counter = document.getElementById('Like_counter');


setInterval(() => {
    var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://candle.ua/product/likeCounter.php', true);
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response;
Like_counter.innerText = `( ${data} )`

                }
            }
        };

  

        xhr.send();

    
}, 200);