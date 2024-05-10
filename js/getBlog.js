var Blog_container = document.getElementById('Blogs');

setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/blog/getBlog.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                Blog_container.innerHTML = data;
var Btn = document.querySelectorAll('#Btn');
for(b of Btn) {
    b.addEventListener('click',(Event)=> {
      setTimeout(() => {
        if(location.href =='http://127.0.0.1:5500/home.html') {
            location.href =`./pages/blogPage/blogPage.html?id=${Event.target.dataset.id}` 
        }
        else if(location.href == 'http://127.0.0.1:5500/pages/about/about.html') {
            location.href =`../blogPage/blogPage.html?id=${Event.target.dataset.id}` 
        }
       
      }, 500);
      
    })
}



            }
        }
    };



    xhr.send();
}, 200);