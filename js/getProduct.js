var Product_container = document.getElementById('Perfumes');


var xhr8 = new XMLHttpRequest();
xhr8.open('POST', 'http://candle.ua/product/getProduct.php', true);
xhr8.onload = () => {
    if (xhr8.readyState === XMLHttpRequest.DONE) {
        if (xhr8.status === 200) {
            let data = xhr8.response;
            Product_container.innerHTML = '';
            Product_container.innerHTML = data;
            var Product_box = Product_container.querySelectorAll('.Perfume_box');
            for(products of Product_box) {
                products.addEventListener('click',(Event)=> {
                    if(Event.target.dataset.id) {
                       location.href = `./productPage.html?id=${Event.target.dataset.id}`
                    }
                  
                })
            }
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

            var Mini_product_box = document.getElementById('Product_mini_box');
            var Background = document.getElementById('Product_background');
            Mini_product_box.style.visibility = 'hidden';
            var Mini_product_xmark = document.getElementById('Close_box');
            Mini_product_xmark.addEventListener('click', () => {
                Mini_product_box.style.visibility = 'hidden';
                Background.style.visibility = 'hidden'
            })
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
            for (cart of Add_to_cart) {
                cart.addEventListener('click', (Event) => {


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

            var Eye_btn = document.querySelectorAll('#Mini_product_box');
            var Name = Mini_product_box.querySelector('#Product_name');
            var Description = Mini_product_box.querySelector('.Product_description >p');
            var Price = Mini_product_box.querySelector('#Product_price >span');
            var Like_container = document.createElement('div');
            var Like_box = document.createElement('div');
            var Add_cart = Mini_product_box.querySelector('#Product_action');
            var Slider = document.getElementById('Slider_box');
            var Info_box = Mini_product_box.querySelector('.Info_box');
            for (eye of Eye_btn) {
                eye.addEventListener('click', (Event) => {

                    Background.style.visibility = 'visible'
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/getMiniProductBox.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status == 200 || xhr.status == 201) {
                                var data = JSON.parse(xhr.response);
                                Mini_product_box.style.visibility = 'visible';
                                Description.innerHTML = '';
                                Price.innerHTML = ''
                                Name.innerHTML = '';
                                Like_box.innerHTML = '';
                                Add_cart.innerHTML = '';
                                Slider.innerHTML = '';

                                var Img_data = [
                                    {
                                        img: data.img,
                                        position: 0
                                    },
                                    {
                                        img: data.img,
                                        positionX: 100,
                                        positionY: 20
                                    },
                                    {
                                        img: data.img,
                                        positionX: -100,
                                        positionY: 50
                                    },

                                    {
                                        img: data.img,
                                        positionX: 130,
                                        positionY: -20
                                    }
                                ]
                                Img_data.map((item) => {
                                    var Img_box = document.createElement('div');
                                    Img_box.classList.add('Img_box');
                                    Img_box.style.overflow = 'hidden';

                                    Slider.append(Img_box);
                                    var Img = document.createElement('img');
                                    Img.style.transform = `translateX(${item.positionX}px) translateY(${item.positionY}px)`
                                    Img.src = data.img
                                    Img_box.append(Img)
                                })



                                var Width = 0;
                                var Slide_counter = 1;
                                var Left_slide = document.querySelector('#Left_btn');
                                var Right_slide = document.querySelector('#Right_btn');
                                var LiveWidth = window.innerWidth
                                window.addEventListener('resize', () => {
                                    LiveWidth = window.innerWidth
                                    console.log(LiveWidth);
                                    if ( window.innerWidth < 1000) {
                                        Width = 0;
                                        Slide_counter =1;
                                        Slider.style.transform = 'translateX(0)'
                                      
                                    }

                                })
                                Right_slide.addEventListener('click', () => {

                                    if (Slide_counter < Slider.childElementCount) {
                                        Slide_counter += 1;

                                        if (LiveWidth < 1000 && LiveWidth > 464) {
                                            Width += 400;
                                        }
                                        else if(LiveWidth < 464 && LiveWidth > 320) {
                                           
                                            Width += 300;
                                        }
                                        else {
                                            Width += 500;
                                        }

                                        Slider.style.transform = `translateX(-${Width}px)`
                                    }
                                })
                                Left_slide.addEventListener('click', () => {

                                    if (Slide_counter > 1) {
                                        Slide_counter -= 1;


                                        if (LiveWidth < 1000 && LiveWidth > 464) {
                                            
                                            Width -= 400;
                                        }
                                        else if(LiveWidth < 464 && LiveWidth > 320) {
                                            Width -= 300;
                                        }
                                        else {
                                            Width -= 500;
                                        }
                                        Slider.style.transform = `translateX(-${Width}px)`
                                    }
                                })



                                Name.innerHTML = data.name;
                                Description.innerHTML = data.description;
                                Price.innerHTML = data.price + '$';
                                Like_container.classList.add('Like_container');
                                Info_box.append(Like_container);
                                Like_box.innerHTML = '<i class="fa-regular fa-heart"></i>';
                                Like_box.style.fontSize = '20px';
                                Like_box.style.cursor = 'pointer';

                                Like_box.querySelector('i').setAttribute('data-id', data.id);
                                Like_box.addEventListener('click', (Event) => {

                                    var xhr2 = new XMLHttpRequest();
                                    xhr2.open('POST', 'http://candle.ua/product/addLikeFromMiniProduct.php', true);
                                    xhr2.onload = () => {
                                        if (xhr2.readyState === XMLHttpRequest.DONE) {
                                            if (xhr2.status === 200) {
                                                let data = xhr2.response;
                                                console.log(data);
                                            }
                                        }
                                    };


                                    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                    xhr2.send("id=" + Event.target.dataset.id);
                                })
                                Like_container.append(Like_box);
                                var Counter_action = document.createElement('div');
                                Counter_action.classList.add('Counter_action');
                                Add_cart.append(Counter_action);
                                var Minus_counter = document.createElement('div')
                                Minus_counter.classList.add('Minus_counter');
                                Minus_counter.innerText = '-'
                                Counter_action.append(Minus_counter);
                                var Counter = document.createElement('div');
                                Counter.classList.add('Counter');
                                Counter.innerHTML = 1
                                Counter_action.append(Counter);
                                var Plus_counter = document.createElement('div');
                                Plus_counter.classList.add('Plus_counter');
                                Plus_counter.innerText = '+';
                                Counter_action.append(Plus_counter)

                                Minus_counter.addEventListener('click', () => {
                                    if (Counter.innerHTML > 1) {
                                        Counter.innerHTML -= 1
                                    }
                                })
                                Plus_counter.addEventListener('click', () => {
                                    Counter.innerText = parseInt(Counter.innerText) + 1;
                                })


                                var Add_cart_btn = document.createElement('button');
                                Add_cart_btn.classList.add('Add_cart_btn');
                                Add_cart_btn.innerText = 'ADD TO CART'
                                Add_cart_btn.setAttribute('data-id', data.id);
                                Add_cart_btn.addEventListener('click', (Event) => {

                                    var xhr = new XMLHttpRequest();
                                    xhr.open('POST', 'http://candle.ua/product/addCartFromMiniProduct.php', true);
                                    xhr.onload = () => {
                                        if (xhr.readyState === XMLHttpRequest.DONE) {
                                            if (xhr.status === 200) {
                                                let data = xhr.response;
                                                console.log(data);
                                            }
                                        }
                                    };


                                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                    xhr.send("totalInfo=" + Event.target.dataset.id + '.' + Counter.innerHTML);
                                })
                                Add_cart.append(Add_cart_btn);

                            }
                        }
                    };


                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("id=" + Event.target.dataset.id);
                })
            }


        }
    }
};

xhr8.send();




