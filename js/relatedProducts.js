var Container = document.getElementById('Related_container');
var xhr22 = new XMLHttpRequest();
xhr22.open('POST', 'http://candle.ua/product/relatedProducts.php', true);
xhr22.onload = () => {
    if (xhr22.readyState === XMLHttpRequest.DONE) {
        if (xhr22.status === 200) {
            let data = xhr22.response;
            Container.innerHTML = data;
            var Title_box = document.querySelectorAll('#Title');
            for(title of Title_box) {
                title.addEventListener('click',(Event)=> {
                    location.href = `./productPage.html?id=${Event.target.dataset.id}`
                })
            }
            var Add_cart_btn = Container.querySelectorAll('button');
            for (btn of Add_cart_btn) {
                btn.addEventListener('click', (Event) => {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/product/addCartRelatedProduct.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;
                              
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



xhr22.send();