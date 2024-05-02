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
var Message = document.getElementById('Message')
var Blog = document.getElementById('Blog');
var Interval;

Blog.addEventListener('click', () => {
    Title_box.innerHTML = '';
    Title_box.innerHTML = '<h1>Blog</h1>'
    Blogs();
})

Message.addEventListener('click', () => {
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Messages</h1>'
    Messages();
})
Product.addEventListener('click', () => {
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Products</h1>'
    Products();

})
Like.addEventListener('click', () => {
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Like</h1>'
    Liked();
})
Cart.addEventListener('click', () => {
    AddCart();
    Title_box.innerHTML = ''
    Title_box.innerHTML = '<h1>Cart</h1>'
})

function Products() {
    clearInterval(Interval)
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

    var Form = document.querySelector('form');
    var Btn = document.querySelector('#Submit_btn');
    var info = document.getElementById('Info_container');
    var Products = document.querySelector('.Products >table');


    Btn.addEventListener('click', () => {
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


    Interval = setInterval(() => {
        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'http://candle.ua/admin/getProduct.php', true);
        xhr2.onload = () => {
            if (xhr2.readyState === XMLHttpRequest.DONE) {
                if (xhr2.status === 200) {
                    let data = xhr2.response;
                    Products.innerHTML = data;

                    var Td = Products.querySelectorAll('td');
                    Td.forEach(element => {
                        if (element.innerText.length > 14 && element.innerText !== `Delete
          Edit` ) {
                            element.innerText = element.innerText.substring(0, 10) + '...'

                        }
                    });




                    if (data !== '<tr><td>ID</td><td>IMG</td><td>NAME</td><td>TAGS</td><td>DESCRIPTION</td><td>PRICE</td><td>ACTIONS</td></tr>') {
                        var Delete_btn = document.querySelectorAll('#Delete_btn');
                        var Edit_btn = document.querySelectorAll('#Edit_btn');
                        for (item of Edit_btn) {
                            item.addEventListener('click', (Event) => {


                                Get_edit_product(Event.target.dataset.idedit)
                            })
                        }
                        for (del of Delete_btn) {
                            del.addEventListener('click', (Event) => {
                                var xhr = new XMLHttpRequest();
                                xhr.open('POST', 'http://candle.ua/admin/deleteProduct.php', true);
                                xhr.onload = () => {
                                    if (xhr.readyState === XMLHttpRequest.DONE) {

                                        if (xhr.status === 200) {
                                            let data = xhr.response;



                                        }
                                    }
                                };
                                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                xhr.send("id=" + Event.target.dataset.iddel);

                            })
                        }

                    }


                }
            }
        };



        xhr2.send();
    }, 300);

}
Products();
function Messages() {
    clearInterval(Interval)
    Container.innerHTML = '';
    var Message_container = document.createElement('div');
    Message_container.classList.add('Messages');
    Container.append(Message_container)
    var Message_table = document.createElement('table');

    Message_container.append(Message_table);
    Interval = setInterval(() => {
        var xhr9 = new XMLHttpRequest();
        xhr9.open('POST', 'http://candle.ua/admin/message.php', true);
        xhr9.onload = () => {
            if (xhr9.readyState === XMLHttpRequest.DONE) {
                if (xhr9.status === 200) {
                    let data = xhr9.response;
                    Message_table.innerHTML = data;

                }
            }
        };
        xhr9.send();
    }, 200);
}
function Liked() {
    clearInterval(Interval)
    Container.innerHTML = '';
    var Like_container = document.createElement('div');
    Like_container.classList.add('Likes');
    Container.append(Like_container)
    var Like_table = document.createElement('table');

    Like_container.append(Like_table);
    Interval = setInterval(() => {
        var xhr9 = new XMLHttpRequest();
        xhr9.open('POST', 'http://candle.ua/admin/liked.php', true);
        xhr9.onload = () => {
            if (xhr9.readyState === XMLHttpRequest.DONE) {
                if (xhr9.status === 200) {
                    let data = xhr9.response;
                    Like_table.innerHTML = data;

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
function Get_edit_blog(id) {
    Title_box.innerHTML = '<h1>Blog_edit</h1>'
    Container.innerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/admin/getEditBlog.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;

                Container.innerHTML = data;
                var form = Container.querySelector('form')

                var Edit_btn = Container.querySelector('#Edit_blog_btn');
                Edit_btn.addEventListener('click', () => {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://candle.ua/admin/editProduct.php', true);
                    xhr.onload = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let data = xhr.response;



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

function AddCart() {
    clearInterval(Interval)
    Container.innerHTML = '';
    var Cart_container = document.createElement('div');
    Cart_container.classList.add('Add_cart');
    Container.append(Cart_container)
    var Cart_table = document.createElement('table');

    Cart_container.append(Cart_table);
    Interval = setInterval(() => {
        var xhr9 = new XMLHttpRequest();
        xhr9.open('POST', 'http://candle.ua/admin/cart.php', true);
        xhr9.onload = () => {
            if (xhr9.readyState === XMLHttpRequest.DONE) {
                if (xhr9.status === 200) {
                    let data = xhr9.response;
                    Cart_table.innerHTML = data;

                }
            }
        };
        xhr9.send();
    }, 200);
}
function Blogs() {
    clearInterval(Interval)
    Container.innerHTML = '';

    var Blog_container = document.createElement('div')
    Container.append(Blog_container)
    var Add_blog_box = document.createElement('div')
    Add_blog_box.classList.add('Add_blog')
    Container.append(Add_blog_box)
    Add_blog_box.innerHTML = `
<div class='Title_box'><h1>Add Blog</h1></div>
<div id='Error_box'></div>
<div class='Inputs_box'>
<form>
<input name='img' type='text' placeholder='Img'  >
<input name='name' type='text' placeholder='Name'>
<input name='date' type='text' placeholder='Date'>
<input name='description' type='text' placeholder='Description'>
<button id='Submit_btn'>ADD</button>
</form>
</div>
`;
    var Blogs = document.createElement('div');
    Blogs.classList.add('Blogs');
    Container.append(Blogs);
    var Blogs_table = document.createElement('table');
    Blogs.append(Blogs_table);

    var Form = document.querySelector('form');
    var Btn = document.querySelector('#Submit_btn');

    var Blog = document.querySelector('.Blogs >table');


    Btn.addEventListener('click', (Event) => {
        Event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://candle.ua/admin/addBlog.php', true);
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


    Interval = setInterval(() => {
        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'http://candle.ua/admin/getBlog.php', true);
        xhr2.onload = () => {
            if (xhr2.readyState === XMLHttpRequest.DONE) {
                if (xhr2.status === 200) {
                    let data = xhr2.response;

                    Blog.innerHTML = data;

                    var Td = Blog.querySelectorAll('td');
                    Td.forEach(element => {
                        if (element.innerText.length > 14 && element.innerText !== `Delete
    Edit` ) {
                            element.innerText = element.innerText.substring(0, 10) + '...'

                        }
                    });




                    if (data !== '<tr><td>ID</td><td>IMG</td><td>NAME</td><td>TAGS</td><td>DESCRIPTION</td><td>PRICE</td><td>ACTIONS</td></tr>') {
                        var Delete_btn = document.querySelectorAll('#Delete_btn');
                        var Edit_btn = document.querySelectorAll('#Edit_btn');
                        for (item of Edit_btn) {
                            item.addEventListener('click', (Event) => {


                                Get_edit_blog(Event.target.dataset.idedit)
                            })
                        }
                        for (del of Delete_btn) {
                            del.addEventListener('click', (Event) => {
                                var xhr = new XMLHttpRequest();
                                xhr.open('POST', 'http://candle.ua/admin/delBlog.php', true);
                                xhr.onload = () => {
                                    if (xhr.readyState === XMLHttpRequest.DONE) {

                                        if (xhr.status === 200) {
                                            let data = xhr.response;



                                        }
                                    }
                                };
                                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                xhr.send("id=" + Event.target.dataset.iddel);

                            })
                        }

                    }


                }
            }
        };



        xhr2.send();
    }, 300);
}