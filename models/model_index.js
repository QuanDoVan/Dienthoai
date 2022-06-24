var db = require('../models/database');
var dsdanhmuc = [];
var dssanpham = [];
var dsgiasoc = [];
var dsmoinhat = [];
var dsmuanhieu = [];
var dsphukien = [];
var dsop = [];

exports.danhsachDanhmuc = async () => {
    return new Promise ((resolve, error) => {
        var sql = 'SELECT * FROM danhmuc';
        db.query (sql, function (err, dm) {
            dsdanhmuc = dm;
            resolve(dsdanhmuc);
        })
    })
}

exports.danhsachSanPham = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT MaSP, TenSP, GiamGia, sanpham.HinhAnh, ThoiGian, SoLuong, MoTa, TrongLuong, KíchThuoc, KichCo, MauSac, GiaTien, danhmuc.MaDM, TenDM FROM danhmuc INNER JOIN sanpham on danhmuc.MaDM = sanpham.MaDM';
        db.query(sql, function(err, sp) {
            dssanpham = sp;
            resolve(dssanpham);
        })
    })
}

exports.tongsoSP = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT COUNT(MaSP) AS SL FROM sanpham';
        db.query(sql, function(err, sp) {
            var soluong = sp[0];
            resolve(soluong);
        })
    })
}

exports.dsSPgiasoc = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT MaSP, TenSP, GiaTien, sanpham.HinhAnh, danhmuc.TenDM FROM sanpham INNER JOIN danhmuc ON sanpham.MaDM = danhmuc.MaDM ORDER BY GiaTien ASC LIMIT 8;';
        db.query(sql, function(err, sp) {
            dsgiasoc = sp;
            resolve(dsgiasoc);
        })
    })
}

exports.dsSPMoiNhat = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT MaSP, TenSP, GiaTien, sanpham.HinhAnh, danhmuc.TenDM FROM sanpham INNER JOIN danhmuc ON sanpham.MaDM = danhmuc.MaDM ORDER BY ThoiGian DESC LIMIT 8;';
        db.query(sql, function(err, sp) {
            dsmoinhat = sp;
            resolve(dsmoinhat);
        })
    })
}

exports.dsMuaNhieuNhat = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT giohang.MaSP, COUNT(giohang.MaSP) AS SoLuongSP, giohang.TenSP, sanpham.HinhAnh, GiaTien, TenDM FROM giohang INNER JOIN sanpham ON giohang.MaSP = sanpham.MaSP INNER JOIN danhmuc ON sanpham.MaDM = danhmuc.MaDM GROUP BY giohang.MaSP ORDER BY COUNT(giohang.MaSP) DESC LIMIT 8;';
        db.query(sql, function(err, sp) {
            dsmuanhieu = sp;
            resolve(dsmuanhieu);
        })
    })
}

exports.dsPhuKien = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT MaPK, TenPK, phukien.GiaTien, phukien.GiamGia, phukien.HinhAnh, danhmuc.TenDM, NgayTao FROM phukien INNER JOIN danhmuc ON phukien.MaDM = danhmuc.MaDM;';
        db.query(sql, function(err, sp) {
            dsphukien = sp;
            resolve(dsphukien);
        })
    })
}

exports.dsOpDT = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT MaOp, TenOp, opdienthoai.HinhAnh, GiaTien, GiamGia, NgayTao, danhmuc.MaDM, TenDM FROM opdienthoai INNER JOIN danhmuc ON opdienthoai.MaDM = danhmuc.MaDM;';
        db.query(sql, function(err, sp) {
            dsop = sp;
            resolve(dsop);
        })
    })
}