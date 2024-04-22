var Total_money = document.getElementById('Total_money_box');
setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/product/totalMoneyCart.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
Total_money.innerHTML = data;


            }
        }
    };


 
    xhr.send();
}, 200);