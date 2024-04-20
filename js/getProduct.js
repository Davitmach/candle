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
       for(liked of Liked_btn) {
        liked.addEventListener('click',(Event)=> {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://candle.ua/product/addLike.php', true);
            xhr.onload = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        let data = xhr.response;
                 console.log(data);
                       
                    }
                }
            };
         
          
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send("id="+Event.target.dataset.idLike);
        })
       }
        }
    }
};

xhr8.send();


