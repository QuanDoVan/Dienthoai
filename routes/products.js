var express = require('express');
const db = require('../models/database');
const modelIndex = require('../models/model_index');
const modelProduct = require('../models/model_product');
const modelCategory = require('../models/model_category');
const modelCart = require('../models/model_cart');
var router = express.Router();

router.get('/cua-hang/dien-thoai/:page', async function(req, res, next) {
    var page = parseInt(req.params.page) || 1;
    var perPage = 12;
    var start = (page-1)*perPage;
    var end = page*perPage;
    const sanpham = await modelIndex.danhsachSanPham();
    var sotrang = parseInt(sanpham.length/12) + 1;
    var batdau = start + 1;
    var ketthuc = end;
    const tongSP = await modelIndex.tongsoSP();
    const danhmuc = await modelCategory.dsDanhMuc();
    if (req.session.nguoidung.TenKH != "") {
      const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
      const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
      res.render('cua-hang', {title: "Cửa hàng", data2: sanpham.slice(start, end), nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, danhmuc: danhmuc, ds: ds, ttdonhang: ttdonhang});
    }
    else {
      const ds = [];
      const ttdonhang = 0;
      res.render('cua-hang', {title: "Cửa hàng", data2: sanpham.slice(start, end), nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, danhmuc: danhmuc, ds: ds, ttdonhang: ttdonhang});
    }
  });

router.get('/dien-thoai/:tensp/id=:masp', async function(req, res, next) {
  var masp = req.params.masp;
  const ds = [];
  const ttdonhang = 0;
  if (req.session.nguoidung.TenKH) {
    ds == await modelCart.layGioHang(req.session.nguoidung.MaKH);
    ttdonhang == await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  }
  var dssanpham = await modelIndex.danhsachSanPham();
  for (i of dssanpham) {
    if (i.MaSP == masp) {
      var tensanpham = i.TenSP;
      var sanpham = i;
      break;
    }
  }
  var madanhmuc = await modelProduct.layMaDMDT(masp);
  var madm = madanhmuc.MaDM;
  var dssptuongtu = await modelProduct.spTuongTu(madm);
  var tuongtu = [];
  for (var i = 0; i < dssptuongtu.length; i++) {
      if (dssptuongtu[i].MaSP != masp) {
            tuongtu.push(dssptuongtu[i]);
      }
  }
  if (tuongtu.length > 0) {
    var dstuongtu = tuongtu;
  }
  else {
    var dstuongtu = [];
    var thongbao = "Chưa có sản phẩm tương tự nào.";
  }
  var layBL = await modelProduct.layBinhLuanDienThoai();
  var layBinhLuan = [];
  for (item of layBL) {
    if (item.MaSP == masp) {
      layBinhLuan.push(item);
    }
  }
  var SoBinhLuan = await modelProduct.soBinhLuanSP(masp);
  console.log(SoBinhLuan);
  res.render('chi-tiet-san-pham', {title: "Chi tiết sản phẩm", datasp: sanpham, nguoidung: req.session.nguoidung, sptuongtu: dstuongtu, binhluan: layBinhLuan, link: tensanpham, sobl: SoBinhLuan, thongbao: thongbao, ds: ds, ttdonhang: ttdonhang});
});

router.get('/phu-kien/:tensp/id=:masp', async function(req, res, next) {
  var masp = req.params.masp;
  const ds = [];
  const ttdonhang = 0;
  if (req.session.nguoidung.TenKH) {
    ds == await modelCart.layGioHang(req.session.nguoidung.MaKH);
    ttdonhang == await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  }
  var dsphukien = await modelIndex.dsPhuKien();
  for (i of dsphukien) {
    if (i.MaPK == masp) {
      var tensanpham = i.TenPK;
      var phukien = i;
      break;
    }
  }

  var madanhmuc = await modelProduct.layMaDMPK(masp);
  var madm = madanhmuc.MaDM;
  var dssptuongtu = await modelProduct.spTuongTuPK(madm);
  var tuongtu = [];
  for (var i = 0; i < dssptuongtu.length; i++) {
      if (dssptuongtu[i].MaSP != masp) {
            tuongtu.push(dssptuongtu[i]);
      }
  }
  if (tuongtu.length > 0) {
    var dstuongtu = tuongtu;
  }
  else {
    var dstuongtu = [];
    var thongbao = "Chưa có sản phẩm tương tự nào.";
  }
  var layBL = await modelProduct.layBinhLuanPhuKien();
  var layBinhLuan = [];
  for (item of layBL) {
    if (item.MaPK == masp) {
      layBinhLuan.push(item);
    }
  }
  var SoBinhLuan = await modelProduct.soBinhLuanPK(masp);
  res.render('chi-tiet-phu-kien', {title: "Chi tiết phụ kiện", datasp: phukien, nguoidung: req.session.nguoidung, sptuongtu: dstuongtu, binhluan: layBinhLuan, link: tensanpham, sobl: SoBinhLuan, thongbao: thongbao, ds: ds, ttdonhang: ttdonhang});
});

router.get('/op-dien-thoai/:tensp/id=:masp', async function(req, res, next) {
  var masp = req.params.masp;
  const ds = [];
  const ttdonhang = 0;
  if (req.session.nguoidung.TenKH) {
    ds == await modelCart.layGioHang(req.session.nguoidung.MaKH);
    ttdonhang == await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  }
  var dsop = await modelIndex.dsOpDT();
  for (i of dsop) {
    if (i.MaOp == masp) {
      var tensanpham = i.TenOp;
      var opdienthoai = i;
      break;
    }
  }
  var madanhmuc = await modelProduct.layMaDMOp(masp);
  var madm = madanhmuc.MaDM;
  var dssptuongtu = await modelProduct.spTuongTuOp(madm);
  var tuongtu = [];
  for (var i = 0; i < dssptuongtu.length; i++) {
      if (dssptuongtu[i].MaSP != masp) {
            tuongtu.push(dssptuongtu[i]);
      }
  }
  if (tuongtu.length > 0) {
    var dstuongtu = tuongtu;
  }
  else {
    var dstuongtu = [];
    var thongbao = "Chưa có sản phẩm tương tự nào.";
  }
  var layBL = await modelProduct.layBinhLuanOp();
  var layBinhLuan = [];
  for (item of layBL) {
    if (item.MaOp == masp) {
      layBinhLuan.push(item);
    }
  }
  var SoBinhLuan = await modelProduct.soBinhLuanOp(masp);
  console.log(SoBinhLuan);
  res.render('chi-tiet-op-dien-thoai', {title: "Chi tiết sản phẩm", datasp: opdienthoai, nguoidung: req.session.nguoidung, sptuongtu: dstuongtu, binhluan: layBinhLuan, link: tensanpham, sobl: SoBinhLuan, thongbao: thongbao, ds: ds, ttdonhang: ttdonhang});
});

function time () {
  var d = new Date();
  var ngay = d.getDate();
  var thang = d.getMonth() + 1;
  var nam = d.getFullYear();
  var gio = d.getHours();
  var phut = d.getMinutes();
  var giay = d.getSeconds();
  return ngay + "/" + thang + "/" + nam + " " + gio + ":" + phut + ":" + giay;
}

router.post('/binh-luan/dien-thoai', async function(req, res, next) {
  var binhluan = req.body.ndbinhluan;
  var makh = req.session.nguoidung.MaKH;
  var tenkh = req.session.nguoidung.TenKH;
  var email = req.session.nguoidung.Email;
  var thoigian = time ();
  var masp = req.body.masp;
  var tensp = req.body.tensp;
  console.log("Nội dung bình luận: " + binhluan);
  console.log("Mã sản phẩm: " + masp);
  console.log("Tên sản phẩm: " + tensp);
  var data = {
    NoiDungBL: binhluan,
    MaKH: makh,
    TenKH: tenkh,
    Email: email,
    ThoiGian: thoigian,
    LoaiSP: "Điện thoại",
    MaSP: masp
  }
  var query = await modelProduct.taoBinhLuan(data);
  res.redirect(`/products/dien-thoai/${tensp}/id=${masp}`);
});

router.post('/binh-luan/phu-kien', async function(req, res, next) {
  var binhluan = req.body.ndbinhluan;
  var makh = req.session.nguoidung.MaKH;
  var tenkh = req.session.nguoidung.TenKH;
  var email = req.session.nguoidung.Email;
  var thoigian = time ();
  var masp = req.body.masp;
  var tensp = req.body.tensp;
  console.log("Nội dung bình luận: " + binhluan);
  console.log("Mã sản phẩm: " + masp);
  console.log("Tên sản phẩm: " + tensp);
  var data = {
    NoiDungBL: binhluan,
    MaKH: makh,
    TenKH: tenkh,
    Email: email,
    ThoiGian: thoigian,
    LoaiSP: "Phụ kiện",
    MaPK: masp
  }
  var query = await modelProduct.taoBinhLuan(data);
  res.redirect(`/products/phu-kien/${tensp}/id=${masp}`);
});

router.post('/binh-luan/op-dien-thoai', async function(req, res, next) {
  var binhluan = req.body.ndbinhluan;
  var makh = req.session.nguoidung.MaKH;
  var tenkh = req.session.nguoidung.TenKH;
  var email = req.session.nguoidung.Email;
  var thoigian = time ();
  var masp = req.body.masp;
  var tensp = req.body.tensp;
  console.log("Nội dung bình luận: " + binhluan);
  console.log("Mã sản phẩm: " + masp);
  console.log("Tên sản phẩm: " + tensp);
  var data = {
    NoiDungBL: binhluan,
    MaKH: makh,
    TenKH: tenkh,
    Email: email,
    ThoiGian: thoigian,
    LoaiSP: "Phụ kiện",
    MaOp: masp
  }
  var query = await modelProduct.taoBinhLuan(data);
  res.redirect(`/products/op-dien-thoai/${tensp}/id=${masp}`);
});

router.get('/cua-hang/op-dien-thoai/:page', async function(req, res, next) {
  var page = parseInt(req.params.page) || 1;
  var perPage = 12;
  var start = (page-1)*perPage;
  var end = page*perPage;
  const op = await modelIndex.dsOpDT();
  var sotrang = parseInt(op.length/12) + 1;
  var batdau = start + 1;
  var ketthuc = end;
  const tongSP = await modelIndex.tongsoSP();
  const danhmuc = await modelCategory.dsDanhMuc();
  if (req.session.nguoidung.TenKH != "") {
    const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
    const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    res.render('op-dien-thoai', {title: "Ốp điện thoại", data2: op.slice(start, end), nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, danhmuc: danhmuc, ds: ds, ttdonhang: ttdonhang});
  }
  else {
    const ds = [];
    const ttdonhang = 0;
    res.render('op-dien-thoai', {title: "Ốp điện thoại", data2: op.slice(start, end), nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, danhmuc: danhmuc, ds: ds, ttdonhang: ttdonhang});
  }
});

router.get('/cua-hang/phu-kien/:page', async function(req, res, next) {
  var page = parseInt(req.params.page) || 1;
  var perPage = 12;
  var start = (page-1)*perPage;
  var end = page*perPage;
  const phukien = await modelIndex.dsPhuKien();
  var sotrang = parseInt(phukien.length/12) + 1;
  var batdau = start + 1;
  var ketthuc = end;
  const tongSP = await modelIndex.tongsoSP();
  const danhmuc = await modelCategory.dsDanhMuc();
  if (req.session.nguoidung.TenKH) {
    const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
    const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    res.render('phu-kien', {title: "Phụ kiện", data2: phukien.slice(start, end), nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, danhmuc: danhmuc, ds: ds, ttdonhang: ttdonhang});
  }
  else {
    const ds = [];
    const ttdonhang = 0;
  res.render('phu-kien', {title: "Phụ kiện", data2: phukien.slice(start, end), nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, danhmuc: danhmuc, ds: ds, ttdonhang: ttdonhang});
  }
});

module.exports = router;