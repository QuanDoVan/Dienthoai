-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 24, 2022 lúc 11:16 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qldienthoai`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `MaBL` int(11) NOT NULL,
  `NoiDungBL` text COLLATE utf8_unicode_ci NOT NULL,
  `MaKH` int(11) NOT NULL,
  `TenKH` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ThoiGian` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `LoaiSP` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MaSP` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaPK` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaOp` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `binhluan`
--

INSERT INTO `binhluan` (`MaBL`, `NoiDungBL`, `MaKH`, `TenKH`, `Email`, `ThoiGian`, `LoaiSP`, `MaSP`, `MaPK`, `MaOp`) VALUES
(1, 'Điện thoại rất là đẹp', 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '2022-03-20 17:48:28', 'Điện thoại', '1', NULL, NULL),
(2, 'Điện thoại dùng rất thích. Đóng hàng nhanh. Ship nhanh vô cùng. Sẽ ủng hộ shop lần sau.', 8, 'Nguyễn Hải Nam', 'hainam@gmail.com', '2022-03-20 18:08:49', 'Điện thoại', '1', NULL, NULL),
(3, 'Điện thoại sử dụng thất rất mượt. Shop phục vụ tận tình. Sẽ ủng hộ shop lần tiếp theo', 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '2022-03-20 18:37:49', 'Điện thoại', '2', NULL, NULL),
(4, 'Chị shiper nhiệt tình', 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '2022-03-26 22:54:12', 'Điện thoại', '1', NULL, NULL),
(5, 'Điện thoại dùng rất mượt.', 15, 'admin', 'admin@gmail.com', '17/5/2022 15:26:1', 'Điện thoại', '1', NULL, NULL),
(6, 'Điện thoại dùng rất là tốt. Ship hàng nhanh chóng. Shiper thân thiện. Shop hỗ trợ nhiệt tình.', 15, 'admin', 'admin@gmail.com', '17/5/2022 15:27:5', 'Điện thoại', '1', NULL, NULL),
(12, 'Tai nghe dùng rất thích', 15, 'admin', 'admin@gmail.com', '17/5/2022 15:54:24', 'Phụ kiện', NULL, 'PK1', NULL),
(13, 'Ốp xinh lắm', 15, 'admin', 'admin@gmail.com', '17/5/2022 16:0:59', 'Ốp', NULL, NULL, 'OP1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluanbaiviet`
--

CREATE TABLE `binhluanbaiviet` (
  `MaBLBV` int(11) NOT NULL,
  `TenKH` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NoiDungBL` text COLLATE utf8_unicode_ci NOT NULL,
  `ThoiGianBL` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MaTinTuc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `binhluanbaiviet`
--

INSERT INTO `binhluanbaiviet` (`MaBLBV`, `TenKH`, `Email`, `NoiDungBL`, `ThoiGianBL`, `MaTinTuc`) VALUES
(1, 'Nguyễn Văn A', 'nguyenvana@gmail.com', 'Bài viết được viết rất là hay, đầy đủ và hấp dẫn với những người thích điện thoại.', '4/3/2022 23:7:57', 5),
(2, 'Hoàng Nam Hoa', 'namhoa@gmail.com', 'Bài viết đầy đủ lắm, đọc xong được biết rất nhiều thông tin mới về chiếc điện thoại.', '7/4/2022 23:11:28', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `MaDM` int(11) NOT NULL,
  `TenDM` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TenHang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`MaDM`, `TenDM`, `TenHang`, `HinhAnh`) VALUES
(1, 'Điện thoại Apple', 'Apple', 'https://s1.img.yan.vn/YanNews/2167221/201608/20160829-062704-cnaphtmxgaeercp_768x768.png'),
(2, 'Điện thoại Samsung', 'Samsung', 'https://www.elleman.vn/wp-content/uploads/2019/10/02/logo-thu%CC%9Bo%CC%9Bng-hie%CC%A3%CC%82u-samsung-hi%CC%80nh-elip.png'),
(3, 'Điện thoại Xiaomi', 'Xiaomi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizedcttbkJLa4wat3R0mgMcahS4LAtEz1EF61pm3MlEyFiMH5DpKajfVvxRUoZodxvOY&usqp=CAU'),
(4, 'Điện thoại Oppo', 'Oppo', 'https://cdn.sforum.vn/sforum/wp-content/uploads/2021/08/OPPO-Logo-Plain.jpg'),
(5, 'Điện thoại Realme', 'Realme', 'https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=774171810'),
(6, 'Điện thoại Lenovo', 'Lenovo', 'https://phucgia.com.vn/wp-content/uploads/2020/03/Lenovo-Logo.jpg'),
(7, 'Điện thoại Motorola', 'Motorola', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnkxuF4FnK1mTuNPI2qlBdQc-MEi3YmJ4FRfnRf_XaBPHdX0KoXmIubinithxL3JuvP4&usqp=CAU'),
(8, 'Điện thoại Vivo', 'Vivo', 'https://salondupolytechnicien.esp.sn/assets/img/vivo.png'),
(9, 'Điện thoại Huawei', 'Huawei', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYelkddr2E_bSI8TJponKjH8BvQIoWKsb5PRhtbw1T0Npo7lzyDuvE0YhrnDi8C-BPiZs&usqp=CAU'),
(10, 'Điện thoại TECNO', 'TECNO', 'https://indiaeducationdiary.in/wp-content/uploads/2022/03/Tecno-Logo-Vector-scaled-1.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `MaDH` int(11) NOT NULL,
  `MaKH` int(11) NOT NULL,
  `TenKH` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `DienThoai` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `DiaChi` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `QuanHuyen` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ThanhPho` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ThoiGianDH` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `HinhThucThanhToan` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TongTien` double NOT NULL,
  `ThanhTien` int(11) DEFAULT NULL,
  `TrangThai` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GhiChuKH` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `GhiChuAdmin` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaGiamGia` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GiamTien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`MaDH`, `MaKH`, `TenKH`, `Email`, `DienThoai`, `DiaChi`, `QuanHuyen`, `ThanhPho`, `ThoiGianDH`, `HinhThucThanhToan`, `TongTien`, `ThanhTien`, `TrangThai`, `GhiChuKH`, `GhiChuAdmin`, `MaGiamGia`, `GiamTien`) VALUES
(1, 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '0126597458', 'Hà Nội', 'Hà Nội', 'Hà Nội', '01/04/2022 10:15:48', 'Thanh toán online qua thẻ ATM', 117960000, 117960000, 'Chờ xác nhận', '', NULL, NULL, 0),
(9, 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '0126597458', 'Hà Nội', 'Đà Nẵng', 'Đà Nẵng', '01/04/2022 10:16:27', 'Chuyển khoản qua ngân hàng  ', 18340000, 18340000, 'Chờ xác nhận', '', NULL, NULL, 0),
(11, 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '0126597458', 'Hà Nội', 'TP. Hồ Chí Minh', 'TP. Hồ Chí Minh', '04/04/2022 23:42:03', 'Thanh toán khi giao hàng (COD)', 46370000, 46370000, 'Chờ xác nhận', '', NULL, NULL, 0),
(14, 15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', '0126597458', 'Hà Nội', 'Bắc Từ Liêm', 'Hà Nội', '27/04/2022 23:16:11', 'PayPal', 47030000, 47030000, 'Chờ xác nhận', '', NULL, NULL, 0),
(15, 15, 'Nguyễn A', 'nguyena@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '05/05/2022 16:33:57', 'PayPal', 75010000, 75010000, 'Chờ xác nhận', '', NULL, NULL, 0),
(16, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '09/05/2022 15:15:43', 'PayPal', 92210000, 92210000, 'Chờ xác nhận', '', NULL, NULL, 0),
(17, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', 'Nam Từ Liêm', 'Đà Nẵng', '11/05/2022 14:28:29', 'PayPal', 35730000, 35730000, 'Chờ xác nhận', '', NULL, NULL, 0),
(21, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '12/05/2022 18:23:50', 'PayPal', 102660000, 102660000, 'Chờ xác nhận', '', NULL, NULL, 0),
(23, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '12/05/2022 23:32:58', 'PayPal', 168000000, 168000000, 'Nhận hàng thành công', '', NULL, NULL, 0),
(24, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '13/05/2022 14:44:10', 'PayPal', 89086500, 89086500, 'Nhận hàng thành công', '', NULL, NULL, 0),
(28, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '15/5/2022 8:31:25', 'Thanh toán khi giao hàng (COD)', 85650000, 85550000, 'Nhận hàng thành công', '', NULL, 'GIAMGIA1', 100000),
(29, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '17/5/2022 16:48:38', 'PayPal', 88730000, 88630000, 'Chờ xác nhận', '', NULL, 'GIAMGIA1', 100000),
(30, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '17/5/2022 17:43:10', 'PayPal', 29520000, 29420000, 'Chờ xác nhận', '', NULL, 'GIAMGIA1', 100000),
(31, 15, 'admin', 'admin@gmail.com', '0123456789', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', '-------Chọn-------', '-------Chọn-------', '17/5/2022 17:56:12', 'PayPal', 56760000, 56760000, 'Nhận hàng thành công', '', NULL, 'GIAMGIA1', 100000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `MaGH` int(11) NOT NULL,
  `MaDH` int(11) NOT NULL,
  `MaSP` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `TenSP` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `DonGia` double NOT NULL,
  `SoLuong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `giohang`
--

INSERT INTO `giohang` (`MaGH`, `MaDH`, `MaSP`, `TenSP`, `HinhAnh`, `DonGia`, `SoLuong`) VALUES
(32, 1, '3', 'Samsung Galaxy A03', 'https://cf.shopee.vn/file/c864ec34e780459ded129d5354a7e04f', 2690000, 1),
(33, 1, '4', 'Samsung Galaxy S21', 'https://cf.shopee.vn/file/3cde21023be39eb5eebfb98d90fec94d', 14190000, 1),
(37, 9, '2', 'Apple iPhone 11', 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 13990000, 1),
(40, 9, '7', 'OPPO A55', 'https://cf.shopee.vn/file/8617af13fde79ff36ad3f35bb6659740', 4350000, 1),
(41, 9, '9', 'Apple iPhone 12 ', 'https://cf.shopee.vn/file/77404ff511ce0585cca1f78f89b91c91', 18690000, 1),
(42, 11, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 1),
(43, 11, '3', 'Samsung Galaxy A03', 'https://cf.shopee.vn/file/c864ec34e780459ded129d5354a7e04f', 2690000, 1),
(44, 11, '4', 'Samsung Galaxy S21', 'https://cf.shopee.vn/file/3cde21023be39eb5eebfb98d90fec94d', 14190000, 1),
(55, 14, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 1),
(56, 14, '2', 'Apple iPhone 11', 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 13990000, 1),
(58, 14, '8', 'Vivo Y20', 'https://cf.shopee.vn/file/ce0344da4d52fa95c331cea2f65e8b8c', 3550000, 1),
(59, 15, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 1),
(60, 15, '2', 'Apple iPhone 11', 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 13990000, 3),
(61, 15, '8', 'Vivo Y20', 'https://cf.shopee.vn/file/ce0344da4d52fa95c331cea2f65e8b8c', 3550000, 1),
(62, 16, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 2),
(63, 16, '8', 'Vivo Y20', 'https://cf.shopee.vn/file/ce0344da4d52fa95c331cea2f65e8b8c', 3550000, 1),
(64, 16, '9', 'Apple iPhone 12 ', 'https://cf.shopee.vn/file/77404ff511ce0585cca1f78f89b91c91', 18690000, 1),
(65, 16, '6', 'Xiaomi 11T', '	https://cf.shopee.vn/file/90ebcd275bd43de406b6f4fb338d0089', 10990000, 1),
(66, 17, '8', 'Vivo Y20', 'https://cf.shopee.vn/file/ce0344da4d52fa95c331cea2f65e8b8c', 3550000, 1),
(67, 17, '3', 'Samsung Galaxy A03', 'https://cf.shopee.vn/file/c864ec34e780459ded129d5354a7e04f', 2690000, 1),
(68, 17, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 1),
(77, 21, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 2),
(79, 21, '3', 'Samsung Galaxy A03', 'https://cf.shopee.vn/file/c864ec34e780459ded129d5354a7e04f', 2690000, 2),
(80, 21, '2', 'Apple iPhone 11', 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 13990000, 1),
(83, 21, '7', 'OPPO A55', 'https://cf.shopee.vn/file/8617af13fde79ff36ad3f35bb6659740', 4350000, 1),
(84, 21, '5', 'Redmi Note 10', 'https://cf.shopee.vn/file/edda36c88bc34c7137374ddfce0603c6', 4990000, 4),
(85, 23, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 4),
(86, 23, '2', 'Apple iPhone 11', 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 13990000, 3),
(87, 23, '3', 'Samsung Galaxy A03', 'https://cf.shopee.vn/file/c864ec34e780459ded129d5354a7e04f', 2690000, 3),
(95, 24, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 3),
(103, 24, 'PK1', 'Sạc Nhanh Iphone 20W chân Chân Tròn', 'https://cf.shopee.vn/file/7295d807792245a166ea5f6255477fda', 200000, 3),
(104, 24, 'OP1', 'Ốp điện thoại hình mặt cười cho Samsung', 'https://cf.shopee.vn/file/ee0a2ed5bf9e976a4dd7cf92fbbadee4', 16500, 1),
(105, 28, '2', 'Apple iPhone 11', 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 13990000, 3),
(106, 28, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 1),
(107, 28, '4', 'Samsung Galaxy S21', 'https://cf.shopee.vn/file/3cde21023be39eb5eebfb98d90fec94d', 14190000, 1),
(108, 29, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 3),
(109, 29, 'PK1', 'Sạc Nhanh Iphone 20W chân Chân Tròn', 'https://cf.shopee.vn/file/7295d807792245a166ea5f6255477fda', 200000, 1),
(110, 29, 'PK5', 'Giá Đỡ Điện Thoại livestream xem video', 'https://cf.shopee.vn/file/4821f83d2d5a60871b28537b897c2541', 30000, 1),
(111, 29, 'OP5', 'Ốp điện thoại TPU dẻo in hình Gấu cho Lenovo Vibe C', 'https://cf.shopee.vn/file/9fb8e62d176a484295841088204dea5c', 30000, 1),
(112, 30, '1', 'Apple iPhone 13 Pro ', 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 29490000, 1),
(113, 30, 'OP3', 'Ốp điện thoại OPPO', 'https://cf.shopee.vn/file/153081be7284992e2b325604569fe208', 30000, 1),
(114, 31, '4', 'Samsung Galaxy S21', 'https://cf.shopee.vn/file/3cde21023be39eb5eebfb98d90fec94d', 14190000, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `MaKH` int(11) NOT NULL,
  `TenKH` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TenTaiKhoan` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `DienThoai` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MatKhau` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `DiaChi` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GioiTinh` varchar(4) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgaySinh` int(10) DEFAULT NULL,
  `ThangSinh` int(10) DEFAULT NULL,
  `NamSinh` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`MaKH`, `TenKH`, `TenTaiKhoan`, `Email`, `DienThoai`, `MatKhau`, `DiaChi`, `GioiTinh`, `NgaySinh`, `ThangSinh`, `NamSinh`) VALUES
(1, 'Nguyễn Hoàng Hoài Nam', 'hoanghoainam', 'hoanghoainam@gmail.com', '0123456798', '123', 'Hải Dương', 'Nam', 9, 11, 2001),
(2, 'Phạm Thị Lan Anh', 'lananh', 'phamthilananh@gmail.com', '0159736824', '147', 'Hồ Chí Minh', 'Nữ', 18, 1, 1999),
(3, 'Đặng Hồng Hà', 'danghongha', 'danghongha@gmail.com', '013974268', '789', 'Đà Nẵng', 'Nam', 17, 12, 1998),
(8, 'Nguyễn Hải Nam', 'hainamnguyen', 'hainam@gmail.com', '0174896325', '125', 'Hà Nội', 'Nam', 26, 7, 2000),
(9, 'Đặng Thị Hoa', 'dangthihoa', 'dangthihoa@gmail.com', '0159736248', '125', 'Đà Nẵng', 'Nữ', 17, 10, 1999),
(15, 'admin', 'admin', 'admin@gmail.com', '0123456789', '123', 'Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội', 'Nam', 8, 8, 2001),
(16, 'Đặng Hoài Trâm', 'danghoaitram', 'hoaitram@gmail.com', '0159874236', '1478', 'Sài Gòn', 'Nữ', 19, 6, 1999),
(17, 'nguyenvanh', 'nguyenvanh', 'nguyenvanh@gmail.com', '0159874623', '1357', 'Hà Nội', 'Nam', 29, 12, 2001);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `opdienthoai`
--

CREATE TABLE `opdienthoai` (
  `MaOp` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `TenOp` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `GiaTien` int(11) NOT NULL,
  `GiamGia` int(11) DEFAULT NULL,
  `MoTa` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgayTao` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MaDM` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `opdienthoai`
--

INSERT INTO `opdienthoai` (`MaOp`, `TenOp`, `HinhAnh`, `GiaTien`, `GiamGia`, `MoTa`, `NgayTao`, `MaDM`) VALUES
('OP1', 'Ốp điện thoại hình mặt cười cho Samsung', 'https://cf.shopee.vn/file/ee0a2ed5bf9e976a4dd7cf92fbbadee4', 16500, 30000, 'Đặc điểm: \r\n 1. Cửa hàng bán hàng từ nhà máy \r\n 2. Vừa vặn với model điện thoại của bạn.\r\n 3. Chất liệu ------ silicone chất lượng cao, không có mùi, làm cho điện thoại của bạn trở nên cổ điển và thanh lịch.\r\n 4. Chất liệu xanh và thân thiện với môi trường, thiết kế thời trang.\r\n 5. Theo mô hình mở điện thoại di động thật, thiết kế loa, nút bấm, camera và cổng truy cập hoàn hảo. Giúp điện thoại của bạn hoạt động dễ dàng.', '10/9/2021 19:10:10', 2),
('OP2', 'Ốp lưng iphone Tóc xù cạnh vuông', 'https://cf.shopee.vn/file/8a8895df8de641597ec4826db2013ab4', 30000, 9000, 'Shin Case đảm bảo: Ốp lưng iphone Noel Bear cạnh vuông 6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/13/pro/max/plus/promax\r\n- Hình ảnh sản phẩm giống 100%.\r\n- Chất lượng sản phẩm tốt 100%.\r\n- Sản phẩm được kiểm tra kĩ càng, nghiêm ngặt trước khi giao hàng.\r\n- Sản phẩm luôn có sẵn trong kho hàng. \r\n- Giao hàng ngay khi nhận được đơn hàng.\r\n- Hoàn tiền ngay nếu sản phẩm không giống với mô tả.\r\n- Đổi trả ngay nếu bất kì lí do gì khiến quý khách không hài lòng.\r\n- Giao hàng toàn quốc, nhận hàng thanh toán. \r\n- Hỗ trợ đổi trả theo quy định.\r\n- Gửi hàng siêu tốc : Với đội ngũ hơn 100 nhân viên Shin case cam kết dịch vụ đóng gói siêu nhanh.', '9/11/2021 8:30:11', 1),
('OP3', 'Ốp điện thoại OPPO', 'https://cf.shopee.vn/file/153081be7284992e2b325604569fe208', 30000, 16500, 'Đặc điểm:\r\n 1. Hàng được lấy từ nhà máy. Giá cả phải chăng, các khách hàng bán sỉ luôn được chào đón\r\n 2. Phù hợp hoàn hảo cho mẫu điện thoại của bạn.\r\n 3. Chất liệu ------ silicone chất lượng cao, không có mùi, làm cho điện thoại của bạn trông cổ điển và thanh lịch.\r\n 4. Bảo vệ và thân thiện với môi trường, thiết kế thời trang.\r\n 5. Được làm theo mẫu điện thoại thực tế, sử dụng hoàn hảo loa, nút, camera và cổng. Dễ dàng thao tác trên điện thoại của bạn.\r\n 6. Dịch vụ sau bán hàng tốt nhất, nếu bạn có bất kỳ câu hỏi nào, bạn có thể liên hệ với chúng tôi bất cứ lúc nào.\r\n 7. Nếu bạn thích sản phẩm của chúng tôi, hy vọng rằng bạn có thể cho đánh giá 5 sao và động viên sau khi nhận được sản phẩm\r\n \r\n Chất liệu: Silicone mềm\r\n Gói hàng bao gồm: 1 gói hàng = 1 ốp điện thoại', '10/3/2021 16:50:11', 4),
('OP4', 'Ốp Lưng Realme', 'https://cf.shopee.vn/file/2723d2c88414196a695ff2fdf9ec1968', 32000, 16000, '  Chi tiết sản phẩm:\r\n  \r\n  1. 100% hàng mới\r\n  2. Chất liệu: silicon\r\n  3. Kiểu dáng: thiết kế thời trang, dễ gắn và tháo ra.\r\n  4. Model: vừa vặn cho điện thoại di động của bạn.\r\n  \r\n  Gói hàng bao gồm: 1 * ốp điện thoại', '19/1/2021 19:11:20', 5),
('OP5', 'Ốp điện thoại TPU dẻo in hình Gấu cho Lenovo Vibe C', 'https://cf.shopee.vn/file/9fb8e62d176a484295841088204dea5c', 30000, 15000, 'Lenovo Vibe C K4 K5 K6 K8 Note A536 P2 A6000 K3 A6010 A1000 Bear Ốp lưng silicon TPU mềm Mặt hàng này có thể phù hợp với nhiều mẫu điện thoại, vui lòng chọn mẫu bạn thích và mua nó. Ngoài ra, chúng tôi có thể tùy chỉnh ốp lưng cho bạn bằng ảnh của bạn, nếu bạn thích, hãy chọn trường hợp tùy chỉnh để mua, sau đó gửi ảnh của bạn cho tôi và cho tôi biết mẫu điện thoại của bạn. Đây là chiếc ốp lưng mới 100%, chắc chắn, thời trang để bảo vệ điện thoại của bạn chống trầy xước, rơi rớt, va đập, chống va đập và trầy xước. Thiết kế vỏ ốp lưng mỏng, vừa vặn với các cạnh được xác định và hoàn thiện mịn. Dễ dàng trượt vào và ra khỏi túi. Chất liệu: Được làm bằng silicon chất lượng cao để bảo vệ toàn bộ xung quanh thiết bị. Gói bao gồm: 1 hộp đựng Tất cả các tính năng, nút bấm và độ nhạy của điện thoại thông minh của bạn đều có thể truy cập và vận hành dễ dàng khi đã lắp hộp đựng.', '11/3/2021 21:09:10', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phieugiamgia`
--

CREATE TABLE `phieugiamgia` (
  `MaPhieu` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TenPhieu` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `GiamTien` double DEFAULT NULL,
  `SoLuong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phieugiamgia`
--

INSERT INTO `phieugiamgia` (`MaPhieu`, `TenPhieu`, `GiamTien`, `SoLuong`) VALUES
('GIAMGIA1', 'Giảm giá tháng 5', 100000, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phukien`
--

CREATE TABLE `phukien` (
  `MaPK` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `TenPK` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `GiaTien` int(11) NOT NULL,
  `GiamGia` int(11) NOT NULL,
  `HinhAnh` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `MoTa` text COLLATE utf8_unicode_ci NOT NULL,
  `NgayTao` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MaDM` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phukien`
--

INSERT INTO `phukien` (`MaPK`, `TenPK`, `GiaTien`, `GiamGia`, `HinhAnh`, `MoTa`, `NgayTao`, `MaDM`) VALUES
('PK1', 'Sạc Nhanh Iphone 20W chân Chân Tròn', 200000, 153000, 'https://cf.shopee.vn/file/7295d807792245a166ea5f6255477fda', '?Đặc điểm nhận biết bộ sạc nhanh 20W :\r\n- Củ sạc cầm rất nặng và đầm tay, có thể đứng trên 1 mặt phẳng bất kỳ.\r\n- Các chân cắm Type-C cực kỳ tinh xảo và đều tăm tắp, cắm cáp vào rất chắc chắn.\r\n- Các thông số in phía dưới rất tròn trịa, chữ không bị gãy, mờ như hàng fake.\r\n- Từ đời củ 20W do Apple không in số seri riêng trong khe USB nữa nên số seri này sẽ in ngay sau dãy thông tin \r\n- Chân cắm sạc đúc từ Thép + Crom giúp chống han gỉ, tăng độ bền lên tới 3-5 năm.', '9/3/2021 19:09:10', 1),
('PK2', 'Kính cường lực Xiaomi', 25000, 17000, 'https://cf.shopee.vn/file/f708a56f550d05885f547fbcc4e27d39', 'ƯU ĐIỂM CỦA KÍNH CƯỜNG LỰC 9D FULL MÀN.\r\n- Độ cứng 9H bảo vệ tốt gấp 5 lần kính cường lực thông thường.\r\n- Vát cạnh 3D ôm sát màn hình máy, hạn chế mẻ viền, bong tróc.\r\n- Kính chống thấm nước, mồ hôi tay nên không lo ố vàng sau thời gian sử dụng. \r\n- Điểm cải tiến của kính cường lực 9D là MỎNG và NHẸ hơn, chỉ 0,25mm nhưng vẫn đảm bảo khả năng chịu lực.\r\n- Chất kết dính silicon mạnh mẽ khó bong tróc nhưng khi bạn bóc ra không ảnh hưởng đến màn hình của máy.\r\n- Độ trong suốt cua cường lực gần như tuyệt đối không ảnh hưởng đến chất lượng hiển thị, cho hình ảnh chân thực, y hệt màn hình gốc.', '10/3/2021 13:40:15', 3),
('PK3', 'Tai nghe nhét tai có dây 3.5mm', 50000, 36000, 'https://cf.shopee.vn/file/638c26b8a19ba675f247da402207d874', 'Loại nguồn hàng: hàng có sẵn\r\n Màu sắc: nhiều màu sắc đẹp\r\n Phạm vi tần số phản hồi: 20-20000\r\n Loại tai nghe: tai nghe nhét tai\r\n Đường kính giắc cắm: 3,5 mm\r\n Có hoặc không có micro: có\r\n Có phải tai nghe không dây: tai nghe có dây\r\n Độ nhạy: 105-3\r\n Nguồn ra tai nghe: âm thanh sống động\r\n Loại giắc cắm: tai nghe có dây cáp\r\n Trở kháng: 32Ω\r\n Trọng lượng: 32g\r\n Nguyên lý âm thanh: cuộn dây chuyển động\r\n Chiều dài dây cáp: 1.1\r\n Chất liệu dây cáp tai nghe: TPE\r\n Cách đeo: nhét tai\r\n Đường kính loa: 1406\r\n Loại sản phẩm: Tai nghe', '11/3/2021 23:00:32', 2),
('PK4', 'Kính camera dùng cho oppo a74 5g', 50000, 0, 'https://cf.shopee.vn/file/f4249920ea006926a6dd3b5f23a4c856', 'KÍNH CAMERA VÀ KEO 3.M  DÁN\r\n**Sản phẩm dùng thay thế kính camera trên máy khi máy khách sài không may bị cấn nút , nứt vỡ, trầy làm mờ kính chụp hình mờ do kính camera.\r\nMặt kính camera oppo a74 5g được định nghĩa là lớp kính ở mặt lưng thiết bị, che chắn ngay khu vực  thấu kính..\r\nMặt kính camera có nhiệm vụ quan trọng nhất là bảo vệ ống kính máy ảnh khỏi các tác nhân của môi trường vật lý bên ngoài như va đập, cấn, tì đè,…\r\n*Ống Lens máy ảnh cơ, kĩ thuật số hay máy ảnh smartphone đều là những bộ phận rất “nhạy cảm” và dễ hư hỏng, yêu cầu điều kiện bảo quản tốt\r\n-Tại đây chúng tôi chuyên cung cấp các loại nắp lưng ,vỏ, đặc biệt rất nhiều model kính camera và các linh kiện thay thế cho các dòng điện thoại với giá tốt nhất.luôn cập nhật những sản phẩm mới nhất .\r\n*Khách nhận hàng ưng ý đánh giá 5 Sao để khích lệ động viên shop nhé.\r\n*Các bạn đừng quên BẤM THEO DÕI shop để nhận được mã giảm giá cho đơn hàng và cũng có thể được tham khảo nhiều sản phẩm biết đâu các bạn cần.\r\n+Dòng sản phẩm tương thích: oppo a74 5g\r\n+Phân Phối: ĐIỆN THOẠI SỐ', '12/3/2021 19:50:11', 4),
('PK5', 'Giá Đỡ Điện Thoại livestream xem video', 30000, 19000, 'https://cf.shopee.vn/file/4821f83d2d5a60871b28537b897c2541', 'Đặc điểm nổi bật của Giá Đỡ Điện Thoại \r\n- Thích hợp cho bạn vừa làm việc, vừa có thể xem phim, xem youtube,...\r\n- Thiết kế nhỏ gọn, có thể tháo rời, mang đi làm, công tác, du lịch, cắm trại...\r\n- Phần thân có thể điều chỉnh kích thước cao thấp theo mong muốn của bạn\r\n- Giá đỡ điện thoại được làm bằng kim loại và nhựa cao cấp, có độ bền cao và dể sử dụng.\r\n- Phần chân đế chắc chắn chống trượt khi để bàn\r\n- Phần giá đỡ điện thoại có thể điều chỉnh linh hoạt phù hợp với kích thước điện thoại của bạn, có độ rộng từ 6,5cm đến 9.5cm phù hợp hầu hết tất cả các dòng điện thoại hiện nay\r\n- Cơ chế xoay 360 độ tiện ích ', '13/3/2021 20:01:00', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `MaSP` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `TenSP` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `GiaTien` double NOT NULL,
  `GiamGia` double DEFAULT NULL,
  `HinhAnh` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `ThoiGian` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MoTa` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `LuotXem` int(11) DEFAULT NULL,
  `TrongLuong` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `KíchThuoc` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `KichCo` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MauSac` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaDM` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`MaSP`, `TenSP`, `GiaTien`, `GiamGia`, `HinhAnh`, `SoLuong`, `ThoiGian`, `MoTa`, `LuotXem`, `TrongLuong`, `KíchThuoc`, `KichCo`, `MauSac`, `MaDM`) VALUES
('1', 'Apple iPhone 13 Pro ', 29490000, NULL, 'https://cf.shopee.vn/file/6a3ea7f7c0b949991bd392be2d84ebb2', 100, '2022-03-10', 'iPhone 13 Pro. Một nâng cấp hệ thống camera chuyên nghiệp hoành tráng chưa từng có. Màn hình Super Retina XDR với ProMotion cho cảm giác nhanh nhạy hơn. Chip A15 Bionic thần tốc. Mạng 5G siêu nhanh.1 Thiết kế bền bỉ và thời lượng pin dài nhất từng có trên iPhone (2).', 80, '200g', '100x200x300mm', NULL, 'Xanh', 1),
('2', 'Apple iPhone 11', 13990000, NULL, 'https://cf.shopee.vn/file/19db3eddf43e8251af2ba9dd92fedffc', 83, '2022-03-10', 'Hệ thống camera kép với Ultra Wide. Chế độ Ban Đêm và chất lượng video tuyệt vời. \r\nChống nước và chống bụi.\r\nThời lượng pin lâu.\r\nVới 6 màu tuyệt đẹp. Trải nghiệm iPhone 11.', 87, '150g', '6.1 inches', '6.1 inches', 'Xám', 1),
('3', 'Samsung Galaxy A03', 2690000, NULL, 'https://cf.shopee.vn/file/c864ec34e780459ded129d5354a7e04f', 95, '2022-03-10', 'Màn hình lớn hơn, trải nghiệm nhiều hơn\r\nThưởng thức nhiều nội dung ở chất lượng cao hơn với màn hình tràn viền vô cực Infinity-V 6.5\". Công nghệ HD+ tái hiện mọi hình ảnh sống động, sắc nét cho trải nghiệm mãn nhãn, chân thực.', 95, '196g', '100x80x90mm', NULL, 'Xanh', 2),
('4', 'Samsung Galaxy S21', 14190000, NULL, 'https://cf.shopee.vn/file/3cde21023be39eb5eebfb98d90fec94d', 85, '2022-03-10', 'Galaxy S21 FE 5G\r\nVẻ đẹp thiết kế đầy ngưỡng mộ với sắc màu thời thượng cho mọi phong cách, từ Xanh Olive và Tím Pastel nhẹ nhàng đến Trắng Flora và Đen Graphite tinh tế cho bạn thỏa sức mix & match cùng mọi trang phục.', 74, '177g', ' 74,5 x 155,7 x 7,9 mm ', NULL, 'Ghi', 2),
('5', 'Redmi Note 10', 4990000, NULL, 'https://cf.shopee.vn/file/edda36c88bc34c7137374ddfce0603c6', 71, '2022-03-10', 'Điện thoại Redmi 10 là mẫu smartphone  mới nhất từ nhà Xiaomi có mức giá bán khá rẻ nhưng lại sở hữu trên mình rất nhiều thứ khiến mọi người phải ngạc nhiên.\r\nRedmi 10  được coi như phiên bản nâng cấp của chiếc Redmi 9 đã ra mắt vào năm ngoái, đồng thời cũng là mẫu điện thoại đầu tiên trong series được trang bị màn hình tần số quét cao lên đến 90Hz.', 10, '17g', '8,92 mm', NULL, 'Xanh', 5),
('6', 'Xiaomi 11T', 10990000, NULL, '	https://cf.shopee.vn/file/90ebcd275bd43de406b6f4fb338d0089', 89, '2022-03-10', 'Một dòng điện thoại hiện thân cho những giá trị cốt lõi của Xiaomi, điện thoại Xiaomi 11T series sở hữu 1 trong những công nghệ máy ảnh tốt nhất, và 1 trong những màn hình LCD tốt nhất với tần số quét 144Hz. Không những Fans Xiaomi mà cả giới truyền thông đều yêu thích những tính năng đặc biệt này. Tiếp nối thành công của Mi 10T pro.', 79, '203g', '164,1mm x 76,9mm x 8,8mm', NULL, 'Trắng', 3),
('7', 'OPPO A55', 4350000, NULL, 'https://cf.shopee.vn/file/8617af13fde79ff36ad3f35bb6659740', 81, '2022-03-10', 'OPPO A55 4G có 2 biến thể màu gồm Starry Black (đen) và Rainbow Blue (xanh). Thiết kế cong 3D cùng kích thước mỏng nhẹ, OPPO A55 4G vừa vặn trong tay người cầm, cho từng thao tác trải nghiệm thoải mái và chắc chắn.', 15, '100g', '100x85x100mm', NULL, 'Xanh', 4),
('8', 'Vivo Y20', 3550000, NULL, 'https://cf.shopee.vn/file/ce0344da4d52fa95c331cea2f65e8b8c', 97, '2022-03-10', 'Vivo Y20 với thiết kế trẻ trung, cảm biến vân tay cạnh bên thông minh, hiệu năng mượt mà và cụm 3 camera AI chụp siêu cận chuyên nghiệp, sẽ là người bạn đồng hành không thể thiếu của bạn trên mọi nẻo đường.', 17, '120g', '6.51 inch', NULL, 'Xanh', 8),
('9', 'Apple iPhone 12 ', 18690000, 0, 'https://cf.shopee.vn/file/77404ff511ce0585cca1f78f89b91c91', 149, '2022-03-20', 'iPhone 12 có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt.', 78, '100g', '6.1 inches', '100x150x30mm', 'Tím', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theloaitintuc`
--

CREATE TABLE `theloaitintuc` (
  `MaTL` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `TenTL` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `theloaitintuc`
--

INSERT INTO `theloaitintuc` (`MaTL`, `TenTL`) VALUES
('TL01', 'Hoạt động cửa hàng'),
('TL02', 'Tài khoản và đơn hàng'),
('TL03', 'Hinh thức thanh toán'),
('TL04', 'Cách thức mua hàng'),
('TL05', 'Khuyến mãi'),
('TL06', 'Mã giảm giá');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `MaTinTuc` int(11) NOT NULL,
  `TieuDeTin` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `HinhAnh` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `TomTat` text COLLATE utf8_unicode_ci NOT NULL,
  `NgayDang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NguoiDang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `NoiDung` text COLLATE utf8_unicode_ci NOT NULL,
  `TrangThai` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MaTL` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tintuc`
--

INSERT INTO `tintuc` (`MaTinTuc`, `TieuDeTin`, `HinhAnh`, `TomTat`, `NgayDang`, `NguoiDang`, `NoiDung`, `TrangThai`, `MaTL`) VALUES
(5, 'Những tính năng smartphone sáng tạo táo bạo được khai sáng bởi LG', 'https://cdn.24h.com.vn/upload/2-2022/images/2022-04-07/2-1649300397-344-width660height371.jpg', 'Đã một năm kể từ khi LG quyết định rời khỏi mảng kinh doanh smartphone khiến nhiều người cảm thấy tiếc nuối, đặc biệt với những gì công ty này thể hiện.', '9/12/2021 - 18:09:10', '', 'LG G5 ra mắt năm 2016 trở thành smartphone đầu tiên thoát khỏi công thức truyền thống khi có dạng mô-đun. Phần dưới của điện thoại có thể kéo ra ngoài để lộ một viên pin có thể tháo rời.\r\n\r\nNhững tính năng smartphone sáng tạo táo bạo được khai sáng bởi LG - 1\r\nNhưng có nhiều hơn nữa những thứ mà dạng mô-đun này mang lại không chỉ riêng việc thay pin. Người dùng có thể đặt vào khe này một tay cầm máy ảnh hay DAC Hi-Fi. Thật không may, chỉ có một số tiện ích bổ sung được phát hành kể từ khi LG G5 ra mắt trước khi LG nhanh chóng từ bỏ khái niệm này do doanh số bán hàng yếu.\r\n\r\nLG lần đầu tiên thử nghiệm màn hình thứ hai khi V10 ra mắt năm 2015 với một màn hình phụ nhỏ phía trên màn hình chính. Màn hình thứ hai này tách biệt với màn hình chính và có một số chức năng tiện dụng vào thời điểm V20 được trang bị tính năng tương tự vào năm 2016. Các chức năng này bao gồm hiển thị các shortcut ứng dụng, thông báo, mục lịch, điều khiển phương tiện, tab trình duyệt,…\r\n\r\nTuy nhiên, khi LG G6 ra mắt vào năm 2017, công ty Hàn Quốc đã không còn sử dụng màn hình phụ nữa mà tập trung vào tỷ lệ hiển thị màn hình 18:9. Gần đây, một số điện thoại như Xiaomi Mi 11 Ultra đã đưa màn hình phụ trở lại để giúp người dùng chụp ảnh selfie bằng camera sau.\r\n\r\nLG sau đó đã thử nghiệm khái niệm màn hình phụ khác vào năm 2019 khi ra mắt LG V50 với vỏ màn hình kép, và dự án này tiếp tục mở rộng đến chiếc LG Wing xấu số vào cuối năm 2020.\r\n\r\nMột sự đổi mới đáng nhớ khác của LG là quyết định chuyển nút nguồn và nút âm lượng ra phía sau một số điện thoại. Công ty đã ra mắt bố cục này trên LG G2 vào năm 2013, có nút chỉnh âm lượng với nút nguồn nằm giữa phím tăng và giảm âm lượng.', '', 'TL01'),
(6, 'Giới trẻ ngày một cuồng iPhone, Apple Watch', 'https://cdn.24h.com.vn/upload/2-2022/images/2022-04-07/46377-90367-000-lead-iphone-xl-1649301160-953-width660height371.jpg', 'Theo khảo sát mới nhất, các sản phẩm cộp mác “Nhà Táo”: iPhone, AirPods, Apple Watch đều thống trị thị trường công nghệ tuổi teen.', '9/9/2019 - 18:48:09', '', 'Cuộc khảo sát mới nhất dành cho thanh thiếu niên của Piper Sandler cho thấy kỷ lục mọi thời đại về việc sử dụng tai nghe không dây AirPods của thanh thiếu niên và nhu cầu mạnh mẽ đối với iPhone 13. Các con số là minh chứng cho việc Apple vẫn là nhà sản xuất thiết bị phổ biến nhất cho thanh thiếu niên.\r\n\r\nGiới trẻ ngày một cuồng iPhone, Apple Watch - 1\r\niPhone 13 rất \"hút khách\".\r\n\r\nCông ty phân tích Piper Sandler thực hiện 2 cuộc khảo sát với thanh thiếu niên Mỹ mỗi năm, cuộc khảo sát gần đây nhất là vào mùa thu năm 2021. Báo cáo mùa xuân năm 2022 mới được công bố cho thấy “Nhà Táo” vẫn duy trì sự phổ biến rộng rãi của mình.\r\n\r\nTheo Piper Sandler, 87% trong số 7.100 thanh thiếu niên được khảo sát tại 44 bang của Mỹ, hiện đang sở hữu iPhone. Trong báo cáo trước đó, 86% thanh thiếu niên được khảo sát sở hữu thiết bị cộp mác “Táo Khuyết”.\r\n\r\nGiới trẻ ngày một cuồng iPhone, Apple Watch - 3\r\n\r\nCó tới gần 90% thanh thiếu niên đang sở hữu iPhone.\r\n\r\nTrong cuộc khảo sát mới vào đầu năm 2022, khoảng 18% thanh thiếu niên sở hữu iPhone 13, \"vượt xa\" con số 12% sở hữu iPhone 12 trong báo cáo trước đó. Tương tự, có tới 34% - tỷ lệ kỷ lục thanh thiếu niên được khảo sát hiện sở hữu Apple Watch. Đây là mức tăng khá lớn so với 30% của cuộc khảo sát trước đó. Tỷ lệ thanh thiếu niên có ý định mua đồng hồ Apple Watch trong 6 tháng tới đã tăng lên 14% so với tỷ lệ 13% trước đó.\r\n\r\nTai nghe không dây AirPods của Apple đã đạt được mức cao nhất mọi thời đại trong các cuộc khảo sát của Piper Sandler, với 72% thanh thiếu niên hiện đang sở hữu một đôi tai nghe này.\r\n\r\nGiới trẻ ngày một cuồng iPhone, Apple Watch - 4\r\n\r\nTỷ lệ sở hữu đồng hồ Apple Watch cũng tăng dần theo từng năm.\r\n\r\nPiper Sandler cũng báo cáo, tỷ lệ thanh thiếu niên sẽ mua một chiếc iPhone trong thời gian tới sẽ là 87%, tương đương với tỷ lệ được khảo sát vào mùa thu năm 2021. Đồng thời, tỷ lệ thanh thiếu niên sẽ nâng cấp lên iPhone 13 vào đầu năm cũng đã tăng lên 23%, tăng nhẹ so với tỷ lệ 22% trong khảo sát trước đó.\r\n\r\nCông ty nghiên cứu cho biết: “Cả 87% thanh thiếu niên sở hữu iPhone và 87% có ý định mua iPhone vẫn ở gần mức cao kỷ lục trong cuộc khảo sát của chúng tôi. Ngoài ra, những xu hướng này sẽ còn tiếp tục tăng khi công ty giới thiệu iPhone 5G mới, mang tới một chu kỳ nâng cấp mới.\"\r\n\r\nPiper Sandler cũng cho hay, \"những xu hướng tích cực này sẽ là chất xúc tác để tăng trưởng dịch vụ hơn nữa.\" Điều này đã được phản ánh qua cách Apple Pay \"xếp top đầu\" trong số các ứng dụng thanh toán, \"một phần là do 87% thanh thiếu niên có iPhone.\"\r\n\r\nCuộc khảo sát lần thứ 43 này được thực hiện trong khoảng thời gian từ ngày 16/2 – 22/3/2022. Lần này, chỉ có 7.100 thanh thiếu niên tham gia khảo sát, giảm một chút so với 10.000 thanh thiếu niên của báo cáo trước.', '', 'TL01');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`MaBL`),
  ADD KEY `MaKH` (`MaKH`),
  ADD KEY `MaSP` (`MaSP`),
  ADD KEY `MaPK` (`MaPK`),
  ADD KEY `MaOp` (`MaOp`);

--
-- Chỉ mục cho bảng `binhluanbaiviet`
--
ALTER TABLE `binhluanbaiviet`
  ADD PRIMARY KEY (`MaBLBV`),
  ADD KEY `MaTinTuc` (`MaTinTuc`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`MaDM`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`MaDH`),
  ADD KEY `MaKH` (`MaKH`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`MaGH`),
  ADD KEY `MaDH` (`MaDH`),
  ADD KEY `MaSP` (`MaSP`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`MaKH`);

--
-- Chỉ mục cho bảng `opdienthoai`
--
ALTER TABLE `opdienthoai`
  ADD PRIMARY KEY (`MaOp`),
  ADD KEY `MaDM` (`MaDM`);

--
-- Chỉ mục cho bảng `phieugiamgia`
--
ALTER TABLE `phieugiamgia`
  ADD PRIMARY KEY (`MaPhieu`);

--
-- Chỉ mục cho bảng `phukien`
--
ALTER TABLE `phukien`
  ADD PRIMARY KEY (`MaPK`),
  ADD KEY `MaDM` (`MaDM`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`MaSP`,`MaDM`),
  ADD KEY `MaDM` (`MaDM`);

--
-- Chỉ mục cho bảng `theloaitintuc`
--
ALTER TABLE `theloaitintuc`
  ADD PRIMARY KEY (`MaTL`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`MaTinTuc`),
  ADD KEY `MaTL` (`MaTL`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `MaBL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `binhluanbaiviet`
--
ALTER TABLE `binhluanbaiviet`
  MODIFY `MaBLBV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `MaDM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `MaDH` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `giohang`
--
ALTER TABLE `giohang`
  MODIFY `MaGH` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `MaKH` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `MaTinTuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`),
  ADD CONSTRAINT `binhluan_ibfk_2` FOREIGN KEY (`MaPK`) REFERENCES `phukien` (`MaPK`),
  ADD CONSTRAINT `binhluan_ibfk_3` FOREIGN KEY (`MaOp`) REFERENCES `opdienthoai` (`MaOp`);

--
-- Các ràng buộc cho bảng `binhluanbaiviet`
--
ALTER TABLE `binhluanbaiviet`
  ADD CONSTRAINT `binhluanbaiviet_ibfk_1` FOREIGN KEY (`MaTinTuc`) REFERENCES `tintuc` (`MaTinTuc`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKH`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `giohang_ibfk_1` FOREIGN KEY (`MaDH`) REFERENCES `donhang` (`MaDH`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `opdienthoai`
--
ALTER TABLE `opdienthoai`
  ADD CONSTRAINT `opdienthoai_ibfk_1` FOREIGN KEY (`MaDM`) REFERENCES `danhmuc` (`MaDM`);

--
-- Các ràng buộc cho bảng `phukien`
--
ALTER TABLE `phukien`
  ADD CONSTRAINT `phukien_ibfk_2` FOREIGN KEY (`MaDM`) REFERENCES `danhmuc` (`MaDM`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`MaDM`) REFERENCES `danhmuc` (`MaDM`);

--
-- Các ràng buộc cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_ibfk_1` FOREIGN KEY (`MaTL`) REFERENCES `theloaitintuc` (`MaTL`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
