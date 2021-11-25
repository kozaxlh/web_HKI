const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let users = JSON.parse(localStorage.getItem('myUsers'));
let loginUser = JSON.parse(localStorage.getItem('loginUser'));
let products = JSON.parse(localStorage.getItem('products'));
let cart = JSON.parse(localStorage.getItem('cart'));
let order = JSON.parse(localStorage.getItem('order'));


if (!localStorage.getItem('myUsers'))
   users = [{
      email: "congty@gmail.com",
      password: "12345678",
      phone: "0142125671",
      typeUser: "admin",
   }]


if (!localStorage.getItem('products'))
   products = [
      {
         name: 'Giày thể thao GG08',
         type: 'Giay',
         price: 3900000,
         quantity: 200,
         img: './img/giaynam.PNG',
      },
      {
         name: 'Giày thể thao GG09',
         type: 'Giay',
         price: 3900000,
         quantity: 200,
         img: './img/giaynam2.PNG',
      },
      {
         name: 'Giày thể thao GG10',
         type: 'Giay',
         price: 3900000,
         quantity: 200,
         img: './img/giaynam3.PNG',
      },
      {
         name: 'Áo nam năng động cá tính',
         type: 'maleCloth',
         price: 3900000,
         quantity: 200,
         img: './img/aonam1.PNG',
      },
      {
         name: 'Áo nam năng động cá tính',
         type: 'maleCloth',
         price: 3900000,
         quantity: 200,
         img: './img/aonam2.PNG',
      },
      {
         name: 'Áo nam năng động cá tính',
         type: 'maleCloth',
         price: 3900000,
         quantity: 200,
         img: './img/aonam3.PNG',
      },
      {
         name: 'Áo nữ',
         type: 'femaleCloth',
         price: 3900000,
         quantity: 200,
         img: './img/aonu1.PNG',
      },
   ]

if (!localStorage.getItem('cart'))
   cart = [];

updateLocalStorage()

let productsHtml = [...products];
let productsInPage = 8;

const modal = $('.modal')
const btnOpenRegister = $('.js-register')
const btnOpenLogin = $('.js-login')

const topsale = $('.top-sale select')
const listtopsale = $('.top-sale .product-list')

const navItems = $$('.nav-content-list li a')
const product = $('.product .product-list')

render();

const buyBtns = $$('.products .js-buy');


// Modal
function closeModal(modalElement) {
   modalElement.classList.remove('open');
}

function openModal(modalElement) {
   modalElement.classList.add('open');
}

let htmlRegister = `
<div class="form-header">
<a href="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
<h2>Đăng ký</h2>
</div>
<div class="warning"></div>
<form class="form-content form-register">
<div class="form-group">
   <label class="form-label">Email</label>
   <input
      class="form-input"
      type="email"
      name="email"
      placeholder="Example@email.com"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">Mật khẩu</label>
   <input
      class="form-input"
      type="password"
      name="password"
      placeholder="Nhập mật khẩu từ 6 kí tự trở lên"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">Nhập lại mật khảu</label>
   <input
      class="form-input"
      type="password"
      name="comfirmpass"
      placeholder="Nhập lại mật khẩu"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">SĐT</label>
   <input
      class="form-input"
      type="number"
      name="phone"
      placeholder="0123456789"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label"></label>
   <div>
      <input
         class="form-input"
         type="checkbox"
         name="checkbox"
         placeholder="0123456789"
         value=""                
      />
      Tôi đồng ý với <a href="#">Điều khoản sử dụng</a>
   </div>
   <span class="message-error"></span>
</div>
<button class="form-submit">Submit</button>
</form>
`

let htmlLogin = `
<div class="form-header">
    <a href ="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
    <h2>Đăng Nhập</h2>
</div>
<div class="warning">
</div>
<form class="form-content form-login">
   <div class="form-group">
      <label class="form-label">Tài khoản email</label>
      <input
         class="form-input login-input"
         type="email"
         name="email"
         placeholder="example@gmail.com"
         value=""
      />
      <span class="message-error"></span>
   </div>
   <div class="form-group">
      <label class="form-label">Mật khẩu</label>
      <input
         class="form-input login-input"
         type="password"
         name="password"
         placeholder="Nhập mật khẩu"
         value=""
      />
      <span class="message-error"></span>
   </div>
   <button class="form-submit">Submit</button>
   <p>Bạn chưa có tài khoản? <a href="#" onclick="tranferRegister()">Đăng ký</a></p>
</form>
`

btnOpenRegister.addEventListener('click', () => {
   openModal(modal);
   $('.modal-form').innerHTML = htmlRegister;
   runCheckRegister();
});

btnOpenLogin.addEventListener('click', () => {
   openModal(modal);
   $('.modal-form').innerHTML = htmlLogin;
   runCheckLogin();
});



function tranferRegister() {
   $('.modal-form').innerHTML = htmlRegister
   runCheckRegister();
}

// Content Code
function viewTopSale(inp) {
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

//Lọc product

for (let item of navItems) {
   item.addEventListener('click', () => {
      productsHtml = [];
      for (let product of products) {
         if (item.getAttribute('typeproduct') == product.type)
            productsHtml.push(product);
      }
      render();
   });
}

$('.search a').addEventListener('click', () => {
   let searchValue = $('.search-ip').value.toLowerCase();
   productsHtml = [];
   for (let product of products) {
      if (product.name.toLowerCase().includes(searchValue))
         productsHtml.push(product);
   }
   $('.search-ip').value = '';
   render();
})


//========Validate=========
//Register form
function runCheckRegister() {
   Validator({
      form: '.form-register',
      formGroupSelector: '.form-group',
      errorSelector: '.message-error',
      rules: [
         Validator.isRequired(
            'input[name="email"]',
            "Vui lòng nhập email"
         ),
         Validator.isEmail('input[name="email"]'),
         Validator.isRequired(
            'input[name="password"]',
            "Vui lòng nhập mật khẩu"
         ),
         Validator.minLength('input[name="password"]', 6),
         Validator.isRequired(
            'input[name="comfirmpass"]',
            'Vui lòng nhập mật khẩu'
         ),
         Validator.isDuplicated(
            'input[name="comfirmpass"]',
            () => {
               return document.querySelector('input[name="password"]')
                  .value;
            },
            "Mật khẩu không trùng khớp"
         ),
         Validator.isRequired(
            'input[name="phone"]',
            "Vui lòng nhập số điện thoại"
         ),
         Validator.isCorrectPhone('input[name="phone"]'),
         Validator.isRequired(
            'input[name="checkbox"]',
            'Bạn chưa đồng ý điều khoản sử dụng'
         ),
      ],
      onSubmit: function (data) {
         checkRegister(data);
      },
   })

   function checkRegister(data) {
      let isFound = false;
      let s = ``
      for (let user of users) {
         if (data.email === user.email && data.phone === user.phone) {
            isFound = true;
            s = `Email và số điện thoại này đã được đăng ký`
         }
         else if (data.email === user.email) {
            isFound = true;
            s = `Email này đã được đăng ký. `
         }
         else if (data.phone === user.phone) {
            isFound = true;
            s = `Số điện thoại này đã được đăng ký`
         }

         if (isFound) {
            $('.warning').innerHTML = `<div class="block-warning">
                    <i class="fas fa-exclamation-circle"></i> ${s}</div>`
            break;
         }
      }
      if (!isFound) {
         updateUsers(data)
         window.location = "./index.html"
      }
   }

   function updateUsers(data) {
      users.push({
         email: data.email,
         password: data.password,
         phone: data.phone,
         typeUser: "member"
      });
      loginUser = users[users.length - 1];
      updateLocalStorage();
   }

   enableSubmit();
}

//Login form
function runCheckLogin() {
   Validator({
      form: '.form-login',
      formGroupSelector: '.form-group',
      errorSelector: '.message-error',
      rules: [
         Validator.isRequired(
            'input[name="email"]',
            "Vui lòng nhập email"
         ),
         Validator.isEmail('input[name="email"]'),
         Validator.isRequired(
            'input[name="password"]',
            "Vui lòng nhập mật khẩu"
         ),
         Validator.minLength('input[name="password"]', 6),
      ],
      onSubmit: function (data) {
         checkLogin(data)
      }
   });

   function checkLogin(data) {
      let isFound = false;
      for (let user of users) {
         if (data.email === user.email) {
            if (data.password == user.password) {
               isFound = true;
               checkUserType(user)
               break;
            }
         }
      }
      if (!isFound) {
         $('.warning').innerHTML = `<div class="block-warning">
                 <i class="fas fa-exclamation-circle"></i> Tài khoản hoặc mật khẩu của bạn đã sai
              </div>`
         resetInput()
      }
   }

   function resetInput() {
      let inputs = $$('input')
      for (let input of inputs) {
         input.value = '';
      }
   }

   function checkUserType(user) {
      if (user.typeUser === 'admin')
         window.location = "./admin.html"
      else {
         loginUser = user;
         updateLocalStorage()
         window.location = "./index.html"
      }
   }

   enableSubmit();
}

function updateLocalStorage() {
   let usersData = JSON.stringify(users);
   let loginUserData = JSON.stringify(loginUser);

   localStorage.setItem('myUsers', usersData);
   localStorage.setItem('loginUser', loginUserData)
}

function enableSubmit() {
   $('body').addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
         $('button[class="form-submit"]').click();
   })
}

//render
function render() {
   let myLogo = $('.nav .login-register');

   function htmlNumberPage() {
      let pages = Math.ceil(productsHtml.length / productsInPage);
      let pagesHTML = [];

      for (let i = 0; i < pages; i++) {
         pagesHTML.push(
            `<li class="product-pages-number" index="${i}"><a href="#">${i + 1}</a></li>`
         )
      }
      return pagesHTML.join("");
   }

   if (loginUser) {
      myLogo.innerHTML = `<div class="user-login">
          <p>Xin chào ${loginUser.email}</p>
          <a href="" id="logout" onclick="logout()">Đăng xuất</a>
       </div>`
   }
   let isInner = false;

   $('.product-pages').innerHTML = htmlNumberPage();

   if (!isInner) {
      $('.product-list').innerHTML = htmlProduct();
      isInner = true;
   }
   if (isInner) {
      for (let item of $$('.product-pages-number')) {
         item.addEventListener('click', () => {
            $('.product-list').innerHTML = htmlProduct(item.getAttribute('index'));
         })
      }
   }
}

function htmlProduct(index = 0) {
   let html = [];
   for (let i = index * productsInPage; i < index * productsInPage + productsInPage && i < productsHtml.length; i++) {
      html.push(`<li class="products">
         <img src="${productsHtml[i].img}" alt="product" />
         <div class="products-content">
            <p class="price">${productsHtml[i].price}đ</p>
            <p class="description">${productsHtml[i].name}</p>
            <button class="buy js-buy">Mua ngay</button>
         </div>
      </li>`)
   }

   return html.join("");
}

function logout() {
   loginUser = null;
   updateLocalStorage();
   render();
}

//cart
function updateProductToCart() {
   let cartData = JSON.stringify(cart);
   localStorage.setItem('cart', cartData);
}

for (let [index, btn] of buyBtns.entries()) {
   btn.addEventListener('click', () => {
      if (loginUser) {
         cart.push(createCartProduct(products[index]));
         updateProductToCart();
         renderCart();
      }
      else {
         alert('Bạn phải đăng nhập để có thể mua hàng!!');
         openModal(modal);
         $('.modal-form').innerHTML = htmlLogin;
         runCheckLogin();
      }
   })

   function createCartProduct(product) {
      let cartProduct = product;
      cartProduct.count = 1;
      delete cartProduct.quantity;
      return cartProduct;
   }
}

function deleteCart(index, quantity = 1) {
   cart.splice(index, quantity);
}

function updateCount(index, count) {
   if(count < 1) return;
   cart[index].count = count;
   renderCart()
}

function renderCart() {
   let cartHtml = ``;
   let subTotal = 0;

   cart.forEach(item => subTotal+= item.count * item.price)

   for(let item of cart) {
      cartHtml += `<li>
      <div class="info"><img src="${item.img}" alt="img">
         <p>${item.name}</p>
      </div>
      <p class="p">${item.price} đ</p>
      <div class="quantity">
         <button class="remove">-</button>
         <input type="text" value="${item.count}">
         <button class="add">+</button>
      </div>
      <p class="total-price-product">${item.price * item.count} đ</p>
      <i class="fas fa-times delete-product"></i>
   </li>`
   }


   $('.cart-list').innerHTML = cartHtml;

   let deleteBtns = $$('.delete-product');
   let addCountBtns = $$('.add');
   let removeCountBtns = $$('.remove');

   for(let i = 0 ;i < deleteBtns.length;i++) {
      deleteBtns[i].addEventListener('click', () => {
         deleteCart(i);
         updateProductToCart();
         renderCart();
      })

      addCountBtns[i].addEventListener('click', () => updateCount(i,cart[i].count + 1))
      removeCountBtns[i].addEventListener('click',() => updateCount(i,cart[i].count - 1))
   }

   $('.total-price').innerHTML = subTotal

}

$('.clean-cart').addEventListener('click', () => {
   if (confirm("Bạn có muốn xóa tất cả sản phẩm không ?")) {
      deleteCart(0, cart.length);
      updateProductToCart()
      renderCart();
   }
})

renderCart()

//responsive
var nav = $('.nav')
var navlist = $('.fa-chevron-down')

navlist.onclick = function name(params) {
   let isclose = nav.clientHeight === 48;
   if (isclose) {
       nav.style.height = 'auto'
   }
   else {
       nav.style.height = null
   }
}

