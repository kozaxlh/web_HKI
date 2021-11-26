const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let loginUser = JSON.parse(localStorage.getItem('loginUser'));
let pageProduct = JSON.parse(localStorage.getItem('pageProduct'))
let cart = JSON.parse(localStorage.getItem('cart'))

if (!localStorage.getItem('cart'))
   cart = [];

function render() {
   $('.content-container').innerHTML = `
   <img src="${pageProduct.img}" alt="img">
   <div class="info-container">
       <div class="info-container-header">
           <h3>${pageProduct.name}</h3>
           <p>Thương hiệu doncle & banana</p>
       </div>
       <p class="discount"><i class="fas fa-tag"></i> Giảm giá 0.1%</p>
       <h3 class="price">${pageProduct.price} đ</h3>             
       <div class="info-container-footer">
           <div class="pro-pic">
               <p>Hình ảnh sản phẩm: 1</p>
               <img src="${pageProduct.img}" alt="">
           </div>
           <button>Chọn Mua</button>
       </div>
   </div>`

   if (loginUser) {
      $('.nav .login-register').innerHTML = `<div class="user-login">
          <p>Xin chào ${loginUser.email}</p>
          <a href="" id="logout" onclick="logout()">Đăng xuất</a>
       </div>`
   }
}

render()

$('.info-container-footer button').addEventListener('click', () => {
   if (loginUser) {
      cart.push(createCartProduct(pageProduct));
      updateProductToCart();
      window.location = "./index.html"
   }
   else {
      alert('Bạn phải đăng nhập để có thể mua hàng!!');
      window.location = "./index.html"
   }
})

function createCartProduct(product) {
   let cartProduct = product;
   cartProduct.count = 1;
   delete cartProduct.quantity;
   return cartProduct;
}

function updateProductToCart() {
   let cartData = JSON.stringify(cart);
   localStorage.setItem('cart', cartData);
}