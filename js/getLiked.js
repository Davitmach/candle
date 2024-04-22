var Liked_container = document.querySelector('#Liked_container >table');

setInterval(() => {
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://candle.ua/product/getLikedProduct.php', true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
            Liked_container.innerHTML = data;
            var Xmark = document.querySelectorAll('#Delete_like_btn');
            for (del of Xmark) {
                del.addEventListener('click', (Event) => {

                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/delLike.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                          
                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("delId=" + Event.target.dataset.delid);
                })
            }
            var Add_cart = document.querySelectorAll('#Add_cart_btn');
            for(cart of Add_cart) {
                cart.addEventListener('click',(Event)=> {
                    console.log(Event.target);
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/addCartFromLike.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                          console.log(data);
                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("name=" + Event.target.dataset.name);
                })
            }
        }
    }
};



xhr.send();
}, 200);
