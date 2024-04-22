var Product_container = document.getElementById('Perfumes');

var xhr8 = new XMLHttpRequest();
xhr8.open('POST', 'http://candle.ua/product/getProduct.php', true);
xhr8.onload = () => {
    if (xhr8.readyState === XMLHttpRequest.DONE) {
        if (xhr8.status === 200) {
            let data = xhr8.response;
            Product_container.innerHTML = '';
            Product_container.innerHTML = data;
            var Observer = new IntersectionObserver((entries, observer) => {
                entries.map((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: Product_container.querySelectorAll('.Perfume_box'),
                            opacity: [0, 1],
                            translateY: [200, 0],
                            delay: anime.stagger(100)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },

                {
                    threshold: 1
                })
            Observer.observe(Product_container)


            var Liked_btn = document.querySelectorAll('#Liked_btn');
            for (liked of Liked_btn) {
                liked.addEventListener('click', (Event) => {

                    var xhr10 = new XMLHttpRequest();
                    xhr10.open('POST', 'http://candle.ua/product/addLike.php', true);
                    xhr10.onload = () => {
                        if (xhr10.readyState === XMLHttpRequest.DONE) {
                            if (xhr10.status === 200) {
                                let data = xhr10.response;


                            }
                        }
                    };


                    xhr10.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr10.send("id=" + Event.target.dataset.like);
                })
            }
            var Add_to_cart = document.querySelectorAll('#Add_to_cart');
            for(cart of Add_to_cart) {
                cart.addEventListener('click',(Event)=> {
                   

                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'http://candle.ua/product/addCart.php', true);
                        xhr.onload = () => {
                            if (xhr.readyState === XMLHttpRequest.DONE) {
                                if (xhr.status === 200) {
                                    let data = xhr.response;
    console.log(data);
    
                                }
                            }
                        };
    
    
                        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr.send("idCart=" + Event.target.dataset.cart);
                    
                })
            }


        }
    }
};

xhr8.send();




