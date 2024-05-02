
async function Get_slider_info2() {
    try {
      var Slider_counter = 0;
     
      var Slider_info = await fetch('../package.json');
      var Pagintaion_box = document.getElementById('Pagination_container2');
  var Pagination_counter = 1;
  var Pagination_data = [];
  var Slider_box = document.getElementById('Slider_box_fix2');

      Data = await Slider_info.json();
      Data.Home.Second_slider.map((item)=> {
        var Pagination = document.createElement('div');
         Pagination.classList.add(`Pagination${Pagination_counter}`)
         Pagintaion_box.append(Pagination)
         var Pagination_span = document.createElement('span')
         Pagination_span.innerText = Pagination_counter
         Pagination.append(Pagination_span);
         Pagination.querySelector('span').setAttribute('data-slider',Pagination_counter)
         Pagination_counter++;
      
        Pagination_data.push(Pagination);

     var Slider_page = document.createElement('div');
     Slider_page.classList.add('Slider_page');
     Slider_box.append(Slider_page);
     var Title_box = document.createElement('div')
     Title_box.classList.add('Title_box');
     Slider_page.append(Title_box)
     var Title = document.createElement('h1')
     Title.innerText = item.title;
     Title_box.append(Title);
     var Description_box = document.createElement('div');
     Description_box.classList.add('Description_box');
     Slider_page.append(Description_box);
     var Description = document.createElement('p');
     Description.innerText = item.description;
     Description_box.append(Description);
     var Person_box = document.createElement('div');
     Person_box.classList.add('Person_box');
     Slider_page.append(Person_box);
     var Img_box = document.createElement('div');
     Img_box.classList.add('Img_box');
     Person_box.append(Img_box);
     var Img = document.createElement('img');
     Img.src = item.img;
     Img_box.append(Img);
     var Info_box = document.createElement('div');
     Info_box.classList.add('Info_box')
     Person_box.append(Info_box);
     var Name_box = document.createElement('div');
     Name_box.classList.add('Name_box');
    Info_box.append(Name_box);
     var Name = document.createElement('h1');
     Name.innerText = item.name;
     Name_box.append(Name);
     var Profession_box = document.createElement('div');
     Profession_box.classList.add('Profession_box');
     Info_box.append(Profession_box);
     var Profession = document.createElement('span');
     Profession.innerText = item.profession;
     Profession_box.append(Profession)
      })
      var Slider_px =0;
     function PagBefore() {
       for(pg of Pagination_data) {
        pg.querySelector('span').classList.remove('Active');
       }
         var Pag = Pagination_data[Slider_counter]
      Pag.querySelector('span').classList.add('Active')
      
     }
     PagBefore();
for(pagination of Pagination_data) {
    
    pagination.addEventListener('click',(Event)=> {
        if(Event.target.dataset.slider == 1) {
         
           Slider_px = 0;
           Slider(Slider_px)
           Slider_counter = 0;
           PagBefore();
        }
        else if(Event.target.dataset.slider == 2) {
       
            Slider_px = 650;
            Slider(Slider_px)
            Slider_counter = 1;
            PagBefore();
        }
        else {
            Slider_px = 1300;
            Slider(Slider_px)
            Slider_counter = 2;
            PagBefore();
        }
    })
}

function Slider(px) {
    Slider_box.style.transform = `translateX(-${px}px)`
}

    }
    catch (error) {
  
    }
  }
  Get_slider_info2()
  
  