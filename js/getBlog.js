var Blog_container = document.getElementById('Blogs');

setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/blog/getBlog.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                Blog_container.innerHTML = data;

            }
        }
    };



    xhr.send();
}, 200);