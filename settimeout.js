function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Mô tả : Tạo TSDR
 */
function daoTaoNghiepVu() {
    const time = randomInt(2000, 3000);

    console.log('1. Bắt đầu họp đào tạo nghiệp vụ')

    // Thời gian tạo TSDR là 1s
    setTimeout(() => {
        console.log(`2. Đã đào tạo xong nghiệp vụ: ${time / 1000} giây`)
    }, time)

}

document.addEventListener('DOMContentLoaded', function () {
    daoTaoNghiepVu();

    setTimeout(() => {
        console.log('3. Có thể nhận PBI');
    }, 2500)
})
