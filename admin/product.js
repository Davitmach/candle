var Form = document.querySelector('form');
var Btn = document.querySelector('#Submit_btn');
var info = document.getElementById('Info_container');
var Products = document.querySelector('.Products >table');


Btn.addEventListener('click',()=> {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/admin/addProduct.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
         
               
            }
        }
    };
 
    let formData = new FormData(Form);

    xhr.send(formData);

})


setInterval(() => {
    var xhr2 = new XMLHttpRequest();
    xhr2.open('POST', 'http://candle.ua/admin/getProduct.php', true);
    xhr2.onload = () => {
        if (xhr2.readyState === XMLHttpRequest.DONE) {
            if (xhr2.status === 200) {
                let data = xhr2.response;
         Products.innerHTML = data;
 
         var Td = Products.querySelectorAll('td');
         Td.forEach(element => {
         if(element.innerText.length > 14 && element.innerText !== `Delete
      Edit` )   {
      element.innerText = element.innerText.substring(0,10)+'...'
      
      }
         });
   
   
    
       
        if(data !== '<tr><td>ID</td><td>IMG</td><td>NAME</td><td>TAGS</td><td>DESCRIPTION</td><td>PRICE</td><td>ACTIONS</td></tr>') {
           var Delete_btn = document.querySelectorAll('#Delete_btn');
            var Edit_btn = document.querySelectorAll('#Edit_btn');
            for(item of Edit_btn) {
                item.addEventListener('click',(Event)=> {
                    
                   
                   Get_edit_product( Event.target.dataset.idedit)
                })
            }
        for(del of Delete_btn) {
            del.addEventListener('click',(Event)=> {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://candle.ua/admin/deleteProduct.php', true);
                xhr.onload = () => {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        
                        if (xhr.status === 200) {
                            let data = xhr.response;
                  
                       
                            
                        }
                    }
                };
              xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send("id="+ Event.target.dataset.iddel);
        
               })
        }
         
        }
  
        
            }
        }
    };
 


    xhr2.send();
}, 300);
