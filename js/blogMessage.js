var Form = document.getElementById('Form');

var Submit = document.getElementById('Submit_box');
var Mark = document.getElementById('Checkmark_box');

Submit.addEventListener('click',(Event)=> {
Mark.style.visibility = 'visible'
  setTimeout(() => {
    Mark.style.visibility = 'hidden'
  }, 1200);
    var xhr2 = new XMLHttpRequest();
xhr2.open('POST','http://candle.ua/contact/blogMessage.php',true);
xhr2.onload = () => {
    if (xhr2.readyState === XMLHttpRequest.DONE) {
        if (xhr2.status === 200) {
            let data = xhr2.response;
if(data == 'true') {

   Mark.innerHTML  = '<i class="fa-solid fa-check"></i>'
   var Icon = Mark.querySelector('i');

   Icon.classList.remove('False');
   Icon.classList.add('True');
}
else {
    Mark.innerHTML  = '<i class="fa-solid fa-xmark"></i>'
    var Icon = Mark.querySelector('i');
  Icon.classList.remove('True');
   Icon.classList.add('False');
}


   
        }
    }
};



var Form_data = new FormData(Form);
xhr2.send(Form_data);


Event.preventDefault()
  
})