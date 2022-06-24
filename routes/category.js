var express = require('express');
const db = require('../models/database');
const modelCategory = require('../models/model_category');
const modelIndex = require('../models/model_index');
const modelCart = require('../models/model_cart');
var router = express.Router();

router.get('/categoryid=:madm/page=:page', async function (req, res, next) {
    var madm = req.params.madm;
    var sptheodm = await modelCategory.spDanhMuc(madm);
    var danhmuc = await modelCategory.dsDanhMuc();
    var tendm = await modelCategory.tenDanhMuc(madm);
    var tendanhmuc = tendm.TenDM;
    var page = parseInt(req.params.page) || 1;
    var perPage = 12;
    var start = (page-1)*perPage;
    var end = page*perPage;
    var sotrang = parseInt(sptheodm.length/12) + 1;
    var batdau = start + 1;
    var ketthuc = end;
    const tongSP = await modelIndex.tongsoSP();
    const ds = [];
    const ttdonhang = 0;
    if (req.session.nguoidung.TenKH) {
      ds == await modelCart.layGioHang(req.session.nguoidung.MaKH);
      ttdonhang == await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    }
      res.render('san-pham-theo-danh-muc', { title: 'Cửa hàng điện thoại', data1: sptheodm.slice(start, end), data2: danhmuc, tenDM: tendanhmuc, nguoidung: req.session.nguoidung, pages: sotrang, current: page, start: batdau, end: ketthuc, tong: tongSP, ds: ds, ttdonhang: ttdonhang });
  });

module.exports = router;