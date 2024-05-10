var Search_input = document.getElementById('Search_input');
var Search_btn = document.getElementById('Search_btn');
var Container = document.getElementById('Shop_container');
Search_btn.addEventListener('click', () => {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/shop/search.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if(data !== '') {
                    clearInterval(Interval)
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
                 }}
                 else {
                    ResetFilter()
                    clearInterval(Interval)
                    Container.innerHTML = "<h1 id='Error'>The product's for this filter is empty</h1>"
                    Navigation.style.visibility = 'hidden';
                    Pagination.style.visibility = 'hidden';
                 }
               

            }
        }
    };




    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchURL="+Search_input.value);
})