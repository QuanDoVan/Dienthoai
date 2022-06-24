var express = require('express');
const db = require('../models/database');
const modelNews = require('../models/model_news');
const modelCart = require('../models/model_cart');
var router = express.Router();

/* GET home page. */
router.get('/tin-tuc', async function (req, res, next) {
    var dsTheLoai = await modelNews.theLoaiTinTuc();
    var dsTinTuc = await modelNews.dsTinTuc();
    var dsTinTucMoiNhat = await modelNews.tinMoiNhat();
    if (req.session.nguoidung.TenKH != "") {
        var ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
        var ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    }
    else {
        var ds = [];
        var ttdonhang = 0;
    }
    if (dsTinTuc.length > 0 || dsTinTucMoiNhat.length > 0) {
        var dstin = dsTinTuc;
        var dstinmoinhat = dsTinTucMoiNhat;
    }
    else
    {
        dstin = [];
        dstinmoinhat = [];
        var thongbao1 = "Chưa có tin tức nào được đăng";
        var thongbao2 = "Chưa có tin tức mới nào";
    }
    if (req.session.nguoidung)
    {
        res.render('tin-tuc', { title: 'Tin tức', nguoidung: req.session.nguoidung, data1: dsTheLoai, data2: dstin, data3: dstinmoinhat, thongbao1: thongbao1, thongbao2: thongbao2, ds: ds, ttdonhang: ttdonhang});
    }
    else {
        req.session.nguoidung = {
            TenKH: ""
        };
        res.render('tin-tuc', { title: 'Tin tức', nguoidung: req.session.nguoidung, data1: dsTheLoai, data2: dstin, data3: dstinmoinhat, thongbao1: thongbao1, thongbao2: thongbao2, ds: ds, ttdonhang: ttdonhang});
    }
});

router.get('/chi-tiet-tin-tuc/:matintuc', async function (req, res, next) {
    var matt = req.params.matintuc;
    var dsTheLoai = await modelNews.theLoaiTinTuc();
    var dsTinTuc = await modelNews.dsTinTuc();
    var dsTinTucMoiNhat = await modelNews.tinMoiNhat();
    var dsBinhLuan = await modelNews.layBinhLuan(matt);
   
    if (req.session.nguoidung.TenKH != "") {
        var ds = await modelCart.layGioHang(req.session.nguoidung.MaKH);
        var ttdonhang = await modelCart.layttDonHang(req.session.nguoidung.MaKH);
    }
    else {
        var ds = [];
        var ttdonhang = 0;
    }
    for (var i of dsTinTuc) {
        if (i.MaTinTuc == matt) {
            var tenTinTuc = i.TieuDeTin;
            var chitiettt = i;
            break;
        }
    }
    var dstinlienquan = await modelNews.layTinTucLQ(matt);
    var dstintuclq = [];
    var dem = 1;
    for (var i = 0; i < dstinlienquan.length; i++) {
        if (dstinlienquan[i].MaTinTuc != matt) {
            if (dem <= 4) {
                dem++;
                dstintuclq.push(dstinlienquan[i]);
            }          
        }
    }
    if (dstintuclq.length > 0) {
        var dstinlq = dstintuclq;
    }
    else {
        var dstinlq = [];
        var thongbao1 = "Không có tin liên quan nào";
    }
  res.render('chi-tiet-tin-tuc', {title: 'Tin tức', nguoidung: req.session.nguoidung, data1: dsTheLoai, data2: dsTinTucMoiNhat, data3: chitiettt, data4: dstinlq, data5: dsBinhLuan, thongbao1: thongbao1, ds: ds, ttdonhang: ttdonhang, link: tenTinTuc});
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
router.post('/chi-tiet-tin-tuc/binh-luan/:matintuc', async function (req, res, next) {
    var matt = req.params.matintuc;
    var noidung = req.body.noidungbl;
    var hoten = req.body.hoten;
    var email = req.body.email;
    var data = {
        TenKH: hoten,
        Email: email,
        NoiDungBL: noidung,
        ThoiGianBL: thoigian(),
        MaTinTuc: matt
    }
    var binhluan = await modelNews.taoBLBaiViet(data);
 res.redirect(`/news/chi-tiet-tin-tuc/${matt}`);
});


module.exports = router;
