var Cart_list = document.getElementById('Product_list');
setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/product/cartMiniList.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
Cart_list.innerHTML = data;


            }
        }
    };


 
    xhr.send();
}, 200);