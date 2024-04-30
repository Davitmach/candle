var Cart_list = document.getElementById('Product_list');
setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/product/cartMiniList.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
Cart_list.innerHTML = data;
var Title2= Cart_list.querySelectorAll('#Title_box')

for(e of Title2) {
e.addEventListener('click',(Event)=> {
    location.href = `./productPage.html?name=${Event.target.dataset.name}`
   
})
}

            }
        }
    };


 
    xhr.send();
}, 200);