var db = require("./database");

// Kiểm tra Email có trong csdl hay không?
exports.kiemtraEmail = function (email) {
    return new Promise ((resolve, reject) => {
        var sql = `SELECT * FROM khachhang WHERE Email = '${email}'`;
        db.query(sql, function(err, user) {
            var dulieu = user[0];
            resolve(dulieu);
        })
    })
}

//Kiểm tra tên tài khoản có trong cơ sở dữ liệu hay không?
exports.kiemtraTenTK = function (tentaikhoan) {
    return new Promise ((resolve, reject) => {
        var sql = `SELECT * FROM khachhang WHERE Email = '${tentaikhoan}'`;
        db.query(sql, function(err, user) {
            var dulieu = user[0];
            resolve(dulieu);
        })
    })
}

