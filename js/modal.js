// var header = document.getElementById('header');
// var mobileMenu = document.getElementById('mobile-menu');
// var headerHeight = header.clientHeight;
// // đóng mở mobile menu
// mobileMenu.onclick = function() {
//     var isClosed = header.clientHeight === headerHeight;
//     if (isClosed) {
//         header.style.height = 'auto';
//     } else {
//         header.style.height = null;
//     }
// }

// // tự động đóng khi chọn mobile menu
// var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
// for (var i = 0; i < menuItems.length; i++) {
//     var menuItem = menuItems[i]

//     menuItem.onclick = function(event) {
//         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
//         if (isParentMenu) {
//             event.preventDefault();
//         } else {
//             header.style.height = null;
//         }
//     }
// }


// form đăng ký

const buyBtn = document.querySelector('.js-buy-registration');
const modalRegistration = document.querySelector('.js-modal__registration');
const modalBody = document.querySelector('.js-modal__body');
const modalClose = document.querySelector('.js-modal-close')

// hiện thị modal
function showForm() {
    modalRegistration.classList.add('open')
}

// ẩn modal
function hideForm() {
    modalRegistration.classList.remove('open')
}

// lặp qua button và lắng nghe click
buyBtn.addEventListener('click', showForm)

// nghe hành vi vào nút button close
modalClose.addEventListener('click', hideForm);

modalRegistration.addEventListener('click', hideForm);

modalBody.addEventListener('click', function(event) {
    event.stopPropagation();
})











// form đăng nhập
const buyBtnslogin = document.querySelectorAll('.js-buy-login');
const modalLogin = document.querySelector('.js-modal__login');
const modalBodylogin = document.querySelector('.js-modal__bodylogin');
const modalCloselogin = document.querySelector('.js-modal-closelogin')

// hiện thị modal
function showFormlogin() {
    modalLogin.classList.add('open')
}

// ẩn modal
function hideFormlogin() {
    modalLogin.classList.remove('open')
}

// lặp qua button và lắng nghe click
for (const buyBtn of buyBtnslogin) {
    buyBtn.addEventListener('click', showFormlogin)
}

// nghe hành vi vào nút button close
modalCloselogin.addEventListener('click', hideFormlogin);

modalLogin.addEventListener('click', hideFormlogin);

modalBodylogin.addEventListener('click', function(event) {
    event.stopPropagation();
})






// cart

const carts = document.querySelectorAll('.js-list__cart');
const modalCart = document.querySelector('.js-modal__cart');
const modalBodycart = document.querySelector('.js-modal__bodycart');
const modalClosecart = document.querySelector('.js-modal-closecart');

// hiện thị cart
function showCart() {
    modalCart.classList.add('open');
}

// ẩn cart
function hideCart() {
    modalCart.classList.remove('open');
}

// lặp qua cart và lắng nghe click
for (const cart of carts) {
    cart.addEventListener('click', showCart);
}


// nghe hành vi vào nút button close
modalClosecart.addEventListener('click', hideCart);

modalCart.addEventListener('click', hideCart);

modalBodycart.addEventListener('click', function(event) {
    event.stopPropagation();
})