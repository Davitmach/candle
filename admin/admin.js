anime({
    targets: '.Menu_box .Anim_box',
    opacity: [0, 1],
    translateX: [-100, 0],
    delay: anime.stagger(100)
})
var Title_box = document.getElementById('Title')
var Container = document.getElementById('Info_container');
Title_box.innerHTML = '<h1>Products</h1>'

var Product = document.getElementById('Products')
var Like = document.getElementById('Like')
var Cart = document.getElementById('Cart')

Product.addEventListener('click', () => {
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Products</h1>'
    console.log('Product');
})
Like.addEventListener('click', () => {
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Like</h1>'
})
Cart.addEventListener('click', () => {
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Cart</h1>'
})
function Products() {
    Container.innerHTML = '';

    var Product_container = document.createElement('div')
    Container.append(Product_container)
    var Add_product_box = document.createElement('div')
    Add_product_box.classList.add('Add_product')
    Container.append(Add_product_box)
    Add_product_box.innerHTML = `
<div class='Title_box'><h1>Add Product</h1></div>
<div id='Error_box'></div>
<div class='Inputs_box'>
<form>
<input name='img' type='text' placeholder='Img'  >
<input name='name' type='text' placeholder='Name'>
<input name='tags' type='text' placeholder='Tags'>
<input name='description' type='text' placeholder='Description'>
<input name='price' type='text' placeholder='Price'>
<button id='Submit_btn'>ADD</button>
</form>
</div>
`;
    var Products = document.createElement('div');
    Products.classList.add('Products');
    Container.append(Products);
    var Products_table = document.createElement('table');
    Products.append(Products_table);

}
Products()

Like.addEventListener('click',()=> {
    Liked();
})

function Liked() {
Container.innerHTML = '';
setInterval(() => {
    var xhr9 = new XMLHttpRequest();
xhr9.open('POST', 'http://candle.ua/product/liked.php', true);
xhr9.onload = () => {
    if (xhr9.readyState === XMLHttpRequest.DONE) {
        if (xhr9.status === 200) {
            let data = xhr9.response;
     Container.innerHTML = data;
           
        }
    }
};
xhr9.send();
}, 200);






}
function Get_edit_product(id) {
    Title_box.innerHTML = '<h1>Product_edit</h1>'
    Container.innerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/admin/getEditProduct.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;

                Container.innerHTML = data;
                var form = Container.querySelector('form')

                var Edit_btn = Container.querySelector('#Edit_product_btn');
                Edit_btn.addEventListener('click', () => {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/admin/editProduct.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;

                                console.log(data);

                            }
                        }
                    };

                    let formData = new FormData(form);

                    xhr.send(formData);

                })




            }
        }
    };



    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id);

}