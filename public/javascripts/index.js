"use strict";
document.addEventListener("DOMContentLoaded", function() {
    //Hiển thị thanh menu khi cuộn
    var menu = document.querySelector('.thanhmenu');
    window.addEventListener('scroll', function() {
        // console.log(window.pageYOffset);
        if (this.window.pageYOffset > 150) {
            menu.classList.add('hienthimenu');
        }
        else {
            menu.classList.remove('hienthimenu');
        }
    })

    


    var tabtieude = document.getElementsByClassName('tab_mota');
    var tabthongtin = document.getElementsByClassName('tabnoidung');
    function shownoidung(a){
        for (var i = 0; i < tabthongtin.length; i++) {
            tabthongtin[i].style.display = 'none';
        }
        var noidung = document.getElementById(a);
        noidung.style.display = 'block';
    }
    for (var i = 0; i < tabtieude.length; i++) {
        tabtieude[i].addEventListener("click", function(){
            var id = this.getAttribute('data-chitiet');
            for (var i = 0; i < tabtieude.length; i++) {
                tabtieude[i].classList.remove("hienthi_mota");
            }
            this.className += " hienthi_mota";
            shownoidung(id);
        });
    }
    shownoidung('mota');
}, false);
  //Hiển thị hộp tài khoản
  var tennguoidung = document.getElementsByClassName('tentaikhoan');
  var thongtinnd = document.getElementsByClassName('hoptaikhoanuser');
  tennguoidung[0].addEventListener('click', function(e) {
  thongtinnd[0].classList.toggle('hienthitkuser');
  e.preventDefault();
  });

  var sohopgh = document.getElementsByClassName('hopgh').length;
  console.log(sohopgh);
    if (sohopgh > 0) {
        console.log(sohopgh);
        document.getElementsByClassName('sltronggh')[0].innerHTML= sohopgh;
        document.getElementsByClassName('sl')[0].innerHTML = sohopgh;
    }
    else {
        console.log(sohopgh);
        document.getElementsByClassName('sltronggh')[0].innerHTML= 0;
        document.getElementsByClassName('sl')[0].innerHTML = 0;
    }

    var buttons = document.getElementsByClassName('tablinks');
    var contents = document.getElementsByClassName('tabcontent');
    function showContent(id){
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            var id = this.getAttribute('data-hienthi');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }
            this.className += " active";
            showContent(id);
        });
    }
    showContent('hienthio');
    


  var ngay = document.getElementById('ngay');
    for (var i = 1; i <= 31; i++) {
        ngay.innerHTML += '<option value="' + i + '">' + i + '</option>';
    }
    var thang = document.getElementById('thang');
    for (var i = 1; i <= 12; i++) {
        thang.innerHTML += '<option value="' + i + '"> Tháng ' + i + '</option>';
    }
    var nam = document.getElementById('nam');
    for (var i = 1970; i <= 2022; i++) {
        nam.innerHTML += '<option value="' + i + '">' + i + '</option>';
    }

    
    // Tạo menu
    var tenmenu = document.querySelectorAll('ul.tenmenu li a')
    for (var i = 0; i < tenmenu.length; i++) {
        tenmenu[i].addEventListener("click", function(e) {
            for (var j = 0; j < tenmenu.length; j++) {
                tenmenu[j].classList.remove('active');
            }
            this.classList.add('active');
            e.preventDefault();
        })
    }
    
    