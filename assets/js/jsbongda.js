document.getElementById("showcart").style.display = "none";
var giohang = new Array();

function themvaogiohang(x) {
    // // lấy src ở con thứ nhất:
    // // truy cập đến phần tử div chứa ngoài cùng ròi truy cập vào src
    var boxsp = x.parentElement.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    
    var span2 = x.parentElement.previousElementSibling.querySelector('span:nth-child(2)');
    var gia = span2.innerText;
    
    var tensp = boxsp[1].children[0].innerText;
    
    var soluong = parseInt(boxsp[2].children[0].value);

    var sp = new Array(hinh, gia, tensp, soluong);
    

    // kiểm tra sản phẩm coi thử có chưa
    var kt = 0;
    for(let i = 0 ; i < giohang.length ; i++) {
        if (giohang[i][2] == tensp) {
            kt = 1;
            soluong += parseInt(giohang[i][3]);
            giohang[i][3] = soluong;
            break;
        }
    }
    if(kt == 0) {
        giohang.push(sp);
    }

    showcountsp();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    
    

    // // lấy giá của sản phẩm
    // // truy cập đến phần tử cha thông qua parentElement, tiếp theo sẽ tới phần tử kế trước phần tử
    // // cha, xong là lấy phần tử span thứ 2 
    // const span2 = x.parentElement.previousElementSibling.querySelector('span:nth-child(2)');
    // const span2Text = span2.innerText;
    // console.log(span2Text);

    // lấy tên của sản phẩm
    // c1
    // var boxsp = x.parentElement.parentElement.children;
    // console.log(boxsp[1].children[0].innerText);
    // c2
    // var boxsp = x.parentElement.previousElementSibling.children;
    // console.log(boxsp[0].innerText);

}



function showcountsp() {

    document.getElementById("countsp").innerHTML = giohang.length;
}



function showcart() {
    var x = document.getElementById("showcart");
    if (x.style.display == "block") {
        x.style.display = "none";
    }else {
        x.style.display = "block";
        showmycart();
    }
}

function showmycart() {
    var ttgh = "";
    var tong = 0;
    for (var i = 0; i < giohang.length; i++) {
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]); 
        var ttt = tt + `,000đ`;
        tong += tt;
        ttgh += `<tr>
                    <td> ${i+1} </td>
                    <td><img src=" ${giohang[i][0]} " alt = "" </td>
                    <td> ${giohang[i][2]} </td>
                    <td> ${giohang[i][1]} </td>
                    <td> ${giohang[i][3]} </td>
                    <td> 
                        <div> ${ttt} </div>
                    </td>
                    <td> 
                        <button onclick="xoasp(this)">Xóa</button>
                    </td>
                </tr>`;
        
    }
    var tongt = tong + `,000đ`;
    ttgh += `<tr>
                <th colspan = "5"> Tổng đơn hàng </th>
                <th>
                    <div> ${tongt} </div>
                </th>
                <th></th>
            </tr>`;

    document.getElementById("mycart").innerHTML = ttgh;
}

function xoasp(x) {
    // xóa tr
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();
    // alert(tensp);
    // xóa mảng: đem giá trị trong tr so sánh rồi xóa trong mảng
    // xóa sản phẩm trong mảng
    for (var i = 0; i < giohang.length; i++) {
        if(giohang[i][2] == tensp) {
            giohang.splice(i, 1);
        }
    }
    // console.log(giohang);
    showmycart();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    showcountsp();
}
function xoatatca() {
    giohang = [];
    showmycart();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    showcountsp();
}


function showgiohang_trangthanhtoan() {
    try {
        var gh = sessionStorage.getItem("giohang");
    
        var giohang = JSON.parse(gh);
        var ttgh = "";
        var tong = 0;
        for (var i = 0; i < giohang.length; i++) {
            var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]); 
            var ttt = tt + `,000đ`;
            tong += tt;
            ttgh += `<tr>
                        <td> ${i+1} </td>
                        <td><img src=" ${giohang[i][0]} " alt = "" </td>
                        <td> ${giohang[i][2]} </td>
                        <td> ${giohang[i][1]} </td>
                        <td> ${giohang[i][3]} </td>
                        <td> 
                            <div> ${ttt} </div>
                        </td>
                        
                        
                    </tr>`;
            
        }
        var tongt = tong + `,000đ`;
        ttgh += `<tr>
                    <th colspan = "5"> Tổng đơn hàng </th>
                    <th>
                        
                        <div> ${tongt} </div>
                    </th>
                </tr>`;

        document.getElementById("mycart").innerHTML = ttgh;
        
    } catch (error) {
        ttgh += `<tr>
                <th colspan = "5"> Tổng đơn hàng </th>
                <th>
                    
                    <div> 0,000đ </div>
                </th>
            </tr>`;

        document.getElementById("mycart").innerHTML = ttgh;
        
    }
   
}

function kt() {
    try {
        var gh = sessionStorage.getItem("giohang");
    
        var giohang = JSON.parse(gh);
        var ttgh = "";
        var tong = 0;
        var kt = false;
        
        
        
        for (var i = 0; i < giohang.length; i++) {
            var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]); 
            var ttt = tt + `,000đ`;
            tong += tt;
            ttgh += `<tr>
                        <td> ${i+1} </td>
                        <td><img src=" ${giohang[i][0]} " alt = "" </td>
                        <td> ${giohang[i][2]} </td>
                        <td> ${giohang[i][1]} </td>
                        <td> ${giohang[i][3]} </td>
                        <td> 
                            <div> ${ttt} </div>
                        </td>
                    </tr>`;
            
        }
        var tongt = tong + `,000đ`;
        ttgh += `<tr>
                    <th colspan = "5"> Tổng đơn hàng </th>
                    <th>
                        
                        <div> ${tongt} </div>
                    </th>
                </tr>`;

        document.getElementById("mycart").innerHTML = ttgh;
        return true;
    } catch (error) {
        ttgh += `<tr>
                <th colspan = "5"> Tổng đơn hàng </th>
                <th>
                    
                    <div> 0,000đ </div>
                </th>
            </tr>`;

        document.getElementById("mycart").innerHTML = ttgh;
        return kt;
    }
}

// var a = sessionStorage.getItem("giohang");
// var b = JSON.parse(a);
// console.log(b);





function dongydathang() {
    

  
    

    var hoten = document.getElementById("full-name").value;
    var diachi = document.getElementById("address").value;
    var dienthoai = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    if ( hoten == '' || diachi == '' || dienthoai == '' || email == '') {
        alert("Vui lòng nhập đầy đủ thông tin");
    }else {
        var selectElement = document.getElementById("hinhthuc");
        var selectedOptionValue = selectElement.value;
        console.log(selectedOptionValue);
        
        var nguoinhan = new Array(hoten, diachi, dienthoai, email, selectedOptionValue);
        console.log(nguoinhan);
        sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));
        window.location.assign('thanhtoan.html');
    }

    
    // var overlay = document.getElementById("overlay");
    // overlay.style.display = 'none';
}

function showthongtinnguoinhan() {
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);

    var tt = `<label for="full-name">Họ tên:</label>
              ${thongtin[0]}

              <label for="address">Địa chỉ:</label>
              ${thongtin[1]}

              <label for="phone">Điện thoại:</label>
              ${thongtin[2]}

              <label for="email">Email:</label>
              ${thongtin[3]}
              
              <label for="hinhthuc">Phương thức thanh toán:</label> 
              ${thongtin[4]}`

    document.getElementById("thongtinnhanhang").innerHTML = tt;
}   


function thongbao() {
    alert("Cảm ơn bạn đã tin tưởng đặt hàng trên web")
    
    var gh = sessionStorage.getItem("giohang");
    
    var giohang = JSON.parse(gh);

    sessionStorage.removeItem("giohang");
    
    trangchu();

}   
function trangchu() {
    window.location.assign('../index.html');
}
function quaylaisanpham() {
    window.location.assign('bongda.html');
}