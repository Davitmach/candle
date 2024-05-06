const urlParams = new URLSearchParams(window.location.search);
var Container = document.getElementById('Blog_container');

var xhr = new XMLHttpRequest();
xhr.open('POST','http://candle.ua/blog/blogPage2.php',true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
     Container.innerHTML = data;
        }
    }
};


xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("id="+urlParams.get('id')); 