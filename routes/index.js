var express = require('express');
const db = require('../models/database');
const modelIndex = require('../models/model_index');
const modelCart = require('../models/model_cart');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const danhmuc = await modelIndex.danhsachDanhmuc();
  const sanpham = await modelIndex.danhsachSanPham();
  const giasoc = await modelIndex.dsSPgiasoc();
  const moinhat = await modelIndex.dsSPMoiNhat();
  const muanhieu = await modelIndex.dsMuaNhieuNhat();
  const phukien = await modelIndex.dsPhuKien();
  const op = await modelIndex.dsOpDT();
  req.session.nguoidung = {
    TenKH: ""
  }
  res.render('index', { title: 'Cửa hàng điện thoại', nguoidung: req.session.nguoidung, data1: danhmuc, data2: sanpham, data3: giasoc, data4: moinhat, data5: muanhieu, data6: phukien, data7: op });
});

router.get('/trang-chu', async function(req, res, next) {
  const danhmuc = await modelIndex.danhsachDanhmuc();
  const sanpham = await modelIndex.danhsachSanPham();
  const giasoc = await modelIndex.dsSPgiasoc();
  const moinhat = await modelIndex.dsSPMoiNhat();
  const muanhieu = await modelIndex.dsMuaNhieuNhat();
  const phukien = await modelIndex.dsPhuKien();
  const ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
  const ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
  const op = await modelIndex.dsOpDT();
  if (req.session.nguoidung) 
  {
    console.log(req.session.nguoidung);
    res.render('trang-chu', { title: 'Trang chủ', data1: danhmuc, data2: sanpham, data3: giasoc, data4: moinhat, data5: muanhieu, data6: phukien, data7: op, nguoidung: req.session.nguoidung, ds: ds, ttdonhang: ttdonhang});
  }
  else {
    req.session.nguoidung = {
      TenKH: ""
    }
    console.log(req.session.nguoidung);
    res.render('trang-chu', { title: 'Trang chủ', data1: danhmuc, data2: sanpham, data3: giasoc, data4: moinhat, data5: muanhieu, data6: phukien, data7: op, nguoidung: req.session.nguoidung});
  }
});

module.exports = router;
