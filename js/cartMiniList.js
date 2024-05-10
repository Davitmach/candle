var Cart_list = document.getElementById('Product_list');

setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/product/cartMiniList.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                Cart_list.innerHTML = data;
                var Title2 = Cart_list.querySelectorAll('#Title_box')

                for (e of Title2) {
                    e.addEventListener('click', (Event) => {
                        if (location.href == 'http://127.0.0.1:5500/pages/about/about.html') {
                            location.href = `../../productPage.html?name=${Event.target.dataset.name}`

                        }
                        else if (location.href == 'http://127.0.0.1:5500/home.html') {
                            location.href = `./productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/pages/faq/faq.html') {
                            location.href = `../../productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/pages/contact/contact.html') {
                            location.href = `../../productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/pages/blog/blog.html') {
                            location.href = `../../productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/pages/blogPage/blogPage.html') {
                            location.href = `../../productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/pages/shop/shop.html') {
                            location.href = `../../productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/cartPage.html') {
                            location.href = `./productPage.html?name=${Event.target.dataset.name}`
                        }
                        else if (location.href == 'http://127.0.0.1:5500/likePage.html') {
                            location.href = `./productPage.html?name=${Event.target.dataset.name}`
                    }
                    else if (location.href == 'http://127.0.0.1:5500/productPage.html') {
                        location.href = `./productPage.html?name=${Event.target.dataset.name}`
                }
                    })
                }

            }
        }
    };



    xhr.send();
}, 200);