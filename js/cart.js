const btnA = document.querySelectorAll('#content-cart');

btnA.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        var btnIteam = event.target;
        var product = btnIteam.parentElement.closest('.content-shop');
        var productImg = product.querySelector('img').src;
        var productName = product.querySelector('.content-shop__name').innerText;
        var productPrice = product.querySelector('.content-shop__span').innerText;
        addCart(productImg, productName, productPrice)
    })
})


// div
function addCart(productImg, productName, productPrice) {
    var addNavcart = document.createElement('tr');
    var cartIteam = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartIteam.length; i++) {
        var productS = document.querySelectorAll('.cart-span')
        if (productS[i].innerHTML == productName) {
            alert('Sản phẩm này đã có trong giỏ hàng')
            return
        }
    }
    var navCart = `<tr><td class="cart-td"><img class="cart-img" src="${productImg}" alt=""><span class="cart-span">${productName}</span></td><td><span class="cart-spans">${productPrice}</span></td><td><input class="cart-input" style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td><span class="cart-remove">Xóa</span></td></tr>`;
    addNavcart.innerHTML = navCart;
    var cartUl = document.querySelector('tbody');
    cartUl.append(addNavcart);
    carttotal();
    deleteCart()
}



// duyệt qua tình sản phẩm tính tổng
function carttotal() {
    var cartIteam = document.querySelectorAll('tbody tr');
    var totalC = 0;
    for (var i = 0; i < cartIteam.length; i++) {
        var inputValue = cartIteam[i].querySelector('.cart-input').value;
        var productPrice = cartIteam[i].querySelector('.cart-spans').innerHTML;
        var newsProductPrice = productPrice.split('$').join('');
        var totalA = inputValue * newsProductPrice;
        totalC += totalA;
    }
    var cartTotalA = document.querySelector('.js-nav--cart__total span');
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
    cartInput()
}


// remove-cart
function deleteCart() {
    var cartIteam = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartIteam.length; i++) {
        var productS = document.querySelectorAll('.cart-remove');
        productS[i].addEventListener('click', function(event) {
            var cartDelete = event.target;
            var cartCarts = cartDelete.parentElement.parentElement;
            cartCarts.remove();
            carttotal();
        })
    }
}


// số lượng input
function cartInput() {
    var cartIteam = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartIteam.length; i++) {
        var inputValue = cartIteam[i].querySelector('.cart-input');
        inputValue.addEventListener("change", function() {
            carttotal();
        })
    }
}