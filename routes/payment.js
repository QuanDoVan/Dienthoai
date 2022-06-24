var express = require('express');
const db = require('../models/database');
const modelCart = require('../models/model_cart');
const modelPayment = require('../models/model_payment');
var router = express.Router();

router.get('/thanh-toan', async function(req, res, next) {
  const laygiohang = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  if (laygiohang.length <= 0) {
    var dsgiohang = [];
    var thongbao = "Không có sản phẩm nào được mua";
  }
  else {
    var dsgiohang = laygiohang;
    var thongbao = "";
  }
  res.render('thanh-toan', { title: 'Thanh toán', nguoidung: req.session.nguoidung, data: dsgiohang, ds: laygiohang, ttdonhang: ttdonhang, thongbao: thongbao});
});

router.get('/thong-bao-thanh-toan', async function(req, res, next) {
  if (req.session.nguoidung.TenKH != "") {
    ds = [];
    ttdonhang = 0;
  }
  res.render('thong-bao-thanh-toan', { title: 'Thanh toán', nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang});
});

function thoigian () {
  var d = new Date();
  var ngay = d.getDate();
  var thang = d.getMonth() + 1;
  var nam = d.getFullYear();
  var gio = d.getHours();
  var phut = d.getMinutes();
  var giay = d.getSeconds();
  return ngay + "/" + thang + "/" + nam + " " + gio + ":" + phut + ":" + giay;
}

router.post('/thanh-toan', async function(req, res, next) {
  const laygiohang = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  if (laygiohang.length >= 1) {
    var makh = req.session.nguoidung.MaKH;
    var email = req.body.email;
    var tenKH = req.body.tenKH;
    var dienThoai = req.body.dienThoai;
    var diaChi = req.body.diaChi;
    var thanhPho = req.body.thanhPho;
    var quanHuyen = req.body.quanHuyen;
    var ghiChu = req.body.ghiChu;
    var trangThai = "Chờ xác nhận";
    var ThoiGianDH = thoigian();
    var HinhThucTT = req.body.radio;
    var thanhtoan = {
      Email: email,
      TenKH: tenKH,
      DienThoai: dienThoai,
      DiaChi: diaChi,
      ThanhPho: thanhPho,
      QuanHuyen: quanHuyen,
      GhiChuKH: ghiChu,
      TrangThai: trangThai,
      ThoiGianDH: ThoiGianDH,
      HinhThucThanhToan: HinhThucTT
    }
    var sql = `UPDATE donhang SET ? WHERE MaKH = '${makh}' && TrangThai = 'Tạo giỏ hàng'`;
    db.query(sql, thanhtoan, (err, thanhcong) => {
    })
    var ds = [];
    var ttdonhang = 0;
    if (req.session.nguoidung.TenKH != "") {
      ds == await modelCart.layGioHang(req.session.nguoidung.MaKH);
      ttdonhang == await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    }
    var color = "green";
    var icontb = "fa fa-check-square";
    var tentrangthai = "Đặt hàng thành công"
    var motatrangthai = "Cảm ơn quý khách đã đặt hàng tại Website.<br>Đơn hàng của quý khách đã được tiếp nhận, chúng tôi sẽ xử lý trong khoảng thời gian sớm nhất.";
    var duonglink = "/cart/don-hang";
    var tenlink = "Xem đơn hàng";
  }
  else {
    ds = [];
    ttdonhang = 0;
    var color="red";
    var icontb = "fa fa-exclamation-triangle";
    var tentrangthai = "Bạn chưa mua sản phẩm nào"
    var motatrangthai = "Hãy quay về trang giỏ hàng để tiếp tục mua sản phẩm";
    var duonglink = "/trang-chu";
    var tenlink = "Về trang chủ";
  }
  res.render('thong-bao-thanh-toan', { title: 'Thanh toán', nguoidung: req.session.nguoidung, color: color, icontb: icontb, tentrangthai: tentrangthai, motatrangthai: motatrangthai, duonglink: duonglink, tenlink: tenlink, ds:ds, ttdonhang: ttdonhang});
});

module.exports = router;