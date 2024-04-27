var Total = document.getElementById('Total');
var Subtotal = document.getElementById('Subtotal');



setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/product/totalSubtotal.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
         Total.innerText =`$${data}.00`;
         Subtotal.innerText =`$${data}.00`;
            }
        }
    };


   
    xhr.send(); 
}, 200);