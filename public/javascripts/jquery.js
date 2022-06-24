// $(function( $ ){
//     $('.capnhat').click(function(e) {
//         e.preventDefault();
//         console.log("Hôm nay nắng quá");
//         $.ajax({
//            url: "/cart/giohang",
//            type: "get",
//            dataType: "text",
//            data: {
//                mahd: $('#madh').val()
//            },
//            success: function() {
//                alert("Thành công");
//            }
//         })
//         $.ajax({
//             url: "/cart/giohang/capnhat",
//             type: "post",
//             dataType: "text",
//             data: {
//                 soluong: layhd($('.soluong')),
//                 masp: layhd($('.masp'))
//             },
//             success: function() {
//                 alert("Thành công");
//             }
//          })
//          window.location.href="/cart/giohang";
//     });
// });
// $(function($) {
//     $('.capnhat').on( "click", function() {
//         alert("clicked");
//       });
// })
// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });
$(document).ready(function(){
   $("#linknhap").click(function(e) {
       $("#onhapma").slideToggle();
       e.preventDefault();
   })
   $("#linkvc").click(function(e) {
       console.log("Nhập thành công");
       $("#chonvc").slideToggle();
       e.preventDefault();
       
   })
   $("#email").click(function(e) {
       console.log("Nhập thành công");
       $("#oemail").slideToggle();
       e.preventDefault();
   })
   $("#sdt").click(function(e) {
       console.log("Nhập thành công");
       $("#osdt").slideToggle();
       e.preventDefault();
   })
   $("#diachi").click(function(e) {
       console.log("Nhập thành công");
       $("#odiachi").slideToggle();
       e.preventDefault();
   })
   $(".hopgiohang").click(function(e){
    console.log("Nhập thành công");
    $(".chitiethopgh").slideToggle();
    e.preventDefault();
    })
    $("#nutmenu").click(function(e){
      console.log("Đã bấm menu");
      $(".tenmenu").slideToggle();
    e.preventDefault();
});
$(".cart-plus-minus1").append('<div class="dec qtybutton tang"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton giam"><i class="fa fa-angle-up"></i></div>');
 $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass('inc')) {
       var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
       if (oldValue > 0) {
         var newVal = parseFloat(oldValue) - 1;
         } else {
         newVal = 0;
       }
       }
    $button.parent().find("input").val(newVal);
    return false;
   });
})
   