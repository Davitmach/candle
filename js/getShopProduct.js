var Container = document.getElementById('Shop_container');
var Pagination = document.getElementById('Pagination_container');
var Navigation = document.getElementById('Navigation_container');
var Prev = Navigation.querySelector('#Prev');
var Next = Navigation.querySelector('#Next');

var Interval = setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://candle.ua/shop/getShop.php', true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
               
                Container.innerHTML = data;
           
                var Add_cart =document.querySelectorAll('#Add_to_cart');
                for(cart of Add_cart) {
                    cart.addEventListener('click',(Event)=> {
                        var xhr5 = new XMLHttpRequest();
                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                        xhr5.onload = () => {
                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                if (xhr5.status === 200) {
                                    clearInterval(Interval)
                                    let data = xhr5.response;
                                    console.log(data);
                                }
                            }
                        };
    
    
                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr5.send("id="+Event.target.dataset.id);
                    })
                }
             var Shop_page = document.querySelectorAll('#Title_box');
             
             for(shop of Shop_page) {
                
                shop.addEventListener('click',(Event)=> {
                 console.log(1);
                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                })
             }
            }
        }
    };



    xhr.send();
}, 200);


var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://candle.ua/shop/pagination.php', true);
xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;

            Pagination.innerHTML = data;
            var Pags = Pagination.querySelectorAll('div');
            Pags[0].classList.add('Before')
            for (r of Pags) {
                r.addEventListener('click', (Event) => {
                    for (e of Pags) {
                        e.classList.remove('Before')
                    }
                    Event.target.classList.add('Before')

                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                     location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };


                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + Event.target.dataset.page);
                })
            }
            Next.addEventListener('click', (Event) => {
                Event.preventDefault()
                if (Pags[0].classList.value == 'Before') {
                    Pags[0].classList.remove('Before');
                    Pags[1].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                           
                                     location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 2);
                }
                else if (Pags[1].classList.value == 'Before') {
                    Pags[1].classList.remove('Before');
                    Pags[2].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 3);
                }
                else if((Pags[2].classList.value == 'Before')) {
                    Pags[2].classList.remove('Before');
                    Pags[3].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                     location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 4);
                }
                else if(Pags[Pags.length - 1].classList.value == 'Before') {
                    Pags[Pags.length - 1].classList.remove('Before');
                    Pags[0].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                     location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 1);
                }
            })
            Prev.addEventListener('click',(Event)=> {
                Event.preventDefault()
                if(Pags[0].classList.value == 'Before') {
                    
                    Pags[0].classList.remove('Before');
                    Pags[Pags.length - 1].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                        
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 4);
                }
                else if(Pags[Pags.length -1].classList.value == 'Before') {
                    Pags[Pags.length - 1].classList.remove('Before');
                    Pags[Pags.length - 2].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 3);
                }
                else if(Pags[Pags.length -2].classList.value == 'Before') {
                    Pags[Pags.length - 2].classList.remove('Before');
                    Pags[Pags.length - 3].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                     location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 2);
                }
                else if(Pags[Pags.length -3].classList.value == 'Before') {
                    Pags[Pags.length - 3].classList.remove('Before');
                    Pags[Pags.length - 4].classList.add('Before');
                    var xhr4 = new XMLHttpRequest();
                    xhr4.open('POST', 'http://candle.ua/shop/getShop.php', true);
                    xhr4.onload = () => {
                        if (xhr4.readyState === XMLHttpRequest.DONE) {
                            if (xhr4.status === 200) {
                                clearInterval(Interval)
                                let data = xhr4.response;
                                Container.innerHTML = data;
                                var Add_cart =document.querySelectorAll('#Add_to_cart');
                                for(cart of Add_cart) {
                                    cart.addEventListener('click',(Event)=> {
                                        var xhr5 = new XMLHttpRequest();
                                        xhr5.open('POST', 'http://candle.ua/shop/addCartFromShop.php', true);
                                        xhr5.onload = () => {
                                            if (xhr5.readyState === XMLHttpRequest.DONE) {
                                                if (xhr5.status === 200) {
                                                    clearInterval(Interval)
                                                    let data = xhr5.response;
                                                    console.log(data);
                                                }
                                            }
                                        };
                    
                    
                                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        xhr5.send("id="+Event.target.dataset.id);
                                    })
                                }
                             var Shop_page = document.querySelectorAll('#Title_box');
                             
                             for(shop of Shop_page) {
                                
                                shop.addEventListener('click',(Event)=> {
                                 console.log(1);
                                    location.href =`../../productPage.html?id=${Event.target.dataset.id}`
                                })
                             }
                            }
                        }
                    };
                    xhr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr4.send("page=" + 1);
                }
            })
        }
    }
};



xhr.send();

