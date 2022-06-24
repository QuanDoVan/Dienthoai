const db = require("./database");
var dsdanhmuc = [];
var spDanhMuc = [];

exports.spDanhMuc = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaSP, TenSP, GiamGia, sanpham.HinhAnh, ThoiGian, SoLuong, MoTa, TrongLuong, KíchThuoc, KichCo, MauSac, GiaTien, danhmuc.MaDM, TenDM FROM sanpham INNER JOIN danhmuc ON sanpham.MaDM = danhmuc.MaDM WHERE danhmuc.MaDM = ${madm}`;
        db.query(sql, function(err, sp) {
            spDanhMuc = sp;
            resolve(spDanhMuc);
        })
    })
}

exports.dsDanhMuc = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT * FROM danhmuc';
        db.query(sql, function(err, sp) {
            spdanhmuc = sp;
            resolve(spdanhmuc);
        })
    })
}

exports.tenDanhMuc = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT TenDM FROM danhmuc WHERE MaDM = ${madm}`;
        db.query(sql, function(err, sp) {
            resolve(sp[0]);
        })
    })
}