var db = require('../models/database');

exports.thanhtoan = async (data, makh, trangthai) => {
    return new Promise((resolve, error) => {
        var sql = `UPDATE donhang SET ? WHERE MaHD = '${makh}' && TrangThai = '${trangthai}'`;
        db.query(sql, data, (err, thanhtoan) => {
            console.log("Thanh toán thành công");
            resolve(thanhtoan);
        })
    })
}