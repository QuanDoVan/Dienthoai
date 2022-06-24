var express = require("express");
var router = express.Router();
var bcrypt = require('bcryptjs');
const db = require("../models/database");
const { redirect } = require("express/lib/response");
const modeluser = require("../models/model_user");
const modelCart = require("../models/model_cart");
var nodemailer = require('nodemailer');

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/tai-khoan", async function (req, res, next) {
  const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  if (req.session.nguoidung.TenKH !="")
  {
    res.render('trang-tai-khoan', {title: "Thông tin cá nhân", nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang})
  }
  else 
  {
    req.session.back = "/users/tai-khoan";
    res.redirect("/users/dang-nhap");
  }
});

router.get("/dang-ky", function (req, res, next) {
  res.render("dang-ky", { title: "Đăng ký tài khoản" });
});

router.post("/dang-ky", function (req, res, next) {
  var hoten = req.body.hoten;
  var email = req.body.email;
  // var tentaikhoan = req.body.tentaikhoan;
  var matkhau = req.body.matkhau;
  var nhaplaimk = req.body.nhaplaimk;
  // var sodt = req.body.sodt;
  // var diachi = req.body.diachi;
  // var gioitinh = req.body.gioitinh;
  // var ngaysinh = req.body.ngaysinh;
  console.log("==========Họ tên: " + hoten);
  if (matkhau === nhaplaimk) {
    var sql = "INSERT INTO khachhang SET ?";
    var values = {
      TenKH: hoten,
      TenTaiKhoan: hoten,
      Email: email,
      // DienThoai: sodt,
      MatKhau: matkhau,
      // DiaChi: diachi,
      // GioiTinh: gioitinh,
      // NgaySinh: ngaysinh,
    };
    db.query(sql, values, function (err) {
      if (err) throw err;
      console.log("Thành công");
    });
    res.render("dang-nhap", {title: "Đăng nhập"});
  } else {
    res.render('dang-ky', { title: 'Đăng ký tài khoản' });
  }
});

router.get("/dang-nhap", function (req, res, next) {
  res.render("dang-nhap", { title: "Đăng nhập" });
});

router.post("/dang-nhap", function (req, res, next) {
    let tendn = req.body.taikhoan;
    let matkhau = req.body.matkhau;
    let sql = `SELECT * FROM khachhang WHERE TenTaiKhoan = '${tendn}' OR Email = '${tendn}'`;
    db.query(sql, (err, rows) => {
      if (rows.length <= 0) {
        res.redirect("/users/dang-nhap");
        return;
      }
      let user = rows[0];
      let password = user.MatKhau;
      // var kq = bcrypt.compareSync(matkhau, matkhau);
      if (matkhau === password) {
        req.session.nguoidung = {
          MaKH: user.MaKH,
          TenKH: user.TenKH,
          TenTaiKhoan: user.TenTaiKhoan,
          Email: user.Email,
          DienThoai: user.DienThoai,
          DiaChi: user.DiaChi,
          GioiTinh: user.GioiTinh,
          NgaySinh: user.NgaySinh,
          ThangSinh: user.ThangSinh,
          NamSinh: user.NamSinh,
          logIn: true
        };
        if (req.session.back) {
          res.redirect(req.session.back);
        }
        else {
          res.redirect("/trang-chu");
        }
      }
      else 
      {
        res.redirect("/users/dang-nhap");
      }
    });
});

router.get("/thong-tin", async function (req, res, next) {
  const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  res.render("thong-tin", { title: "Thông tin tài khoản", nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang});
});

router.post("/thong-tin", function (req, res, next) {
  var hoten = req.body.ten;
  // var tentkhoan = req.body.tentk;
  var email = req.body.email;
  var sdt = req.body.sdt;
  var gioitinh = req.body.gt;
  var ngay = req.body.ngaysinh;
  var thang = req.body.thangsinh;
  var nam = req.body.namsinh;
  var diachi = req.body.dc;
  var id = req.session.nguoidung.MaKH;
  var sql = 'SELECT * FROM khachhang WHERE MaKH = ?';
  db.query(sql, [id], function(err, rows) {
    if (rows.length <= 0) {
      redirect("/users/error");
      return;
    }
    var thongtin = {TenKH: hoten, TenTaiKhoan: tentkhoan, Email: email, DienThoai: sdt, DiaChi: diachi, GioiTinh: gioitinh, NgaySinh: ngay, ThangSinh: thang, NamSinh: nam};
    var sql1 = `UPDATE khachhang SET ? WHERE MaKH = '${id}'`;
    db.query(sql1, thongtin, function(err, result) {
      var tentb = "Thay đổi thông tin tài khoản thành công";
      var mota = "Hãy truy cập trang tài khoản của bạn để xem thông tin";
      var nut = "Xem thông tin cá nhân";
      var link = "/users/thong-tin"
      res.render('thanh-cong', {ten: tentb, mota: mota, nut: nut, link: link, title: "Thành công"});
    });
  })
});

router.get("/thay-doi-mat-khau", async function (req, res, next) {
  const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  res.render("mat-khau", { title: "Thay đổi mật khẩu", nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang});
});

router.post("/thay-doi-mat-khau", function (req, res, next) {
  var matkhucu = req.body.matkhaucu;
  var matkhaumoi = req.body.matkhaumoi;
  var xacnhanmk = req.body.xacnhanmk;
  var id = req.session.nguoidung.MaKH;
  var sql = 'SELECT * FROM khachhang WHERE MaKH = ?';
  db.query(sql, [id], function(err, rows) {
    if (rows.length <= 0) {
      res.redirect("/users/error");
      return;
    }
    var user = rows[0];
    if (matkhaumoi === xacnhanmk)
    {
      var sqlupdate = `UPDATE khachhang SET MatKhau = '${matkhaumoi}' WHERE MaKH = '${id}'`;
      db.query(sqlupdate, function(err, result) {
        var tentb = "Thay đổi mật khẩu thành công";
        var mota = "Hãy truy cập trang tài khoản của bạn để xem thông tin";
        var nut = "Xem mật khẩu";
        var link= "/users/thay-doi-mat-khau";
        res.render('thanh-cong', {nguoidung: req.session.nguoidung, ten: tentb, mota: mota, nut: nut, link: link, title: "Thành công"});
      })
    }
  })
});

router.get("/dang-xuat", function (req, res, next) {
  req.session.destroy();
  res.redirect("/users/dang-nhap");
});

router.get("/quen-mat-khau", function (req, res, next) {
  res.render('quen-mat-khau', {title: "Quên mật khẩu", thongbao: ""});
});

router.post("/quen-mat-khau", async (req, res, next) => {
  var email = req.body.email;
  var mkmoi = req.body.mkmoi;
  var nhapmkmoi = req.body.nhapmkmoi;
  var checkEmail = await modeluser.kiemtraEmail(email);

  if (email == "") {
    var tb = "Vui lòng bạn nhập email!";
    res.render('quen-mat-khau', {thongbao: tb});
  }
  if (checkEmail) {
      var sql = `UPDATE khachhang SET MatKhau = '${mkmoi}' WHERE Email = '${email}'`;
      db.query(sql, function (err, result) {
        console.log("Khôi phục mật khẩu thành công");
      })
  }
  else {
    var tb = "Email không tồn tại";
    res.render('quen-mat-khau', {thongbao: tb, title: "Quên mật khẩu"});
  }
});

module.exports = router;