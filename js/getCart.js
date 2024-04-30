var Cart_container = document.querySelector('#Cart_container > table');
var CartUpdate_info = document.getElementById('Cart_update_info');

setInterval(() => {
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://candle.ua/product/getCartProduct.php', true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
            Cart_container.innerHTML = data;
            var Minus = document.querySelectorAll('#Minus_counter');
            var Plus = document.querySelectorAll('#Plus_counter');
            var Del_btn = document.querySelectorAll('#Delete_like_btn');
            for(del of Del_btn) {
                del.addEventListener('click',(Event)=> {
                   
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/delCart.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                    
                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("id="+Event.target.dataset.cartdelid); 
                })
            }
            for (min of Minus) {
                min.addEventListener('click', (Event) => {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/cartCounterActions.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                          CartUpdate_info.innerHTML = '';
                          CartUpdate_info.innerHTML = data;
                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("total="+Event.target.dataset.id +".minus"); 
                })
            }
            for(max of Plus) {
                max.addEventListener('click',(Event)=> {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/cartCounterActions.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                                CartUpdate_info.innerHTML = '';
                                CartUpdate_info.innerHTML = data;
                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("total="+Event.target.dataset.id +".plus"); 
                })
            }
        }
    }
};



xhr.send();
}, 200);