function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}


/**
 * Mô tả : Tạo TSDR
 */
function taoTSDR(callback) {
  const time = randomInt(2000, 4000)
  console.log("Bắt đầu tạo TSDR");
  // Thời gian tạo TSDR là 1s
  setTimeout(() => {
    console.log(`Đã tạo xong TSDR: ${time / 1000} giây`)
    callback()
  }, time)
}


document.addEventListener('DOMContentLoaded', function () {
  taoTSDR(() => {
    console.log("Có thể xử lý gửi anh Dương duyệt TSDR");
  });
})
