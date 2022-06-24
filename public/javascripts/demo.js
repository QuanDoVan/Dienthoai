document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementsByName('radio');
    var hienthi = document.getElementsByClassName('tenvc')[0];
    if (hienthi.innerText == "") {
        hienthi.innerHTML = "Chọn phương thức vận chuyển"
    }
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', function () {
            if (this.checked === true) {
                hienthi.style.color = '#00bfa5';
                hienthi.innerHTML = this.value;
            }
        })
    }
}, false);