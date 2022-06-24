var db = require('../models/database');
var giatien = [];
var donhang = [];
var giohang = [];
var phieu = [];

exports.taoDonHang = async (data) => {
    return new Promise((resolve, error) => {
        var sql = 'INSERT INTO donhang SET ?';
        db.query(sql, data, (err, donhang) => {
            console.log("Tạo bình luận thành công");
            resolve(donhang);
        })
    })
}

exports.laySanPham = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaSP, TenSP, HinhAnh, GiaTien FROM sanpham WHERE MaSP = '${masp}'`;
        db.query(sql, (err, sp) => {
            var ttsp = sp[0];
            resolve(ttsp);
        })
    })
}
exports.layPhuKien = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaPK, TenPK, HinhAnh, GiaTien FROM phukien WHERE MaPK = '${masp}'`;
        db.query(sql, (err, sp) => {
            var ttpk = sp[0];
            resolve(ttpk);
        })
    })
}
exports.layOp = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaOp, TenOp, HinhAnh, GiaTien FROM opdienthoai WHERE MaOp = '${masp}'`;
        db.query(sql, (err, sp) => {
            var ttop = sp[0];
            resolve(ttop);
        })
    })
}

exports.layDonHang = async (makh) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDH FROM donhang WHERE MaKH = ${makh} and TrangThai= 'Tạo giỏ hàng'`;
        db.query(sql, (err, dh) => {
            var madh = dh[0];
            resolve(madh);
        })
    })
}

exports.taoGioHang = async (data1) => {
    return new Promise((resolve, error) => {
        var sql = 'INSERT INTO giohang SET ?';
        db.query(sql, data1, (err, giohang) => {
            console.log("Tạo giỏ hàng thành công");
            resolve(giohang);
        })
    })
}

exports.layGioHang = async (makh) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaGH, donhang.MaDH, MaSP, TenSP, HinhAnh, DonGia, SoLuong FROM giohang INNER JOIN donhang on giohang.MaDH = donhang.MaDH WHERE MaKH = ${makh} && TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, (err, ds) => {
            console.log("Lấy giỏ hàng thành công");
            resolve(ds);
        })
    })
}

exports.capnhatGioHang = async (soluong, masp, madh) => {
    return new Promise((resolve, error) => {
        var sql = `UPDATE giohang SET SoLuong = ${soluong} WHERE MaSP = '${masp}' AND MaDH = ${madh}`;
        db.query(sql, (err, gh) => {
            console.log("Cập nhật giỏ hàng thành công");
            resolve(gh);
        })
    })
}

exports.laySoLuong = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT SoLuong FROM donhang INNER JOIN giohang on donhang.MaDH = giohang.MaDH WHERE MaSP = '${masp}' AND TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, (err, gh) => {
            var sl = gh[0];
            resolve(sl);
        })
    })
}

exports.layDonGia = async (madh) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT DonGia FROM giohang INNER JOIN donhang ON giohang.MaDH = donhang.MaDH WHERE donhang.MaDH = ${madh} AND TrangThai= 'Tạo giỏ hàng'`;
        db.query(sql, (err, dh) => {
            giatien = dh;
            resolve(giatien);
        })
    })
}

exports.capNhatDonHang = async (tong, thanhtien, madh) => {
    return new Promise((resolve, error) => {
        var sql = `UPDATE donhang SET TongTien = ${tong}, ThanhTien = ${thanhtien} WHERE MaDH = ${madh}`;
        db.query(sql, (err, dh) => {
            console.log("Cập nhật tổng tiền thành công");
            resolve(dh);
        })
    })
}

exports.layttDonHang = async (makh) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT SUM(SoLuong*DonGia) AS TongTien, ThanhTien, GiamTien, MaGiamGia FROM donhang INNER JOIN giohang ON donhang.MaDH = giohang.MaDH WHERE MaKH = ${makh} && TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, (err, dh) => {
            var thongtindh = dh[0];
            resolve(thongtindh);
        })
    })
}

exports.xoaSP = async (masp) => {
    return new Promise((resolve, error) => {
        var sql = `DELETE FROM giohang WHERE MaSP = '${masp}' AND MaDH = (SELECT MaDH FROM donhang WHERE TrangThai = 'Tạo giỏ hàng')`;
        db.query(sql, (err, dh) => {
            console.log("Xóa thành công");
            resolve(dh);
        })
    })
}

exports.capNhatDonHangTheoTrangThai = async (tong, makh) => {
    return new Promise((resolve, error) => {
        var sql = `UPDATE donhang SET TongTien = ${tong}, ThanhTien = ${tong} WHERE MaKH = ${makh} AND TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, (err, dh) => {
            console.log("Cập nhật tổng tiền thành công");
            resolve(dh);
        })
    })
}

exports.theoDoiDH = async (makh) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDH, ThoiGianDH, TrangThai, TongTien, ThanhTien FROM donhang WHERE MaKH = ${makh} ORDER BY donhang.MaDH DESC`;
        db.query(sql, (err, dhang) => {
            donhang = dhang;
            resolve(donhang);
        })
    })
}

exports.theoDoiDH_giohang = async () => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDH, TenSP, HinhAnh, SoLuong, DonGia FROM giohang;`;
        db.query(sql, (err, dhang) => {
            giohang = dhang;
            resolve(giohang);
        })
    })
}

exports.chitietdonhang = async (makh, madh) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT MaDH, ThoiGianDH, TenKH, DienThoai, DiaChi, QuanHuyen, ThanhPho, Email, TongTien, TrangThai, HinhThucThanhToan, ThanhTien, GiamTien FROM donhang WHERE MaKH = ${makh} AND MaDH = ${madh};`;
        db.query(sql, (err, dhang) => {
            var ctdonhang = dhang[0];
            resolve(ctdonhang);
        })
    })
}
exports.dsmagiamgia = async () => {
    return new Promise ((resolve, error) => {
        var sql = 'SELECT * FROM phieugiamgia';
        db.query(sql, (err, ma) => {
            phieu = ma;
            resolve(phieu);
        })
    })
}
exports.magiamgia = async (magiamgia) => {
    return new Promise((resolve, error) => {
        var sql = `SELECT GiamTien FROM phieugiamgia WHERE MaPhieu = '${magiamgia}'`;
        db.query(sql, (err, phieu) => {
            var giamgia = phieu[0];
            resolve(giamgia);
        })
    })
}

exports.update_GiamGia = async (tongtien, magiamgia, tien, madh) => {
    return new Promise((resolve, error) => {
        var sql = `UPDATE donhang SET ThanhTien = ${tongtien}, MaGiamGia = '${magiamgia}', GiamTien = ${tien} WHERE MaDH = ${madh} AND TrangThai = 'Tạo giỏ hàng'`;
        db.query(sql, (err, phieu) => {
           console.log("Cập nhật sau khi sử dụng mã giảm giá");
           resolve(phieu);
        })
    })
}

exports.update_TrangThai = async (trangthai, madh) => {
    return new Promise((resolve, error) => {
        var sql = `UPDATE donhang SET TrangThai = '${trangthai}' WHERE MaDH = ${madh}`;
        db.query(sql, (err, phieu) => {
           console.log("Cập nhật trạng thái thành công");
           resolve(phieu);
        })
    })
}