let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

let products = JSON.parse(localStorage.getItem("products"));

sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active"))
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

render()


//Click thêm sản phẩm
const openAdd = document.querySelector('.content__btn--additem');
const modalAddItemClose = document.querySelector('.form-addItem__header--close');
const modalAddItem = document.querySelector('.modal-content__addItem');


function closeAddItem(params) {
  modalAddItem.classList.remove('open');
}
function openAddItem(params) {
  modalAddItem.classList.add('open');
}


function render() {
  $('.product-content').innerHTML = htmlProduct();
}

function htmlProduct() {
  let html = [];
  for (let product of products)
    html.push(` 
    <div class="content__item--bigitem">
    <div class="left">
      <img src="${product.img}" class="content__item--image">
    </div>
    <span>
      <h3>${product.name}</h3>
    </span>
    <span>
      <h3>$${product.price}</h3>
    </span>
    <div class="right">
      <a href="#" style="text-decoration: none" class="content__edititem">
        Chỉnh sửa sản phẩm
        <i class="fas fa-edit" style="margin-left: 5px;"></i>
      </a>
      <a href="#" style="text-decoration: none" class="content__deleteitem">
        Xóa sản phẩm
        <i class="fas fa-trash"></i>
      </a>
    </div>
  </div>`)

  return html.join("");
}


function deleteCart(index, quantity = 1) {
  products.splice(index, quantity);
}

function updateProductToCart() {
  let cartData = JSON.stringify(products);
  localStorage.setItem('products', cartData);
}

const deleteBtns = $$('.content__deleteitem')
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', () => {
    if(confirm('Bạn có chắc chắc muốn xóa không ?'))
      deleteCart(i)
      updateProductToCart();
      render();
  })
}