var db = require('../models/database');
var theloaitt = [];
var dstintuc = [];
var dstinlq = [];
var binhluan = [];

exports.theLoaiTinTuc = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT TenTL FROM theloaitintuc';
        db.query(sql, (err, theloai) => {
            theloaitt = theloai;
            resolve(theloaitt);
        })
    })
}

exports.dsTinTuc = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT * FROM tintuc';
        db.query(sql, (err, tintuc) => {
            dstintuc = tintuc;
            resolve(dstintuc);
        })
    })
}

exports.tinMoiNhat = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT MaTinTuc, HinhAnh, TieuDeTin, NgayDang FROM `tintuc` ORDER BY NgayDang DESC LIMIT 5';
        db.query(sql, (err, tintuc) => {
            dstintucmoi = tintuc;
            resolve(dstintuc);
        })
    })
}

exports.layTinTucLQ = async (matt) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT * FROM tintuc WHERE MaTL = (SELECT MaTL FROM tintuc WHERE MaTinTuc = ${matt});`;
        db.query(sql, (err, tintuc) => {
            dstinlq = tintuc;
            resolve(dstinlq);
        })
    })
}

exports.taoBLBaiViet = async (data) => {
    return new Promise((resolve, error) => {
        var sql = 'INSERT INTO binhluanbaiviet SET ?';
        db.query(sql, data, (err, binhluan) => {
            console.log("Bình luận thành công");
            resolve(binhluan);
        })
    })
}

exports.layBinhLuan = async (matt) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT TenKH, ThoiGianBL, NoiDungBL FROM binhluanbaiviet WHERE MaTinTuc = ${matt}`;
        db.query(sql, (err, binhLuan) => {
            binhluan = binhLuan;
            resolve(binhluan);
        })
    })
}