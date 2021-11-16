const openrgt2 = document.querySelector('.js-register2')
const openrgt = document.querySelector('.js-register')
const modalrgt = document.querySelector('.js-register-close')
const modal = document.querySelector('.modal')
var topsale = document.querySelector('.top-sale select')
var listtopsale = document.querySelector('.top-sale .product-list')
const openlg = document.querySelector('.js-login')
const modallgcl = document.querySelector('.js-login-close')
const modallg = document.querySelector('.modal-login')
var listpro = document.querySelectorAll('.nav-content-list li a')
var product = document.querySelector('.product .product-list')

function closergt(params) {
    modal.classList.remove('open');
}
function openregister(params) {
    modal.classList.add('open');
}
function openregister2(params) {
    modallg.classList.remove('open');
    modal.classList.add('open');
}
openrgt2.addEventListener('click', openregister2);
openrgt.addEventListener('click', openregister);
modalrgt.addEventListener('click', closergt)


// login
function closelg(params) {
    modallg.classList.remove('open');
}
function openlogin(params) {
    modallg.classList.add('open');
}
openlg.addEventListener('click', openlogin)
modallgcl.addEventListener('click', closelg)



function list(obj) {
    switch (obj.id) {
        case 'p0':
            product.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo nữ sexy </p><button class="buy">Mua ngay</button></div></li> </ul> '
            break;
        case 'p1':
            product.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonam1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">Áo nam năng động cá tính</p><button class="buy">Mua ngay</button></div></li> </ul> '
            break;
        case 'p2':
            product.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/giaynam.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">Giày thể thao GG08</p><button class="buy">Mua ngay</button></div></li> </ul> '
            break;
        case 'p3':
            product.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonu2.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">Trang sức cho đàn ông </p><button class="buy">Mua ngay</button></div></li> </ul> '
            break;
    
        default:
            break;
    }
    
}

var listcontents = ["Quần áo nữ","Quần áo nam","Giày nam","Trang sức"];

var listcnt = document.querySelector('.nav-content-list')
var s= ''
for (var i =0;i<listcontents.length;i++)
{
    s += '<li><a href="#" id="p' + i + '" onclick="list(this)">' + listcontents[i]+'</a></li>'
}
listcnt.innerHTML = s;



function viewtopsale(inp) {
    switch (inp) {
        case 'ngay':
            listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo nữ sexy </p><button class="buy">Mua ngay</button></div></li> <li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo nữ sexy </p><button class="buy">Mua ngay</button></div></li></ul> '
            break;
        case 'thang':
            listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo nữ sexy </p><button class="buy">Mua ngay</button></div></li><li class="products" ><img src="./img/aonam1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">Áo nam năng động cá tính</p><button class="buy">Mua ngay</button></div></li> </ul> '
            break;
        case 'nam':
            listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/giaynam.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">Giày thể thao GG08</p><button class="buy">Mua ngay</button></div></li><li class="products" ><img src="./img/aonu1.PNG" alt="product"><div class="products-content"><p class="price">3.900.000 đ</p><p class="description">áo nữ sexy </p><button class="buy">Mua ngay</button></div></li> </ul> '
            break;

        default:
            break;
    }
}



