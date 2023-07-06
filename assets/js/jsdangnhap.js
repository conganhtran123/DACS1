function dangky(e) {
  event.preventDefault();
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var password1 = document.getElementById('password1').value;
  var user = {
    email: email,
    password: password
  }
  if (email === '' || password === ''){
    alert('Vui lòng điền đầy đủ thông tin');
  }else if (password != password1){
    alert('2 mật khẩu bạn nhập không trùng nhau');
  }else {
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert('Đăng kí tài khoản thành công');
    window.location.assign('./dangnhap.html');
  }
  
}

function dangnhap(e){
    event.preventDefault();
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user = localStorage.getItem(email);
    
    if (user) {
      var data = JSON.parse(user);
      if (email == data.email && password == data.password) {
        alert("Đăng nhập thành công");
        window.location.assign('../index.html');
      } else {
        alert("Đăng nhập thất bại!");
      }
    } else {
      alert("Tài khoản không tồn tại!");
    }
  }

