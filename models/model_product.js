const db = require("./database");
var dsSanPham = [];
var dsspTuongTu = [];

exports.danhsachSanPham = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT GiamGia, GiaTien, sanpham.HinhAnh, KichCo, KíchThuoc, LuotXem, danhmuc.MaDM, TenDM, MaSP, MauSac, MoTa, SoLuong, TenSP, ThoiGian, TrongLuong FROM sanpham INNER JOIN danhmuc ON sanpham.MaDM = danhmuc.MaDM';
        db.query(sql, function(err, sp) {
            dsSanPham = sp;
            resolve(dsSanPham);
        })
    })
}

exports.spTuongTu = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT GiamGia, GiaTien, sanpham.HinhAnh, KichCo, KíchThuoc, LuotXem, danhmuc.MaDM, TenDM, MaSP, MauSac, MoTa, SoLuong, TenSP, ThoiGian, TrongLuong FROM sanpham INNER JOIN danhmuc ON sanpham.MaDM = danhmuc.MaDM WHERE danhmuc.MaDM = ${madm}`;
        db.query(sql, function(err, sp) {
            dsspTuongTu = sp;
            resolve(dsspTuongTu);
        })
    })
}
exports.spTuongTuPK = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaPK, TenPK, phukien.HinhAnh, GiaTien, danhmuc.MaDM, TenDM FROM phukien INNER JOIN danhmuc ON phukien.MaDM = danhmuc.MaDM WHERE danhmuc.MaDM = ${madm}`;
        db.query(sql, function(err, sp) {
            var dssptuongtupk = sp;
            resolve(dssptuongtupk);
        })
    })
}
exports.spTuongTuOp = async (madm) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaOp, TenOp, opdienthoai.HinhAnh, GiaTien, danhmuc.MaDM, TenDM FROM opdienthoai INNER JOIN danhmuc ON opdienthoai.MaDM = danhmuc.MaDM WHERE danhmuc.MaDM = ${madm}`;
        db.query(sql, function(err, sp) {
            var dssptuongtuop = sp;
            resolve(dssptuongtuop);
        })
    })
}

exports.layMaDMDT = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDM FROM sanpham WHERE MaSP = '${masp}'`;
        db.query(sql, function(err, sp) {
            var dsmasp = sp[0];
            resolve(dsmasp);
        })
    })
}

exports.layMaDMPK = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDM FROM phukien WHERE MaPK = '${masp}'`;
        db.query(sql, function(err, sp) {
            var dsmasp = sp[0];
            resolve(dsmasp);
        })
    })
}

exports.layMaDMOp = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDM FROM opdienthoai WHERE MaOp = '${masp}'`;
        db.query(sql, function(err, sp) {
            var dsmasp = sp[0];
            resolve(dsmasp);
        })
    })
}

exports.taoBinhLuan = async (data) => {
    return new Promise((resolve, error) => {
        var sql = 'INSERT INTO binhluan SET ?';
        db.query(sql, data, (err, binhluan) => {
            console.log("Tạo bình luận thành công");
            resolve(binhluan);
        })
    })
}

exports.layBinhLuanDienThoai = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT * FROM binhluan WHERE LoaiSP = "Điện thoại"';
        db.query(sql, (err, laybl) => {
            console.log("Lấy bình luận thành công");
            resolve(laybl);
        })
    })
}
exports.layBinhLuanPhuKien = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT * FROM binhluan WHERE LoaiSP = "Phụ kiện"';
        db.query(sql, (err, laybl) => {
            console.log("Lấy bình luận thành công");
            resolve(laybl);
        })
    })
}
exports.layBinhLuanOp = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT * FROM binhluan WHERE LoaiSP = "Ốp"';
        db.query(sql, (err, laybl) => {
            console.log("Lấy bình luận thành công");
            resolve(laybl);
        })
    })
}

exports.soBinhLuanSP = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT COUNT(MaBL) AS SoBL FROM binhluan WHERE MaSP = '${masp}' AND LoaiSP = "Điện thoại"`;
        db.query(sql, (err, sobl) => {
            var soBL = sobl[0];
            resolve(soBL);
        })
    })
}
exports.soBinhLuanPK = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT COUNT(MaBL) AS SoBL FROM binhluan WHERE MaPK = '${masp}' AND LoaiSP = "Phụ kiện"`;
        db.query(sql, (err, sobl) => {
            var soBL = sobl[0];
            resolve(soBL);
        })
    })
}
exports.soBinhLuanOp = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT COUNT(MaBL) AS SoBL FROM binhluan WHERE MaOp = '${masp}' AND LoaiSP = "Ốp"`;
        db.query(sql, (err, sobl) => {
            var soBL = sobl[0];
            resolve(soBL);
        })
    })
}

exports.layGioHang = async () => {
    return new Promise((resolve, error) => {
        var sql = 'SELECT * FROM giohang';
        db.query(sql, (err, laygh) => {
            console.log("Lấy giohang thành công");
            resolve(laygh);
        })
    })
}
