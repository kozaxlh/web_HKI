let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

let products = JSON.parse(localStorage.getItem("products"));

function closeAddItem(params) {
  modalAddItem.classList.remove('open');
}
function openAddItem(params) {
  modalAddItem.classList.add('open');
}
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


function render() {
  $('.product-content').innerHTML = htmlProduct();
  const deleteBtns = $$('.content__deleteitem')
  const editBtns = $$('.content__edititem')
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      if (confirm('Bạn có chắc chắc muốn xóa không ?'))
        deleteCart(i)
      updateProductToCart();
      render();
    })
  
    editBtns[i].addEventListener('click', () => {
      $('input[name="title"]').value = products[i].name;
      $('input[name="count"]').value = products[i].quantity;
      $('select[name="type"]').value = products[i].type;
      $('input[name="price"]').value = products[i].price;
      $('input[name="image"]').value = products[i].img;
      $('input[name="index"]').value = i;
      openAddItem()
      render()
    })
  }
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

function nonAccentVietnamese(str) {
  str = str.toLowerCase();
  //     We can also use this instead of from line 11 to line 17
  //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
  //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
  //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
  //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
  //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
  //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
  //     str = str.replace(/\u0111/g, "d");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

function deleteInput() {
  for (let input of $$('input'))
    input.value = ''
  $('.myIndex').value = -1;
}


Validator({
  form: '.modal-content__addItem',
  formGroupSelector: '.submit-field',
  errorSelector: '.message-error',
  rules: [
    Validator.isRequired('input[name="title"]', 'Vui lòng nhập tên sản phẩm'),
    Validator.isRequired('input[name="count"]', 'Vui lòng nhập số lượng'),
    Validator.isRequired('select[name="type"]', 'Vui lòng nhập thể loại'),
    Validator.isRequired('input[name="price"]', 'Vui lòng nhập giá sản phẩm'),
  ],
  onSubmit: function (data) {
    addProduct(data, data.index)
    deleteInput()
    closeAddItem()
    render()
  }
});

function addProduct(data, index) {
  let myProduct = {
    name: data.title,
    img: data.image || './img/no_image.jpg',
    type: nonAccentVietnamese(data.type).toLowerCase(),
    price: parseInt(data.price),
    quantity: parseInt(data.count)
  }
  if (index === -1)
    products.push(myProduct)
  else 
    products.splice(index,1,myProduct)
  updateProductToCart()
}

