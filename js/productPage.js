const urlParams = new URLSearchParams(window.location.search);

var Main_img = document.getElementById('Main_img');
var Img1 = document.getElementById('Img1');
var Img2 = document.getElementById('Img2');
var Img3 = document.getElementById('Img3');
var Name_box = document.getElementById('Name')
var Price_box = document.getElementById('Price');
var Description_box = document.getElementById('Description');
var Add_to_cart = document.getElementById('Add_cart_box');
var Like = document.getElementById('Like_btn')
var Counter = document.getElementById('Counter');
var Minus_counter = document.getElementById('Minus_counter');
var Plus_counter = document.getElementById('Plus_counter');
var Wishlist = document.getElementById('Wishlist');
Minus_counter.addEventListener('click', () => {
    if (Counter > 1) {
        Counter.innerText -= 1;
    }
})
Plus_counter.addEventListener('click', () => {
    Counter.innerText = parseInt(Counter.innerText) + 1;
})
var paramValue;
if(urlParams.get('id') ) {
    paramValue = urlParams.get('id');
    var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://candle.ua/product/productPage.php', true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
            var dataJson = JSON.parse(data);
            Main_img.innerHTML = `<img src="${dataJson.img}">`
            Img1.innerHTML = `<img src="${dataJson.img}">`
            Img2.innerHTML = `<img src="${dataJson.img}">`
            Img3.innerHTML = `<img src="${dataJson.img}">`
            Name_box.innerHTML = `<h1>${dataJson.name}</h1>`
            Price_box.innerHTML = `<span>$${dataJson.price}.00</span>`
            Description_box.innerHTML = `<p>${dataJson.description}</p>`
            Add_to_cart.innerHTML = `<button data-name="${dataJson.name}">ADD TO CART</button>`;
            Wishlist.innerHTML = `<span data-name="${dataJson.name}">ADD TO WISHLIST</span>`
            if (dataJson.liked == 'true') {
                Like.innerHTML = `<i class="fa-solid fa-heart" data-name="${dataJson.name}"></i>`
            }
            else {
                Like.innerHTML = `<i class="fa-regular fa-heart" data-name="${dataJson.name}"></i>`
            }
            Add_to_cart.addEventListener('click', (Event) => {

                var xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'http://candle.ua/product/addCartFromProductPage.php', true);
                xhr2.onload = () => {
                    if (xhr2.readyState === XMLHttpRequest.DONE) {
                        if (xhr2.status === 200) {
                            let data = xhr2.response;
                         
                        }
                    }
                };


                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send("totalInfo=" + Event.target.dataset.name + '.' + Counter.innerHTML);
            })
            Like.addEventListener('click', (Event) => {
                if (dataJson.liked == 'true') {
                    Like.innerHTML = `<i class="fa-regular fa-heart" data-name="${dataJson.name}"></i>`
                }
                else {
                    Like.innerHTML = `<i class="fa-solid fa-heart" data-name="${dataJson.name}"></i>`
                }
                var xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'http://candle.ua/product/addLikeFromProductPage.php', true);
                xhr2.onload = () => {
                    if (xhr2.readyState === XMLHttpRequest.DONE) {
                        if (xhr2.status === 200) {
                            let data = xhr2.response;
                         
                        }
                    }
                };


                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send("name=" + Event.target.dataset.name);
            })
            Wishlist.addEventListener('click', (Event) => {
                if (dataJson.liked == 'true') {
                    Like.innerHTML = `<i class="fa-regular fa-heart" data-name="${dataJson.name}"></i>`
                }
                else {
                    Like.innerHTML = `<i class="fa-solid fa-heart" data-name="${dataJson.name}"></i>`
                }
                var xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'http://candle.ua/product/addLikeFromProductPage.php', true);
                xhr2.onload = () => {
                    if (xhr2.readyState === XMLHttpRequest.DONE) {
                        if (xhr2.status === 200) {
                            let data = xhr2.response;
                        
                        }
                    }
                };


                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send("name=" + Event.target.dataset.name);
            })
        }
    }
};

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("id=" + paramValue);

}
else {
   paramValue = urlParams.get('name');
    var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://candle.ua/product/productPage.php', true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
            var dataJson = JSON.parse(data);
            Main_img.innerHTML = `<img src="${dataJson.img}">`
            Img1.innerHTML = `<img src="${dataJson.img}">`
            Img2.innerHTML = `<img src="${dataJson.img}">`
            Img3.innerHTML = `<img src="${dataJson.img}">`
            Name_box.innerHTML = `<h1>${dataJson.name}</h1>`
            Price_box.innerHTML = `<span>$${dataJson.price}.00</span>`
            Description_box.innerHTML = `<p>${dataJson.description}</p>`
            Add_to_cart.innerHTML = `<button data-name="${dataJson.name}">ADD TO CART</button>`;
            Wishlist.innerHTML = `<span data-name="${dataJson.name}">ADD TO WISHLIST</span>`
            if (dataJson.liked == 'true') {
                Like.innerHTML = `<i class="fa-solid fa-heart" data-name="${dataJson.name}"></i>`
            }
            else {
                Like.innerHTML = `<i class="fa-regular fa-heart" data-name="${dataJson.name}"></i>`
            }
            Add_to_cart.addEventListener('click', (Event) => {

                var xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'http://candle.ua/product/addCartFromProductPage.php', true);
                xhr2.onload = () => {
                    if (xhr2.readyState === XMLHttpRequest.DONE) {
                        if (xhr2.status === 200) {
                            let data = xhr2.response;
                        
                        }
                    }
                };


                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send("totalInfo=" + Event.target.dataset.name + '.' + Counter.innerHTML);
            })
            Like.addEventListener('click', (Event) => {
                if (dataJson.liked == 'true') {
                    Like.innerHTML = `<i class="fa-regular fa-heart" data-name="${dataJson.name}"></i>`
                }
                else {
                    Like.innerHTML = `<i class="fa-solid fa-heart" data-name="${dataJson.name}"></i>`
                }
                var xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'http://candle.ua/product/addLikeFromProductPage.php', true);
                xhr2.onload = () => {
                    if (xhr2.readyState === XMLHttpRequest.DONE) {
                        if (xhr2.status === 200) {
                            let data = xhr2.response;
                          
                        }
                    }
                };


                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send("name=" + Event.target.dataset.name);
            })
            Wishlist.addEventListener('click', (Event) => {
                if (dataJson.liked == 'true') {
                    Like.innerHTML = `<i class="fa-regular fa-heart" data-name="${dataJson.name}"></i>`
                }
                else {
                    Like.innerHTML = `<i class="fa-solid fa-heart" data-name="${dataJson.name}"></i>`
                }
                var xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'http://candle.ua/product/addLikeFromProductPage.php', true);
                xhr2.onload = () => {
                    if (xhr2.readyState === XMLHttpRequest.DONE) {
                        if (xhr2.status === 200) {
                            let data = xhr2.response;
                         
                        }
                    }
                };


                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send("name=" + Event.target.dataset.name);
            })
        }
    }
};

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("name=" + paramValue);

}


