var express = require('express');
const db = require('../models/database');
const modelProduct = require('../models/model_product');
const modelCart = require('../models/model_cart');
const { response } = require('express');
var router = express.Router();

router.get('/gio-hang', async function(req, res, next) {
  if (req.session.nguoidung.TenKH != "") {
    const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
    const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    const capnhattheoTrangThai = await modelCart.capNhatDonHangTheoTrangThai(ttdonhang.TongTien, req.session.nguoidung.MaKH);
    const sotiengiam = [];
    const thongbao = "";
    res.render('gio-hang', { title: 'Giỏ hàng', nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang, giamgia: sotiengiam, thongbao: thongbao});
  }
  else {
    res.redirect("/users/dang-nhap");
  }
});

router.post('/gio-hang/dien-thoai', async function(req, res, next) {
  if (req.session.nguoidung.TenKH != "") {
    var masp = req.body.masp;
    var tensp = req.body.tensp;
    var soluong = req.body.soluong;
    var sql = `SELECT * FROM donhang WHERE TrangThai='Tạo giỏ hàng'`;
    db.query(sql, async function (err, row) {
      if (row.length <= 0) {
        var data = {
          MaKH: req.session.nguoidung.MaKH,
          TenKH: req.session.nguoidung.TenKH,
          Email: req.session.nguoidung.Email,
          DienThoai: req.session.nguoidung.DienThoai,
          DiaChi: req.session.nguoidung.DiaChi,
          TrangThai: "Tạo giỏ hàng"
        }
        var ttdonhang = await modelCart.taoDonHang(data);
        var ttDonHang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
        var ttsanpham = await modelCart.laySanPham(masp);
        console.log(ttsanpham);
        var data1 = {
           MaDH: ttDonHang.MaDH,
           MaSP: ttsanpham.MaSP,
           TenSP: ttsanpham.TenSP,
           HinhAnh: ttsanpham.HinhAnh,
           DonGia: ttsanpham.GiaTien,
           SoLuong: soluong
        }
        var taogiohang = await modelCart.taoGioHang(data1);
      }
      else {
        var sql = `SELECT * FROM donhang INNER JOIN giohang on donhang.MaDH = giohang.MaDH WHERE MaSP = '${masp}' AND TenSP = '${tensp}' AND TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, async function(err, row) {
          if (row.length <= 0)
          {
            var ttdonhang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
            var ttsanpham = await modelCart.laySanPham(masp);
            var data1 = {
               MaDH: ttdonhang.MaDH,
               MaSP: ttsanpham.MaSP,
               TenSP: ttsanpham.TenSP,
               HinhAnh: ttsanpham.HinhAnh,
               DonGia: ttsanpham.GiaTien,
               SoLuong: soluong
            }
            var taogiohang = await modelCart.taoGioHang(data1);
          }
          else {
            var ttDonHang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
            var sl = await modelCart.laySoLuong(masp);
            var slcapnhat = parseInt(sl.SoLuong) + parseInt(soluong);
            var capnhat = await modelCart.capnhatGioHang(slcapnhat, masp, ttDonHang.MaDH);
          }
        })
      }
    });
    res.redirect(`/products/dien-thoai/${tensp}/id=${masp}`);
  }
  else {
    res.redirect("/users/dang-nhap");
  }
});

router.post('/gio-hang/phu-kien', async function(req, res, next) {
  if (req.session.nguoidung.TenKH != "") {
    var masp = req.body.masp;
    var tensp = req.body.tensp;
    var soluong = req.body.soluong;
    var sql = `SELECT * FROM donhang WHERE TrangThai='Tạo giỏ hàng'`;
    db.query(sql, async function (err, row) {
      if (row.length <= 0) {
        var data = {
          MaKH: req.session.nguoidung.MaKH,
          TenKH: req.session.nguoidung.TenKH,
          Email: req.session.nguoidung.Email,
          DienThoai: req.session.nguoidung.DienThoai,
          DiaChi: req.session.nguoidung.DiaChi,
          TrangThai: "Tạo giỏ hàng"
        }
        var ttdonhang = await modelCart.taoDonHang(data);
        var ttDonHang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
        var ttphukien = await modelCart.layPhuKien(masp);
        var data1 = {
           MaDH: ttDonHang.MaDH,
           MaSP: ttphukien.MaPK,
           TenSP: ttphukien.TenPK,
           HinhAnh: ttphukien.HinhAnh,
           DonGia: ttphukien.GiaTien,
           SoLuong: soluong
        }
        var taogiohang = await modelCart.taoGioHang(data1);
      }
      else {
        var sql = `SELECT * FROM donhang INNER JOIN giohang on donhang.MaDH = giohang.MaDH WHERE MaSP = '${masp}' AND TenSP = '${tensp}' AND TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, async function(err, row) {
          if (row.length <= 0)
          {
            var ttdonhang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
            var ttphukien = await modelCart.layPhuKien(masp);
            console.log("Thông tin phụ kiện: " + ttphukien.MaPK);
            var data2 = {
              MaDH: ttdonhang.MaDH,
              MaSP: ttphukien.MaPK,
              TenSP: ttphukien.TenPK,
              HinhAnh: ttphukien.HinhAnh,
              DonGia: ttphukien.GiaTien,
              SoLuong: soluong
            }
            var taogiohang = await modelCart.taoGioHang(data2);
          }
          else {
            var ttDonHang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
            var sl = await modelCart.laySoLuong(masp);
            var slcapnhat = parseInt(sl.SoLuong) + parseInt(soluong);
            var capnhat = await modelCart.capnhatGioHang(slcapnhat, masp, ttDonHang.MaDH);
          }
        })
      }
    });
    res.redirect(`/products/phu-kien/${tensp}/id=${masp}`);
  }
  else {
    res.redirect("/users/dang-nhap");
  }
});

router.post('/gio-hang/op-dien-thoai', async function(req, res, next) {
  if (req.session.nguoidung.TenKH != "") {
    var masp = req.body.masp;
    var tensp = req.body.tensp;
    var soluong = req.body.soluong;
    var sql = `SELECT * FROM donhang WHERE TrangThai='Tạo giỏ hàng'`;
    db.query(sql, async function (err, row) {
      if (row.length <= 0) {
        var data = {
          MaKH: req.session.nguoidung.MaKH,
          TenKH: req.session.nguoidung.TenKH,
          Email: req.session.nguoidung.Email,
          DienThoai: req.session.nguoidung.DienThoai,
          DiaChi: req.session.nguoidung.DiaChi,
          TrangThai: "Tạo giỏ hàng"
        }
        var ttdonhang = await modelCart.taoDonHang(data);
        var ttDonHang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
        var ttop = await modelCart.layOp(masp);
        var data1 = {
           MaDH: ttDonHang.MaDH,
           MaSP: ttop.MaOp,
           TenSP: ttop.TenOp,
           HinhAnh: ttop.HinhAnh,
           DonGia: ttop.GiaTien,
           SoLuong: soluong
        }
        console.log(data1);
        var taogiohang = await modelCart.taoGioHang(data1);
      }
      else {
        var sql = `SELECT * FROM donhang INNER JOIN giohang on donhang.MaDH = giohang.MaDH WHERE MaSP = '${masp}' AND TenSP = '${tensp}' AND TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, async function(err, row) {
          if (row.length <= 0)
          {
            var ttdonhang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
            var ttop = await modelCart.layOp(masp);
            var data1 = {
               MaDH: ttdonhang.MaDH,
               MaSP: ttop.MaOp,
               TenSP: ttop.TenOp,
               HinhAnh: ttop.HinhAnh,
               DonGia: ttop.GiaTien,
               SoLuong: soluong
            }
            var taogiohang = await modelCart.taoGioHang(data1);
          }
          else {
            var ttDonHang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
            var sl = await modelCart.laySoLuong(masp);
            var slcapnhat = parseInt(sl.SoLuong) + parseInt(soluong);
            var capnhat = await modelCart.capnhatGioHang(slcapnhat, masp, ttDonHang.MaDH);
          }
        })
      }
    });
    res.redirect(`/products/op-dien-thoai/${tensp}/id=${masp}`);
  }
  else {
    res.redirect("/users/dang-nhap");
  }
});

router.post('/gio-hang/cap-nhat', async function(req, res, next) {
  var sl = req.body.soluong;
  var masp = req.body.masp;
  var madh = req.body.madh;
  console.log("Mã sản phẩm: " + masp);
  console.log("Mã đơn hàng: " + madh[0]);
  console.log("Số lượng: " + sl);
  var dsDonGia = await modelCart.layDonGia(madh[0]);
  console.log(dsDonGia);
  var tong = 0;
  for (var i = 0; i < masp.length; i++)
  {
    var capnhat = await modelCart.capnhatGioHang(sl[i], masp[i], madh[i]);
    // console.log(sl[i] + " - " + masp[i] + " - " + madh[i]);
    tong += sl[i]*parseFloat(dsDonGia[i].DonGia); 
  }
  var tongtien = await modelCart.capNhatDonHang(tong, tong, madh[0]);
  res.redirect('/cart/gio-hang');
});

router.get('/xoa/masp=:masp', async function(req, res, next) {
  var masp = req.params.masp;
  var xoa = await modelCart.xoaSP(masp);
  // const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  res.redirect('/cart/gio-hang');
});

router.post('/ma-giam-gia', async function(req, res, next) {
  var magiamgia = req.body.magiamgia;
  var dsma = await modelCart.dsmagiamgia();
  for (var i of dsma) {
    if (i.MaPhieu == magiamgia) {
      thongbao = "";
       var sotiengiam = await modelCart.magiamgia(magiamgia);
       var madonhang = await modelCart.layDonHang(req.session.nguoidung.MaKH);
       var tong = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
       var tongtien = parseInt(tong.TongTien) - parseInt(sotiengiam.GiamTien);
       var capnhatgiatien = await modelCart.update_GiamGia(tongtien, magiamgia, sotiengiam.GiamTien, madonhang.MaDH);
    }
    else {
      thongbao = "Mã giảm giá không tồn tại";
      var sotiengiam = [];
    }
  }
  const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  const capnhattheoTrangThai = await modelCart.capNhatDonHangTheoTrangThai(ttdonhang.TongTien, req.session.nguoidung.MaKH);
  res.render('gio-hang', { title: 'Giỏ hàng', nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang, giamgia: sotiengiam, thongbao: thongbao});
});

router.get('/don-hang', async function(req, res, next) {
  const laydh = await modelCart.theoDoiDH(req.session.nguoidung.MaKH);
  const laygh = await modelCart.theoDoiDH_giohang();
  const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  res.render('don-hang', { title: 'Đơn hàng', nguoidung: req.session.nguoidung, data1: laydh, data2: laygh, ds: ds, ttdonhang: ttdonhang});
});

router.get('/chi-tiet-don-hang/:madh', async function(req, res, next) {
    var madh = req.params.madh;
    const ttchitietdh = await modelCart.chitietdonhang(req.session.nguoidung.MaKH, madh);
    const laygh = await modelCart.theoDoiDH_giohang();
    const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
    const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    res.render('chi-tiet-don-hang', { title: 'Chi tiết đơn hàng', nguoidung: req.session.nguoidung, chitietdh: ttchitietdh, chitietsp: laygh, ds: ds, ttdonhang: ttdonhang});
});

router.get('/chi-tiet-don-hang/nhan-hang-thanh-cong/ID=:madh', async function(req, res, next) {
  var madh = req.params.madh;
  const TrangThai = "Nhận hàng thành công";
  var trangthai = await modelCart.update_TrangThai(TrangThai, madh);
  res.redirect("/cart/don-hang");
});

module.exports = router;