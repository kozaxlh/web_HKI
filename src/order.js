const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let loginUser = JSON.parse(localStorage.getItem('loginUser'));
let cart = JSON.parse(localStorage.getItem('cart'));
let order = JSON.parse(localStorage.getItem('order'));

if (!localStorage.getItem('order'))
   order = [];

function logout() {
   loginUser = null;
   localStorage.setItem('loginUser', JSON.stringify(loginUser))
   renderCart();
}

let Total = 0;
function renderCart() {
   let cartHtml = ``;
   cart.forEach(item => Total += item.count * item.price)

   for (let item of cart) {
      cartHtml += `<li>
      <div class="info">
         <img src="${item.img}" alt="img" />
         <p>${item.name}</p>
      </div>
      <div class="quantity">
         <p>số lượng :${item.count}</p>
      </div>
      <p class="total-price-product">${item.price * item.count} đ</p>
   </li>`
   }

   if (loginUser) {
      $('.nav .login-register').innerHTML = `<div class="user-login">
          <p>Xin chào ${loginUser.email}</p>
          <a href="" id="logout" onclick="logout()">Đăng xuất</a>
       </div>`
   }

   $('.content-container-header ul').innerHTML = cartHtml;
   $('.total-price').innerHTML = `Thành tiền: ${Total} đ`;
}

renderCart();

Validator({
   form: '.form-order',
   formGroupSelector: '.form-group',
   errorSelector: '.message-error',
   rules: [
      Validator.isRequired(
         'input[name="order-type"]',
         "Vui lòng chọn hình thức giao hàng"
      ),
      Validator.isRequired(
         'input[name="address"]',
         "Vui lòng nhập địa chỉ"
      ),
      Validator.isRequired(
         'input[name="name"]',
         "Vui lòng nhập tên"
      ),
      Validator.isRequired(
         'input[name="phone"]',
         "Vui lòng nhập số điện thoại"
      ),
      Validator.isCorrectPhone('input[name="phone"]'),
   ],
   onSubmit: function (data) {
      order.push({
         name: data.name,
         diachi: data.address,
         phone: data.phone,
         products: [...cart],
         totalPrice: Total,
         isDelivered: false,
      })
      cart = [];
      localStorage.setItem('order', JSON.stringify(order));
      localStorage.setItem('cart', JSON.stringify(cart));
      window.location = "./index.html";
   }
});