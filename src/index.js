const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openrgt2 = $('.js-register2')
const openrgt = $('.js-register')
const modalrgt = $('.js-register-close')
const modalRegister = $('.modal-register')
const topsale = $('.top-sale select')
const listtopsale = $('.top-sale .product-list')
const openlg = $('.js-login')
const modallgcl = $('.js-login-close')
const modalLogin = $('.modal-login')
const listpro = $$('.nav-content-list li a')
const product = $('.product .product-list')

function closeModal(modalElement) {
    modalElement.classList.remove('open');
}

function openModal(modalElement) {
    modalElement.classList.add('open');
}

console.log(modalRegister)

openrgt2.addEventListener('click', () => openModal(modalRegister));
openrgt.addEventListener('click', () => openModal(modalRegister));
modalrgt.addEventListener('click', () => closeModal(modalRegister))


openlg.addEventListener('click', () => openModal(modalLogin))
modallgcl.addEventListener('click', () => closeModal(modalLogin))



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

let listcontents = ["Quần áo nữ", "Quần áo nam", "Giày nam", "Trang sức"];

let listcnt = $('.nav-content-list')
let s = ''
for (let i = 0; i < listcontents.length; i++) {
    s += '<li><a href="#" id="p' + i + '" onclick="list(this)">' + listcontents[i] + '</a></li>'
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



