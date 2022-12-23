// function form(e) {
//     event.preventDefault();
//     var name = document.getElementById("#fullname").value;
//     var email = document.getElementById("#email").value;
//     var password = document.getElementById("#password").value;
//     var password_confirmation = document.getElementById("#password_confirmation").value;
//     var user = {
//         name: name,
//         email: email,
//         password: password,
//         password_confirmation: password_confirmation,
//     }
//     var json = JSON.stringify(user);
//     localStorage.setItem(email, json);
//     alert('đăng ký thành công');
// }


// function btnSegister(e) {
//     event.preventDefault();
//     var name = document.getElementById("#fullname").value;
//     var email = document.getElementById("#email").value;
//     var password = document.getElementById("#password").value;
//     var password_confirmation = document.getElementById("#password_confirmation").value;
//     var user = localStorage.getItem('');
//     var data = JSON.parse(user);
//     if (user == null) {
//         alert('vui lòng nhập email password');
//     } else if (name == data.name && email == data.email && password == data.password && password_confirmation == data.password_confirmation) {
//         alert('đăng nhập thành công')
//     } else {
//         alert('đăng nhập thất bại')
//     }
// }











//