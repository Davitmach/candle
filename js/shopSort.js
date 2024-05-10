var Title = document.querySelector('#Title_box_menu > h1');
var Default = document.getElementById('Default');
var Low_high = document.getElementById('LowHigh');
var High_low = document.getElementById('HighLow');
var Container = document.getElementById('Shop_container');
var Menu_btn = document.getElementById('Open_menu');
var Sort_menu = document.getElementById('Sort_menu');

var Counter = 1;
Menu_btn.addEventListener('click',()=> {

    Counter++;
    if(Counter % 2 == 0) {
        Sort_menu.style.height = '170px'
    }
    else {
        Sort_menu.style.height = '0'
    }
})
Title.innerHTML = Default.innerHTML;

Default.onclick = () => {

clearInterval(Interval)
        Title.innerHTML = '';
        Title.innerHTML = Default.innerHTML
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/shop/sortProduct.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                ResetFilter();
                let data = xhr.response;
                Container.innerHTML = '';
                Container.innerHTML = data;
                var Add_cart =document.querySelectorAll('#Add_to_cart');
                for(cart of Add_cart) {
                    cart.addEventListener('click',(Event)=> {
                        var xhr5 = new XMLHttpRequest();
                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                        xhr5.onload = () => {
                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                if (xhr5.status === 200) {
                                    clearInterval(Interval)
                                    let data = xhr5.response;
                                    console.log(data);
                                }
                            }
                        };
    
    
                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr5.send("id="+Event.target.dataset.id);
                    })
                }
             var Shop_page = document.querySelectorAll('#Title_box');
             
             for(shop of Shop_page) {
                
                shop.addEventListener('click',(Event)=> {
                 console.log(1);
                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                })
             }
            }
        }
    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=def');
}

Low_high.onclick = () => {
    clearInterval(Interval)
        Title.innerHTML = '';
        Title.innerHTML = Low_high.innerHTML

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/shop/sortProduct.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                ResetFilter();
                let data = xhr.response;
                Container.innerHTML = '';
                Container.innerHTML = data;
                var Add_cart =document.querySelectorAll('#Add_to_cart');
                for(cart of Add_cart) {
                    cart.addEventListener('click',(Event)=> {
                        var xhr5 = new XMLHttpRequest();
                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                        xhr5.onload = () => {
                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                if (xhr5.status === 200) {
                                    clearInterval(Interval)
                                    let data = xhr5.response;
                                    console.log(data);
                                }
                            }
                        };
    
    
                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr5.send("id="+Event.target.dataset.id);
                    })
                }
             var Shop_page = document.querySelectorAll('#Title_box');
             
             for(shop of Shop_page) {
                
                shop.addEventListener('click',(Event)=> {
                 console.log(1);
                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                })
             }
            }
        }
    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=lh');
}
High_low.onclick = () => {
    clearInterval(Interval)
        Title.innerHTML = '';
        Title.innerHTML = High_low.innerHTML

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/shop/sortProduct.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                ResetFilter();
                let data = xhr.response;
                Container.innerHTML = '';
                Container.innerHTML = data;
                var Add_cart =document.querySelectorAll('#Add_to_cart');
                for(cart of Add_cart) {
                    cart.addEventListener('click',(Event)=> {
                        var xhr5 = new XMLHttpRequest();
                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                        xhr5.onload = () => {
                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                if (xhr5.status === 200) {
                                    clearInterval(Interval)
                                    let data = xhr5.response;
                                    console.log(data);
                                }
                            }
                        };
    
    
                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr5.send("id="+Event.target.dataset.id);
                    })
                }
             var Shop_page = document.querySelectorAll('#Title_box');
             
             for(shop of Shop_page) {
                
                shop.addEventListener('click',(Event)=> {
                 console.log(1);
                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                })
             }
            }
        }
    };


    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=hl');
}