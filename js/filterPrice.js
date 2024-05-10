var Input1 = document.getElementById('Input1');
var Input2 = document.getElementById('Input2');
var Price_1 = document.querySelector('#Value1 > h1');
var Price_2 = document.querySelector('#Value2 > h1');
var Price_1_value = Input1.value;
var Price_2_value =Input2.value;

var Apply_btn = document.querySelector('#Apply_btn > button');
var Container = document.getElementById('Shop_container');
var Reset_btn = document.querySelector('#Reset_btn >button');
Reset_btn.style.display = 'none';
Price_1.innerHTML = `$${Input1.value}-`
Price_2.innerHTML = `$${Input2.value}`



Input1.addEventListener('input',()=> {
    Reset_btn.style.display = 'flex'
    Price_1_value = Input1.value;
    Price_2_value = Input2.value;
    Price_1.innerHTML = `$${Input1.value}-`
    Price_2.innerHTML = `$${Input2.value}`
    if (parseInt(Input1.value) > parseInt(Input2.value)) {
        Input2.value = parseInt(Input1.value) + 1;
    }
})
Input2.addEventListener('input',()=> {
    Reset_btn.style.display = 'flex'
    Price_1_value = Input1.value;
    Price_2_value = Input2.value;
    Price_1.innerHTML = `$${Input1.value}-`
    Price_2.innerHTML = `$${Input2.value}`
    if (parseInt(Input2.value) < parseInt(Input1.value)) {
        Input1.value = parseInt(Input2.value) - 1;
    }
})

Apply_btn.addEventListener('click',()=> {
    var xhr = new XMLHttpRequest();
xhr.open('POST','http://candle.ua/shop/filterPrice.php',true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
 if(data !=='') {
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
     ResetFilter()
        location.href =`../../productPage.html?id=${Event.target.dataset.id}`
    })
 }
 }
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
xhr.send("filter=" +Price_1_value+'.'+Price_2_value);
})
Reset_btn.addEventListener('click',()=> {
   
 ResetFilter();
})
function ResetFilter() {
    Input1.value = 1;
    Input2.value = 80;
    Price_1.innerHTML = `$${Input1.value}-`
    Price_2.innerHTML = `$${Input2.value}`
    Reset_btn.style.display = 'none'
}
